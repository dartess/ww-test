import { Header } from '@/core/Header/Header';
import { Main } from '@/core/Main/Main';
import { Footer } from '@/core/Footer/Footer';

import styles from './Layour.module.css';

export const Layout = () => {
  return (
    <div className={styles.root}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
