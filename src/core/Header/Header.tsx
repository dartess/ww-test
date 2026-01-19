import { Link } from '@/components/Link/Link';
import { Container } from '@/components/Container/Container';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.root}>
      <Container as="nav">
        <ul className={styles.listWrapper}>
          <li>
            <Link href="#" active>
              Все фильмы
            </Link>
          </li>
          <li>
            <Link href="#">Избранное</Link>
          </li>
          <li>
            <Link href="#">Добавить фильм</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};
