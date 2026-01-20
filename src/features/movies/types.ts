export type Genre = 'action' | 'thriller' | 'comedy' | 'drama';

export type MovieData = {
  id: number;
  name: string;
  description: string;
  image: string;
  genre: Genre;
  duration: number;
};
