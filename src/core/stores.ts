import { use, createContext } from 'react';

import { HttpStore } from '@/features/http/store/HttpStore';
import { MoviesStore } from '@/features/movies/store/MoviesStore';

export class Stores {
  public readonly http = new HttpStore();
  public readonly movies = new MoviesStore(this.http);
}

const StoresContext = createContext<Stores | null>(null);

function useStore<T extends keyof Stores>(storeName: T) {
  const context = use(StoresContext);
  if (context) {
    return context[storeName];
  }
  throw Error('unknown store name');
}

export { useStore, StoresContext };
