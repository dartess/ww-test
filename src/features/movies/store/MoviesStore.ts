import { observable, action, computed } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import { MoviesApi } from '@/features/movies/store/api/MoviesApi';
import type { HttpStore } from '@/features/http/store/HttpStore';
import { type MovieData, type Genre, GENRES } from '@/features/movies/types';

export class MoviesStore {
  constructor(private readonly http: HttpStore) {
    makePersistable(this, {
      name: 'MoviesStore',
      properties: ['favoriteMovies'],
      storage: window.localStorage,
    });

    this.loadMovies();
  }

  private readonly api = new MoviesApi(this.http);

  @observable
  public accessor isMoviesLoaded = false;

  @observable
  private accessor movies: Array<MovieData> = [];

  @observable
  public accessor favoriteMovies: Record<MovieData['id'], true> = {};

  @observable
  public accessor selectedGenres: Record<Genre, boolean> = Object.fromEntries(
    GENRES.map((genre) => [genre, true]),
  ) as Record<Genre, boolean>;

  @computed
  public get moviesFiltered(): Array<MovieData> {
    return this.movies.filter((movieData) => this.selectedGenres[movieData.genre]);
  }

  private loadMovies = async () => {
    const movies = await this.api.getMovies();
    this.setMovies(movies);
    this.setIsMoviesLoaded(true);
  };

  @action
  private setMovies = (movies: Array<MovieData>) => {
    this.movies = movies;
  };

  @action
  private setIsMoviesLoaded = (isMoviesLoaded: boolean) => {
    this.isMoviesLoaded = isMoviesLoaded;
  };

  @action
  public setMovieAsFavorite = (movieId: MovieData['id'], favorite: boolean) => {
    if (favorite) {
      this.favoriteMovies[movieId] = true;
    } else {
      delete this.favoriteMovies[movieId];
    }
  };

  @action
  public selectGenre = (genre: Genre, selected: boolean) => {
    if (selected) {
      this.selectedGenres[genre] = true;
    } else {
      delete this.selectedGenres[genre];
    }
  };
}
