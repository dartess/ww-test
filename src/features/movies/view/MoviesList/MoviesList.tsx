import { useState, useEffect } from 'react';

import type { MovieData } from '@/features/movies/types';
import { MovieItem } from '@/features/movies/view/MovieItem/MovieItem';

import styles from './MoviesList.module.css';

type Props = {
  movies: Array<MovieData>;
};

export const MoviesList = ({ movies }: Props) => {
  const [renderItems, setRenderItems] = useState(movies);

  useEffect(() => {
    if (!document.startViewTransition) {
      // eslint-disable-next-line react-hooks/set-state-in-effect,@eslint-react/hooks-extra/no-direct-set-state-in-use-effect -- only for transitions
      setRenderItems(movies);
      return;
    }

    document.startViewTransition(() => {
      setRenderItems(movies);
    });
  }, [movies]);

  return (
    <ul className={styles.root}>
      {renderItems.map((movie) => (
        <li key={movie.id} className={styles.item}>
          <MovieItem data={movie} />
        </li>
      ))}
    </ul>
  );
};
