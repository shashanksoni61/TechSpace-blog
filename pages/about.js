import Layout from '../components/Layout';

function AboutPage() {
  return (
    <Layout title='About TechSpace'>
      <h1 className='text-5xl border-b-4 pb-5 font-bold'>About</h1>
      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>TechSpace Blog</h3>

        <p className='mb-3'>Blog Built with Next.js and Markdown</p>
      </div>
    </Layout>
  );
}

export default AboutPage;
