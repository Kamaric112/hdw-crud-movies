import { createAsyncThunk } from '@reduxjs/toolkit'
import { APIKEY } from '../../app/config'
import apiService from '../../app/apiService'
import { Movie } from './type'

// `createAsyncThunk` is a generic function.
// We can use the first type-parameter
// to tell what type will be returned as a result.
export const fetchMovies = createAsyncThunk<Movie[], number>('movies/fetch', async (page = 1) => {
  const response = await apiService.get(
    `/movie/popular?api_key=${APIKEY}&language=en-US&page=${page}`,
  )
  // Alos, set a type for the `data` constant:
  console.log(response.data.results)
  return response.data.results

  // We could also use `as` to coerce its type
  // as in the RTK docs.
})

export const fetchMoviesQuery = createAsyncThunk<Movie[], string | null>(
  'movies/fetchQuery',
  async (query = null) => {
    const response = await apiService.get(
      `/search/movie?api_key=${APIKEY}&language=en-US&page=1&query=${query}`,
    )
    // Alos, set a type for the `data` constant:
    console.log(response.data.results)
    return response.data.results

    // We could also use `as` to coerce its type
    // as in the RTK docs.
  },
)
