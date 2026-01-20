import { useState } from 'react';

import { GenreTag } from '@/features/movies/view/GenreTag/GenreTag';
import { Duration } from '@/features/movies/view/Duration/Duration';
import { Favorite } from '@/features/movies/view/Favorite/Favorite';

import type { MovieData } from '../../types';

import styles from './MovieItem.module.css';

type Props = {
  data: MovieData;
};

export const MovieItem = ({ data }: Props) => {
  const [isFavorited, setIsFavorited] = useState(true);
  return (
    <article className={styles.root}>
      <img src={data.image} alt={`Постер фильма ${data.image}`} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.name}>{data.name}</h2>
        <div className={styles.meta}>
          <span className={styles.genre}>
            <GenreTag genre={data.genre} />
          </span>
          <Duration value={data.duration} />
          <Favorite active={isFavorited} onActiveChange={setIsFavorited} />
        </div>
      </div>
    </article>
  );
};
