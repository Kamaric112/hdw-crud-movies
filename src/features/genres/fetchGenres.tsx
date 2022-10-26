import { createAsyncThunk } from '@reduxjs/toolkit'
import { Genres } from './type'
import fetchGenresData from '../../app/fetch/fetchGenreData'

export const fetchGenres = createAsyncThunk<Genres[]>('genres/fetch', async () => {
  const response = await fetchGenresData()
  return response
})
