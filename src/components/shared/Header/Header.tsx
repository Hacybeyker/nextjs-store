import Link from 'next/link';
import { ShoppingCartWrapper } from './ShoppingCartWrapper';
import { UserSection } from './UserSection';
import styles from './Header.module.css';

export const Header = () => {
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
        <UserSection />
        <ShoppingCartWrapper />
      </div>
    </header>
  );
};
