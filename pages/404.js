// pages/404.js
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <div className='h-screen flex items-center justify-center'>
        <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, there is nothing to see here</p>
        <Link className='text-blue-500 flex items-center' href='/'><span class="material-symbols-outlined">
arrow_back
</span>Return to home page</Link>
       </div>
        
      </div>
    </>
  );
};

export default NotFoundPage;