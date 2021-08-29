import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Layout from '../../components/Layout';
export default function SinglePostPage({ slug, frontMatter, content }) {
  const { title, date, category, cover_image, author, author_image } =
    frontMatter;

  return (
    <Layout title={title}>
      <div>Single Page</div>
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
  };
}
