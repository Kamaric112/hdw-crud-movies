import { createAsyncThunk } from '@reduxjs/toolkit'
import { Movie } from './type'
import fetchMoviesData from '../../app/fetch/fetchMovieData'
import fetchMoviesWithQuery from '../../app/fetch/fetchMoviesQuery'

export const fetchMovies = createAsyncThunk<Movie[], number>('movies/fetch', async (page = 1) => {
  const response = await fetchMoviesData(page)
  return response
})

export const fetchMoviesQuery = createAsyncThunk<Movie[], string | null>(
  'movies/fetchQuery',
  async (query = null) => {
    const response = await fetchMoviesWithQuery(query)
    return response
  },
)
