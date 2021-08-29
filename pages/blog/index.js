import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Layout from '../../components/Layout';
import Post from '../../components/Post';

import { sortByDate } from '../../util';

export default function BlogsPage({ posts }) {
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>All Articles</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
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
      posts: posts.sort(sortByDate),
    },
  };
}
