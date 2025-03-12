import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

import { checkLogin } from '@/api/authInterceptor';
import ERROR_MESSAGES from '@/constants/errorMessages';
import { UNAUTHORIZED_CODE, INTERNAL_SERVER_ERROR_CODE } from '@/constants/magicNumbers';

import { useAlertStore } from '@/stores/useToastStore';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const logOnDev = (message: string, data?: unknown) => {
  if (import.meta.env.DEV) {
    console.log(`🛠 [DEBUG] ${message}`, data ?? '');
  }
};

function handleError(error: AxiosError) {
  const { setAlert } = useAlertStore.getState();

  if (error.response) {
    logOnDev('📌 error.response:', error.response);

    const responseData = error.response.data as {
      success?: boolean;
      error?: { code: number; message: string };
      statusCode?: number;
    };

    const statusCode = responseData?.statusCode || error.response.status;

    if (statusCode === UNAUTHORIZED_CODE) {
      setAlert('비밀번호나 아이디를 확인해주세요. 다시 로그인해주세요.');
      return;
    }

    if (statusCode === INTERNAL_SERVER_ERROR_CODE) {
      setAlert('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    if (responseData?.error) {
      logOnDev('📌 서버에서 전달된 에러 메시지:', responseData.error.message);
      const errorMessage = ERROR_MESSAGES[responseData.error.code]?.ko || '알 수 없는 오류가 발생했습니다.';
      setAlert(errorMessage);
    } else {
      setAlert('예상치 못한 서버 오류가 발생했습니다.');
    }
  } else if (error.request) {
    logOnDev('📌 서버 응답 없음:', error.request);
    setAlert('서버로부터 응답이 없습니다. 네트워크 상태를 확인하세요.');
  } else {
    logOnDev('📌 요청 생성 중 오류 발생:', error.message);
    setAlert('요청을 생성하는 중 문제가 발생했습니다.');
  }
}

const onResponse = (response: AxiosResponse): AxiosResponse['data'] => {
  const { status } = response;
  const { method, url } = response.config;
  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);
  return response.data;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  handleError(error);
  return Promise.reject(error);
};

const requestAPI: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});

requestAPI.interceptors.request.use(checkLogin);
requestAPI.interceptors.response.use(onResponse, onResponseError);

export default requestAPI;
