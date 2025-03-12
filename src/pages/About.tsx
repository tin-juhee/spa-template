import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>어바웃 페이지</h1>
      <p>이 프로젝트는 react-router-dom을 사용한 기본 라우터 설정 예제입니다.</p>
      <Link to='/' className='text-blue-500'>
        홈으로 이동
      </Link>
    </div>
  );
};

export default AboutPage;
