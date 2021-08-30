import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import CategoryLabel from '../../components/CategoryLabel';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function SinglePostPage({ slug, frontMatter, content }) {
  const { title, date, category, cover_image, author, author_image } =
    frontMatter;

  // const custromRenderer = {
  //   code({ language, value }) {
  //     return (
  //       <SyntaxHighlighter style={dark} language={language}>
  //         hello
  //       </SyntaxHighlighter>
  //     );
  //   },
  // };

  return (
    <Layout title={title}>
      <Link href='/blog'>
        <a className='ml-10 bg-gray-700 text-white p-1.5 rounded mb-5'>
          Go Back
        </a>
      </Link>
      <div className='w-full px-10 py-6 lg:px-56 bg-white shadow-md rounded-sm  '>
        <div className='flex justify-between items-center mt-4'>
          <h1 className='text-4xl mb-6'>{title}</h1>
          <CategoryLabel label={category} />
        </div>
        {cover_image && (
          <Image
            src={cover_image}
            width={820}
            height={468}
            quality={100}
            alt=''
            className='w-full rounded'
          />
        )}

        <div className='flex justify-between items-center p-2 bg-gray-50 rounded-sm'>
          <div className='flex items-center my-2'>
            <img
              src={author_image}
              alt={author}
              className='rounded-full w-10 '
            />
            <h3 className='text-sm mx-2'>{author}</h3>
          </div>
          <div className='mr-4 '>{date}</div>
        </div>

        <div className='blog-text'>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const markdownMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownMeta);
  return {
    props: {
      slug,
      frontMatter,
      content,
    },
    revalidate: 1,
  };
}
