import Image from 'next/image';
import Link from 'next/link';
import CategoryLabel from './CategoryLabel';

export default function Post({ post }) {
  const { title, date, excerpt, cover_image, category, author, author_image } =
    post.frontMatter;
  return (
    <div className='w-full py-4 px-4 bg-white rounded-lg shadow-md mt-6'>
      <Image
        src={cover_image}
        alt={title}
        width={600}
        height={420}
        className='mb-4 rounded'
      />
      <div className='flex justify-between items-center mb-2'>
        <span className='font-light text-gray-600'>{date}</span>

        <div>
          <CategoryLabel label={category} />
        </div>
      </div>
      <div className='mt-2'>
        <Link href={`/blog/${post.slug}`}>
          <a className='text-2xl text-gray-700 font-bold hover:underline'>
            {title}
          </a>
        </Link>
        <p className='mt-2 text-gray-600'>{excerpt}</p>
      </div>

      <div className='flex justify-between align-bottom items-center mt-6'>
        <Link href={`/blog/${post.slug}`}>
          <a className='text-gray-900 hover:text-blue-600'>Read More...</a>
        </Link>
        <div className='flex items-center'>
          <img
            src={author_image}
            alt=''
            className='w-10 h-10 object-cover hidden sm:block rounded-full'
          />
          <h3 className='text-gray-700 font-bold'>{author}</h3>
        </div>
      </div>
    </div>
  );
}
