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

// export const getGenres123 =
//   () => async (dispatch: (arg0: { payload: Genres | undefined; type: string }) => void) => {
//     dispatch(slice.actions.startLoading())
//     try {
//       const response = await apiService.get(`/genre/movie/list?api_key=${APIKEY}&language=en-US`)
//       console.log(response.data.genres)
//       dispatch(slice.actions.getGenresSuccess(response.data.genres))
//     } catch (error) {
//       console.log(error)
//     }
//   }

// import apiService from '../../app/apiService'
// import { APIKEY } from '../../app/config'
