import { configureStore, combineReducers } from '@reduxjs/toolkit'
import genreReducer from '../features/genres/genreSlice'
import movieReducer from '../features/movies/movieSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const rootReducer = combineReducers({
  genre: genreReducer,
  movie: movieReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch
