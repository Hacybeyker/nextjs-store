import Link from 'next/link';
import styles from './Header.module.css';
import { validateAccessToken } from '@/utils/auth/validateAccessToken';
import { ShoppingCart } from '../ShoppingCart';

export const Header = async () => {
  const customer = await validateAccessToken();
  console.log('Header customer', customer?.firstName ? '' : 'no customer');
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
        <ShoppingCart />
      </div>
    </header>
  );
};
