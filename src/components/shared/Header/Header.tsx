import Link from 'next/link';
import { validateAccessToken } from '@/utils/auth/validateAccessToken';
import styles from './Header.module.css';
import dynamic from 'next/dynamic';

const NoSSRShoppingCart = dynamic(() => import('../ShoppingCart'), { ssr: false });

export const Header = async () => {
  const customer = await validateAccessToken();

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
          {/*  <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
          <Link href="/test">
            <li>Test</li>
          </Link> */}
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? <p>Hola! {customer.firstName}</p> : <Link href="/login">Login</Link>}
        <NoSSRShoppingCart />
      </div>
    </header>
  );
};
