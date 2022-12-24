import { RootState } from '../../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieState, Movie } from './type';
import { fetchMovies, fetchMoviesQuery, fetchMoviesTotalPage, fetchMoviesQueryPage } from './fetchMovies';

const initialState: MovieState = {
  isLoading: false,
  error: null,
  totalPage: 1,
  movies: [],
};

const slice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMovies.pending, state => {
      state.isLoading = true;
    }),
      builder.addCase(fetchMovies.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.error = 'test';
        state.movies = action.payload;
      }),
      // builder.addCase(fetchMovies.fulfilled, (state, action) => {
      //   const { results, total_pages }:Test = action.payload
      //   state.error = 'test'
      //   console.log(results)
      //   state.movies = results
      // }),
      builder.addCase(fetchMovies.rejected, state => {
        state.error = 'error';
      }),
      builder.addCase(fetchMoviesQuery.fulfilled, (state, { payload }) => {
        state.error = 'error';
        state.movies = payload;
      }),
      builder.addCase(fetchMoviesTotalPage.fulfilled, (state, { payload }) => {
        state.error = 'error';
        state.totalPage = payload;
      }),
      builder.addCase(fetchMoviesQueryPage.fulfilled, (state, { payload }) => {
        state.error = 'error';
        state.totalPage = payload;
      });
  },
});

export default slice.reducer;

export const selectMovies = (state: RootState) => state.movie.movies;

export const { startLoading, hasError } = slice.actions;
