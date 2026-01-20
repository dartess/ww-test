import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { PageTitle } from '@/components/PageTitle/PageTitle';
import { Filter, type FilterItem } from '@/components/Filter/Filter';
import { MoviesList } from '@/features/movies/view/MoviesList/MoviesList';
import { useStore } from '@/core/stores';
import { Loader } from '@/components/Loader/Loader';

import styles from './PageMovies.module.css';

const filterItems: Array<FilterItem> = [
  {
    label: 'Боевик',
    value: 'action',
    color: 'orange',
  },
  {
    label: 'Триллер',
    value: 'thriller',
    color: 'green',
  },
  {
    label: 'Комедия',
    value: 'comedy',
    color: 'blue',
  },
  {
    label: 'Драма',
    value: 'drama',
    color: 'black',
  },
];

const defaultCheckedGengres = {
  action: true,
  thriller: true,
  comedy: true,
  drama: true,
};

export const PageMovies = observer(function PageMovies() {
  const [checkedGenres, setCheckedGenres] = useState(defaultCheckedGengres);
  const onItemCheckedChange = (itemValue: string, itemChecked: boolean) => {
    setCheckedGenres((prevChecked) => ({ ...prevChecked, [itemValue]: itemChecked }));
  };

  const { isMoviesLoaded, movies } = useStore('movies');

  if (!isMoviesLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <PageTitle>Фильмы</PageTitle>
        <Filter
          checked={checkedGenres}
          onItemCheckedChange={onItemCheckedChange}
          items={filterItems}
        />
      </div>
      <div className={styles.content}>
        <MoviesList movies={movies} />
      </div>
    </div>
  );
});
