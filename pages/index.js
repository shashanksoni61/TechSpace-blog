import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Layout from '../components/Layout';

export default function HomePage({ posts }) {
  console.log(posts);
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>Latest Posts</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map(fileName => {
    const slug = fileName.replace('.md', '');

    const markDownMeta = fs.readFileSync(path.join('posts', fileName), 'utf-8');
    const { data: frontMatter } = matter(markDownMeta);
    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
