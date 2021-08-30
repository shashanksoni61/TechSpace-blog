import Link from 'next/link';
import { useState } from 'react';
export default function CategoryList({ categories }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='w-full pt-5 bg-white shadow-md rounded'>
      <h3 className='text-3xl p-3 rounded bg-gray-700 text-white'>
        Blog Categories
      </h3>
      <ul className={`flex flex-col divide-y divide-gray-300`}>
        {categories.map((category, i) => (
          <Link key={i} href={`/blog/category/${category.toLowerCase()}`}>
            <li className='p-4 cursor-pointer'>{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
