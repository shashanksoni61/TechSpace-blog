import Link from 'next/link';

export default function CategoryLabel({ label }) {
  const colorKey = {
    JavaScript: 'yellow',
    CSS: 'blue',
    Python: 'green',
    PHP: 'purple',
    Ruby: 'red',
    React: 'blue',
  };
  return (
    <div
      className={`px-2 py-1 bg-${colorKey[label]}-500 text-gray-100 font-bold rounded`}
    >
      <Link href={`blog/category/${label.toLowerCase()}`}>
        <a> {label}</a>
      </Link>
    </div>
  );
}
