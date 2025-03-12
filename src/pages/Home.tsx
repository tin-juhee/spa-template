import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>홈 페이지</h1>
      <p>홈 페이지에 오신 것을 환영합니다.</p>
      <Link to='/about' className='text-blue-500'>
        About 페이지로 이동
      </Link>
    </div>
  );
};

export default HomePage;
