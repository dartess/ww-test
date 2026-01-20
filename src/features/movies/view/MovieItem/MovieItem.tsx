import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import { GenreTag } from '@/features/movies/view/GenreTag/GenreTag';
import { Duration } from '@/features/movies/view/Duration/Duration';
import { Favorite } from '@/features/movies/view/Favorite/Favorite';
import { useStore } from '@/core/stores';

import type { MovieData } from '../../types';

import styles from './MovieItem.module.css';

type Props = {
  data: MovieData;
};

export const MovieItem = observer(function MovieItem({ data }: Props) {
  const { favoriteMovies, setMovieAsFavorite } = useStore('movies');
  const favorite = favoriteMovies.has(data.id);
  const handleFavoriteChange = useCallback(
    (newValue: boolean) => {
      setMovieAsFavorite(data.id, newValue);
    },
    [data.id, setMovieAsFavorite],
  );

  return (
    <a className={styles.root} href="#">
      <img src={data.image} alt={`Постер фильма ${data.image}`} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.name}>{data.name}</h2>
        <div className={styles.meta}>
          <span className={styles.genre}>
            <GenreTag genre={data.genre} />
          </span>
          <Duration value={data.duration} />
          <Favorite favorite={favorite} onFavoriteChange={handleFavoriteChange} />
        </div>
      </div>
    </a>
  );
});
