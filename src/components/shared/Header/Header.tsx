import Link from 'next/link';
import styles from './Header.module.css';
export const Header = () => {
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
        </ul>
      </nav>
    </header>
  );
};
