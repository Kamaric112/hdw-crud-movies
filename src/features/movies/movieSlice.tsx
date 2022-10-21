import { RootState } from '../../app/store'
import { createSlice } from '@reduxjs/toolkit'
import { MovieState } from './type'
import { fetchMovies, fetchMoviesQuery } from './fetchMovies'
const initialState: MovieState = {
  isLoading: false,
  error: null,
  page: 1,
  movies: [],
}

const slice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true
    },
    hasError(state, action) {
      state.isLoading = false
      state.error = action.payload
    },
    setPage(state) {
      state.page = 1
    },
    getPage(state, action) {
      state.page = action.payload
    },
    increasePageCount(state) {
      state.page += 1
      localStorage.setItem('page', JSON.stringify(state.page))
    },
    decreasePageCount(state) {
      state.page -= 1
      localStorage.setItem('page', JSON.stringify(state.page))
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
        state.error = 'test'
        state.movies = payload
      }),
      builder.addCase(fetchMovies.rejected, (state) => {
        state.error = 'error'
      }),
      builder.addCase(fetchMoviesQuery.fulfilled, (state, { payload }) => {
        state.error = '123'
        state.movies = payload
      })
  },
})

export default slice.reducer

export const selectMovies = (state: RootState) => state.movie.movies

export const { startLoading, hasError, getPage, increasePageCount, decreasePageCount, setPage } =
  slice.actions
