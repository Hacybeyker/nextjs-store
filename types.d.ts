interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

type CartItem = {
  title: string;
  price: number;
  quantity: number;
  id: string;
  image: string;
  merchandiseId: string;
};
