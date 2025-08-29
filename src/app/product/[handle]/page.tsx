import { getProducts } from '@/services/shopify/products';
import { ProductView } from '@/components/product/ProductView/ProductView';

interface ProductPageProps {
  params: Promise<{
    handle: string;
  }>;
  searchParams: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const { id } = await searchParams;
  const products = await getProducts(id);
  const product = products[0];
  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

async function ProductPage(props: ProductPageProps) {
  const { id } = await props.searchParams;
  const products = await getProducts(id);
  const product = products[0];

  return <ProductView product={product} />;
}

export default ProductPage;
