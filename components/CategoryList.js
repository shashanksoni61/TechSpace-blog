import Link from 'next/link';
import { useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { motion } from 'framer-motion';

export default function CategoryList({ categories }) {
  const [toggle, setToggle] = useState(false);

  const catTog = () => setToggle(!toggle);
  return (
    <div className='w-full pt-5 bg-white shadow-md rounded'>
      <h3 className='text-3xl p-3 py-2 md:py-3 rounded bg-gray-700 text-white'>
        Blog Categories{' '}
        <motion.span
          whileHover={{
            scale: 1.2,
            color: 'white',
          }}
          whileTap={{
            scale: 1.1,
          }}
          onClick={catTog}
          className='float-right cursor-pointer md:hidden text-md text-gray-400'
        >
          <CgMenuRightAlt />
        </motion.span>
      </h3>

      <ul
        className={`flex flex-col divide-y divide-gray-300 ${
          toggle ? 'hidden' : 'block'
        }`}
      >
        {categories.map((category, i) => (
          <Link key={i} href={`/blog/category/${category.toLowerCase()}`}>
            <li key={i} className='p-4 cursor-pointer'>
              {category}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
