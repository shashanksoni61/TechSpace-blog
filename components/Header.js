import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <header className='bg-gray-800 text-white shadow-w-full'>
      <div
        className='container 
      mx-auto 
      flex 
      flex-wrap p-5 flex-col md:justify-between md:flex-row items-center'
      >
        <Link href='/'>
          <a className='flex title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
            <Image src='/images/logo.png' width={40} height={40} alt='logo' />
            <span className='ml-3 text-xl'>Tech Space</span>
          </a>
        </Link>
        <nav className='flex flex-wrap items-center justify-end text-base'>
          <Link href='/blog'>
            <a className='mx-2 px-3 cursor-pointer uppercase hover:text-indigo-300'>
              Blog
            </a>
          </Link>
          <Link href='/about'>
            <a className='mx-2 px-3 cursor-pointer uppercase hover:text-indigo-300'>
              About
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
