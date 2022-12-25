import { createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from './type';
import fetchMoviesData, { fetchMoviesPage } from '../../app/fetch/fetchMovieData';
import fetchMoviesWithQuery, { fetchMoviesQueryWithPage } from '../../app/fetch/fetchMoviesWithQuery';

interface Data {
  page: number;
  genreId?: number;
}
export const fetchMovies = createAsyncThunk<Movie[], Data>('movies/fetch', async data => {
  const { page, genreId } = data;
  const response = await fetchMoviesData(page, genreId);
  return response;
});

export const fetchMoviesTotalPage = createAsyncThunk<number, number>('movies/fetchPage', async (page = 1) => {
  const response = await fetchMoviesPage(page);
  return response;
});

export const fetchMoviesQuery = createAsyncThunk(
  'movies/fetchQuery',
  async ({ query, page = 1 }: { query: string | null; page?: number }) => {
    const response = await fetchMoviesWithQuery(query, page);
    return response;
  },
);

export const fetchMoviesQueryPage = createAsyncThunk(
  'movies/fetchQueryPage',
  async ({ query, page = 1 }: { query: string | null; page?: number }) => {
    const response = await fetchMoviesQueryWithPage(query, page);
    return response;
  },
);
