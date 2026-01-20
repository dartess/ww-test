import { observable, action } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import { MoviesApi } from '@/features/movies/store/api/MoviesApi';
import type { HttpStore } from '@/features/http/store/HttpStore';
import type { MovieData } from '@/features/movies/types';

export class MoviesStore {
  constructor(private readonly http: HttpStore) {
    makePersistable(this, {
      name: 'MoviesStore',
      properties: [
        {
          key: 'favoriteMovies',
          serialize: (value) => {
            return JSON.stringify([...value]);
          },
          deserialize: (value) => {
            try {
              return new Set(JSON.parse((value as string) || '"[]"') as Array<MovieData['id']>);
            } catch (exception) {
              console.warn('Some error when deserialize', exception);
              return new Set();
            }
          },
        },
      ],
      storage: window.localStorage,
    });

    this.loadMovies();
  }

  private readonly api = new MoviesApi(this.http);

  @observable
  public accessor isMoviesLoaded = false;

  @observable
  public accessor movies: Array<MovieData> = [];

  @observable
  public accessor favoriteMovies = new Set<MovieData['id']>();

  private loadMovies = async () => {
    const movies = await this.api.getMovies();
    this.setMovies(movies);
  };

  @action
  private setMovies = (movies: Array<MovieData>) => {
    this.movies = movies;
    this.isMoviesLoaded = true;
  };

  @action
  public setMovieAsFavorite = (movieId: MovieData['id'], favorite: boolean) => {
    if (favorite) {
      this.favoriteMovies.add(movieId);
    } else {
      this.favoriteMovies.delete(movieId);
    }
  };
}
