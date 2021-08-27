import { useRouter } from 'next/router';

function ProductPageId() {
  const router = useRouter();
  return (
    <div>
      <h1>Product id page {router.query.id}</h1>
    </div>
  );
}

export default ProductPageId;
