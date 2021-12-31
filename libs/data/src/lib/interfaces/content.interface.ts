import { TContentType } from '../types/content-type.type';

export interface IContent {
  title: string;
  year: number;
  type: TContentType;
  length: string;
  revenue: number;
  releaseDate: string;
  description: string;
  imdbID: string;
  // TODO: Add support for AnimeDB when needed
  db: {
    id: string;
    name: 'TVDB' | 'TMDB';
  };
  posterUrl: string;
}
