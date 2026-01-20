import type { MovieData } from '@/features/movies/types';
import { MovieItem } from '@/features/movies/view/MovieItem/MovieItem';

import styles from './MoviesList.module.css';

type Props = {
  movies: Array<MovieData>;
};

export const MoviesList = ({ movies }: Props) => {
  return (
    <ul className={styles.root}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.item}>
          <MovieItem data={movie} />
        </li>
      ))}
    </ul>
  );
};
