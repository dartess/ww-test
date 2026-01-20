import { clsx } from 'clsx';

import type { Genre } from '@/features/movies/types';
import { genreNames } from '@/features/movies/constants';

import styles from './GenreTag.module.css';

type Props = {
  genre: Genre;
};

export const GenreTag = ({ genre }: Props) => {
  return <span className={clsx(styles.root, styles[genre])}>{genreNames[genre]}</span>;
};
