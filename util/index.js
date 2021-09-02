import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const files = fs.readdirSync(path.join('posts'));

export const sortByDate = (oldDate, newDate) => {
  return (
    new Date(newDate.frontMatter.date) - new Date(oldDate.frontMatter.date)
  );
};

export function getPosts() {
  const posts = files.map(fileName => {
    const slug = fileName.replace('.md', '');
    const markDownMeta = fs.readFileSync(path.join('posts', fileName), 'utf-8');
    const { data: frontMatter } = matter(markDownMeta);
    return {
      slug,
      frontMatter,
    };
  });

  return posts.sort(sortByDate);
}
