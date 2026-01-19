import { Container } from '@/components/Container/Container';
import { PageMovies } from '@/features/movies/view/PageMovies/PageMovies';

import styles from './Main.module.css';

export const Main = () => {
  return (
    <main className={styles.root}>
      <Container>
        <PageMovies />
      </Container>
    </main>
  );
};
