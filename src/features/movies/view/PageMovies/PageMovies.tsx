import { useState } from 'react';

import { PageTitle } from '@/components/PageTitle/PageTitle';
import { Filter, type FilterItem } from '@/components/Filter/Filter';
import { MoviesList } from '@/features/movies/view/MoviesList/MoviesList';

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

export const PageMovies = () => {
  const [checkedGenres, setCheckedGenres] = useState(defaultCheckedGengres);
  const onItemCheckedChange = (itemValue: string, itemChecked: boolean) => {
    setCheckedGenres((prevChecked) => ({ ...prevChecked, [itemValue]: itemChecked }));
  };

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
        <MoviesList
          movies={[
            {
              id: '1',
              name: 'Матрица',
              description: 'asd',
              image:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bago%2C_mercado_23.jpg/2560px-Bago%2C_mercado_23.jpg',
              genre: 'action',
              duration: 136,
            },
          ]}
        />
      </div>
    </div>
  );
};
