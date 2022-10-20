import { createAsyncThunk } from '@reduxjs/toolkit'
import { APIKEY } from '../../app/config'
import apiService from '../../app/apiService'
import { Genres } from './type'

export const fetchGenres = createAsyncThunk<Genres[]>('genres/fetch', async () => {
  const response = await apiService.get(`/genre/movie/list?api_key=${APIKEY}&language=en-US`)
  console.log(response.data.genres)
  return response.data.genres
})
