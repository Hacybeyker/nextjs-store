import { getProducts } from '@/services/shopify/products';
import { getCollectionProducts, getCollections } from '@/services/shopify/collections';
import { ProductsWrapper } from '@/components/Store/ProductsWrapper';
import { CollectionType } from '@/types/collection';

interface StoreCategoryPageProps {
  params: Promise<{
    categories?: string[];
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function StoreCategoryPage(props: StoreCategoryPageProps) {
  let products = [];
  const collections = await getCollections();
  const searchParams = await props.searchParams;

  // Obtener categoría desde searchParams
  const categoryHandle = searchParams.category as string;

  if (categoryHandle) {
    const collection = collections.find(
      (collection: CollectionType) => collection.handle === categoryHandle
    );

    if (collection) {
      products = await getCollectionProducts(collection.id);
    } else {
      // Si no se encuentra la colección, mostrar todos los productos
      products = await getProducts();
    }
  } else {
    // Si no hay categoría, mostrar todos los productos
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
}

export default StoreCategoryPage;
