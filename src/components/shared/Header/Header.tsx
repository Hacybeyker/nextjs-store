import Link from 'next/link';
import styles from './Header.module.css';
import { validateAccessToken } from '@/utils/auth/validateAccessToken';

export const Header = async () => {
  const customer = await validateAccessToken();
  console.log('Header customer', customer?.firstName ? '' : 'no customer');
  return (
    <header>
      <nav>
        <ul className={styles.Header__list}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/store">
            <li>Store</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
          <Link href="/test">
            <li>Test</li>
          </Link>
        </ul>
        {customer?.firstName ? <p>Hola! {customer.firstName}</p> : <Link href="/login">Login</Link>}
      </nav>
    </header>
  );
};
