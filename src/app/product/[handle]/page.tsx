import { getProducts } from '@/services/shopify/products';
import { ProductView } from '@/components/product/ProductView/ProductView';

interface ProductPageProps {
  params: {
    handle: string;
  };
  searchParams: {
    id: string;
  };
}

async function ProductPage(props: ProductPageProps) {
  const { id } = await Promise.resolve(props.searchParams);
  const products = await getProducts(id);
  const product = products[0];

  return <ProductView product={product} />;
}

export default ProductPage;
