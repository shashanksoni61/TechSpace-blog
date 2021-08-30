import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import Post from '../../../components/Post';
import { sortByDate } from '../../../util';
import CategoryList from '../../../components/CategoryList';

export default function BlogCategoryPage({ posts, categoryName, categories }) {
  return (
    <Layout>
      <div className='flex justify-between'>
        <div className='w-3/4 mr-10'>
          <h1 className='text-5xl border-b-4 p-5 font-bold'>
            All {categoryName[0].toUpperCase() + categoryName.slice(1)} Posts
          </h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>
        <div className='w-1/4'>
          <CategoryList categories={categories} />
        </div>
      </div>
      <Link href='/blog'>
        <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
          Go Back To All Posts
        </a>
      </Link>
    </Layout>
  );
}

export async function getStaticProps({ params: { category_name } }) {
  console.log(category_name);
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

  const categories = posts.map(post => post.frontMatter.category);
  const uniqueCategories = [...new Set(categories)];
  console.log(uniqueCategories);

  const categoryPosts = posts.filter(
    post => post.frontMatter.category.toLowerCase() === category_name
  );

  return {
    props: {
      posts: categoryPosts.sort(sortByDate),
      categoryName: category_name,
      categories: uniqueCategories,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const categories = files.map(fileName => {
    const markDownMeta = fs.readFileSync(path.join('posts', fileName), 'utf-8');

    const { data: frontMatter } = matter(markDownMeta);

    return frontMatter.category.toLowerCase();
  });

  const paths = categories.map(category => ({
    params: {
      category_name: category,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
