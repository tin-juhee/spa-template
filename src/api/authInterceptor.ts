import { InternalAxiosRequestConfig } from 'axios';
// import { useAuthStore } from '@/stores/useAuthStore';

export const checkLogin = async (config: InternalAxiosRequestConfig) => {
  // const token = useAuthStore.getState().token || localStorage.getItem('access_token');
  // if (token) {
  //   config.headers['Authorization'] = `Bearer ${token}`;
  // }

  return config;
};
