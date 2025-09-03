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
  const { categories = [] } = await props.params;
  //const searchParams = await Promise.resolve(props.searchParams);

  if (categories.length > 0) {
    const collection = collections.find(
      (collection: CollectionType) => collection.handle === categories[0]
    );

    if (collection) {
      products = await getCollectionProducts(collection.id);
    } else {
      // Si no se encuentra la colección, mostrar todos los productos
      products = await getProducts();
    }
  } else {
    products = await getProducts();
  }

  return (
    <div>
      {/*       {categories.length > 0 ? (
        <div>Categoria dinamica: {categories.join('/')}</div>
      ) : (
        <div>Todas las categorias</div>
      )}
      <div>
        <h3>Parámetros de búsqueda:</h3>
        <pre>{JSON.stringify(searchParams, null, 2)}</pre>
      </div> */}
      <ProductsWrapper products={products} />
    </div>
  );
}

export default StoreCategoryPage;
