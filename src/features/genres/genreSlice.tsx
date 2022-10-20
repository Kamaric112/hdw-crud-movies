import { RootState } from '../../app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchGenres } from './fetchGenres'

type Genres = {
  id: number
  name: string
}

type GenresState = {
  isLoading: boolean
  error: string | null
  genres: Genres[]
}
const initialState: GenresState = {
  isLoading: false,
  error: null,
  genres: [],
}

const slice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true
    },
    hasError(state, action) {
      state.isLoading = false
      state.error = action.payload
    },
    getGenresSuccess(state: GenresState, action: PayloadAction<Genres>) {
      state.isLoading = false
      state.genres.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(fetchGenres.fulfilled, (state, { payload }) => {
        state.error = 'test'
        state.genres = payload
      }),
      builder.addCase(fetchGenres.rejected, (state) => {
        state.error = 'error'
      })
  },
})

export const selectGenres = (state: RootState) => state.genre.genres

export const { startLoading, hasError, getGenresSuccess } = slice.actions

export default slice.reducer
