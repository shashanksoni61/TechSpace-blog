import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';

function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className='flex flex-col items-center p-3'>
        <Image
          src='/images/logo.png'
          width={60}
          height={60}
          className='bg-gray-600 rounded-2xl m-2'
        />

        <h1 className='text-6xl my-5'>Oops !</h1>
        <h2 className='text-4xl text-gray-400 mb-5'>
          This page does not exist
        </h2>
        <Link href='/'>
          <a
            className='
          text-xl 
          rounded-md 
          hover:text-white
          hover:bg-gray-700 
          p-2'
          >
            Go Back
          </a>
        </Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
