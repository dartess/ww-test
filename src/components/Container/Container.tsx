import type { ReactNode } from 'react';

import styles from './Container.module.css';

type Props = {
  children: ReactNode;
  as?: 'div' | 'nav' | 'main';
};
export const Container = ({ children, as = 'div' }: Props) => {
  const Tag = as;
  return <Tag className={styles.root}>{children}</Tag>;
};
