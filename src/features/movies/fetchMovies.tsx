import { createAsyncThunk } from '@reduxjs/toolkit'
import { APIKEY } from '../../app/config'
import apiService from '../../app/apiService'
import { Movie } from './type'

export const fetchMovies = createAsyncThunk<Movie[], number>('movies/fetch', async (page = 1) => {
  const response = await apiService.get(
    `/movie/popular?api_key=${APIKEY}&language=en-US&page=${page}`,
  )
  console.log(response.data.results)
  return response.data.results
})

export const fetchMoviesQuery = createAsyncThunk<Movie[], string | null>(
  'movies/fetchQuery',
  async (query = null) => {
    const response = await apiService.get(
      `/search/movie?api_key=${APIKEY}&language=en-US&page=1&query=${query}`,
    )
    console.log(response.data.results)
    return response.data.results
  },
)
