import styles from './PageTitle.module.css';

type Props = {
  children: string;
};

export const PageTitle = ({ children }: Props) => {
  return <h1 className={styles.root}>{children}</h1>;
};
