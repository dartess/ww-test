import { clsx } from 'clsx';

import styles from './Link.module.css';

type Props = {
  href: string;
  children: string;
  active?: boolean;
};

export const Link = ({ href, children, active }: Props) => {
  return (
    <a className={clsx(styles.root, active && styles.active)} href={href}>
      {children}
    </a>
  );
};
