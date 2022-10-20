import { createAsyncThunk } from '@reduxjs/toolkit'
import { APIKEY } from '../../app/config'
import apiService from '../../app/apiService'
import { Genres } from './type'

// `createAsyncThunk` is a generic function.
// We can use the first type-parameter
// to tell what type will be returned as a result.
export const fetchGenres = createAsyncThunk<Genres[]>('genres/fetch', async () => {
  const response = await apiService.get(`/genre/movie/list?api_key=${APIKEY}&language=en-US`)
  // Alos, set a type for the `data` constant:
  console.log(response.data.genres)
  return response.data.genres

  // We could also use `as` to coerce its type
  // as in the RTK docs.
})
