import { observer } from 'mobx-react-lite';

import { PageTitle } from '@/components/PageTitle/PageTitle';
import { Filter, type FilterItem, type FilterItemColor } from '@/components/Filter/Filter';
import { MoviesList } from '@/features/movies/view/MoviesList/MoviesList';
import { useStore } from '@/core/stores';
import { Loader } from '@/components/Loader/Loader';
import { type Genre, GENRES } from '@/features/movies/types';
import { genreNames } from '@/features/movies/constants';

import styles from './PageMovies.module.css';

const colorsByGenre: Record<Genre, FilterItemColor> = {
  action: 'orange',
  comedy: 'blue',
  drama: 'black',
  thriller: 'green',
};

const FILTER_ITEMS: Array<FilterItem<Genre>> = GENRES.map((genre) => ({
  value: genre,
  label: genreNames[genre],
  color: colorsByGenre[genre],
}));

export const PageMovies = observer(function PageMovies() {
  const { isMoviesLoaded, moviesFiltered, selectedGenres, selectGenre } = useStore('movies');

  if (!isMoviesLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <PageTitle>Фильмы</PageTitle>
        <Filter<Genre>
          checked={selectedGenres}
          onItemCheckedChange={selectGenre}
          items={FILTER_ITEMS}
        />
      </div>
      <div className={styles.content}>
        {moviesFiltered.length ? (
          <MoviesList movies={moviesFiltered} />
        ) : (
          <h3>Подходящих фильмов не найдено</h3>
        )}
      </div>
    </div>
  );
});
