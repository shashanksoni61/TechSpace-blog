import Head from 'next/head';
const Layout = ({ title, children, keywords, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container mx-auto my-7'>{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Welcome to TechSpace',
  keywords: 'development, coding, programming, tutorial, blogging',
  description: 'The best info and tutorial in React Development',
};

export default Layout;
