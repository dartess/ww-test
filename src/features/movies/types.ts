import type { ArrayValues } from 'type-fest';

export const GENRES = ['action', 'thriller', 'comedy', 'drama'] as const;

export type Genre = ArrayValues<typeof GENRES>;

export type MovieData = {
  id: number;
  name: string;
  description: string;
  image: string;
  genre: Genre;
  duration: number;
};
