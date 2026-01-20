import type { HttpStore } from '@/features/http/store/HttpStore';

import type { MovieData } from '../../types';

import { convertMovie } from './converter';
import type { ServerMovie } from './server';

export class MoviesApi {
  constructor(private readonly http: HttpStore) {}

  public async getMovies(): Promise<Array<MovieData>> {
    const movies = (await this.http.get('/films/')) as Array<ServerMovie>;
    return movies.map((movie) => convertMovie(movie));
  }
}
