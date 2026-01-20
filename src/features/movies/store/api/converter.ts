import type { MovieData, Genre } from '../../types';

import type { ServerMovie } from './server';

const genreByServerFilmType: Record<string, Genre> = {
  боевик: 'action',
  комедия: 'comedy',
  драма: 'drama',
  триллер: 'thriller',
};

const FALLBACK_GENRE = 'action';

export const convertMovie = (serverMovie: ServerMovie): MovieData => {
  const genre = genreByServerFilmType[serverMovie.film_type];
  if (!genre) {
    console.warn(`Unknown server film_type: ${serverMovie.film_type}`);
  }
  return {
    id: serverMovie.id,
    name: serverMovie.name,
    description: serverMovie.description,
    image: serverMovie.image,
    genre: genre ?? FALLBACK_GENRE,
    duration: serverMovie.duration,
  };
};
