import Link from 'next/link';
export default function Pagination({ currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numPages === 1) return <> </>;

  return (
    <div className='mt-6'>
      <ul className='flex list-none ml-10 '>
        {!isFirst && (
          <Link href={prevPage}>
            <li
              className='hover:bg-gray-300 p-1 px-2 
            rounded cursor-pointer border-2 border-gray-200 mx-0.5'
            >
              Previous
            </li>
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/blog/page/${i + 1}`}>
            <li
              key={i}
              className='hover:bg-gray-300 p-1 px-2 
            rounded cursor-pointer border-2 border-gray-200 mx-0.5'
            >
              {i + 1}
            </li>
          </Link>
        ))}
        {!isLast && (
          <Link href={nextPage}>
            <li
              className='hover:bg-gray-300 p-1 px-2 
            rounded cursor-pointer border-2 border-gray-200  mx-0.5'
            >
              Next
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
}
