import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Layout from '../../../components/Layout';
import Post from '../../../components/Post';

import { sortByDate } from '../../../util';
import { POSTS_PER_PAGE, POST_PER_PAGE } from '../../../config';

export default function BlogPage({ posts, numPages, currentPage }) {
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 '>Articles</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);

  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { page_index } = params;

  const page = parseInt((params && page_index) || 1);

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

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);

  const pageIndex = page - 1;

  const orderedPosts = posts
    .sort(sortByDate)
    .slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) * POSTS_PER_PAGE);

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
    },
  };
}
