import ClockIcon from './icons/clock.svg?react';
import styles from './Duration.module.css';

type Props = {
  value: number;
};

export const Duration = ({ value }: Props) => {
  return (
    <span className={styles.root}>
      <ClockIcon />
      {value} мин.
    </span>
  );
};
