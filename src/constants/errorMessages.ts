const ERROR_MESSAGES: Record<number, Record<string, string>> = {
  900: {
    ko: '인증이 필요합니다. 로그인해주세요.',
    en: 'Unauthorized. Please log in.',
  },
  901: {
    ko: '권한이 없습니다.',
    en: 'You do not have permission to perform this action.',
  },
  902: {
    ko: '이메일 또는 비밀번호가 틀렸습니다.',
    en: 'Invalid email or password.',
  },
  903: {
    ko: '토큰이 만료되었습니다. 다시 로그인해주세요.',
    en: 'Expired token. Please log in again.',
  },
  904: {
    ko: '유효하지 않은 토큰입니다.',
    en: 'Invalid token. Please log in again.',
  },
  905: {
    ko: '계정이 비활성화되었습니다. 지원팀에 문의하세요.',
    en: 'Your account has been disabled. Contact support.',
  },
  910: {
    ko: '사용자를 찾을 수 없습니다.',
    en: 'User not found.',
  },
  911: {
    ko: '이미 사용 중인 이메일입니다.',
    en: 'Email is already in use.',
  },
  912: {
    ko: '입력값이 올바르지 않습니다.',
    en: 'Invalid input data.',
  },
  913: {
    ko: '비밀번호가 보안 기준을 충족하지 않습니다.',
    en: 'Your password does not meet security requirements.',
  },
  914: {
    ko: '이미 삭제된 계정입니다.',
    en: 'This account has already been deleted.',
  },
  915: {
    ko: '해당 작업을 수행할 수 없습니다.',
    en: 'This action is not allowed.',
  },
  920: {
    ko: '관리자 계정을 찾을 수 없습니다.',
    en: 'Admin account not found.',
  },
  921: {
    ko: '관리자 권한이 없습니다.',
    en: 'You do not have admin privileges.',
  },
  922: {
    ko: '마지막 관리자는 삭제할 수 없습니다.',
    en: 'The last super admin cannot be deleted.',
  },
  930: {
    ko: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
    en: 'A server error has occurred. Please try again later.',
  },
  931: {
    ko: '데이터베이스 오류가 발생했습니다.',
    en: 'A database error occurred.',
  },
  932: {
    ko: '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.',
    en: 'Too many requests. Please try again later.',
  },
  933: {
    ko: '서비스가 현재 이용 불가능합니다.',
    en: 'Service is currently unavailable.',
  },
};

export default ERROR_MESSAGES;
