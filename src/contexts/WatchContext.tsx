import React, { useEffect, createContext, useReducer } from 'react'
import { Movie } from '../features/movies/type'

const ADDTOWATCHLIST = 'ADD_MOVIE_TO_WATCHLIST'
const REMOVEFROMWATCHLIST = 'REMOVE_MOVIE_FROM_WATCHLIST'

interface LoginContextInterface {
  watchlist: Movie[] | Movie[]
  addMovieToWatchlist?: (movie: Movie) => void
  removeMovieFromWatchlist?: (id: number) => void
}

type ACTIONTYPE =
  | { type: 'ADD_MOVIE_TO_WATCHLIST'; payload: Movie }
  | { type: 'REMOVE_MOVIE_FROM_WATCHLIST'; payload: number }

type WatchProviderProps = {
  children: React.ReactNode
}

const initialState: LoginContextInterface = {
  watchlist: localStorage.getItem('watchlist')
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      JSON.parse(localStorage.getItem('watchlist')!)
    : [],
}

const reducer = (state: LoginContextInterface, action: ACTIONTYPE) => {
  switch (action.type) {
    case ADDTOWATCHLIST: {
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      }
    }
    case REMOVEFROMWATCHLIST: {
      return {
        ...state,
        watchlist: state.watchlist.filter((movie) => movie.id !== action.payload),
      }
    }
    default:
      return state
  }
}

const WatchContext = createContext({ ...initialState })

function WatchProvider({ children }: WatchProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
    // localStorage.removeItem('watchlist')
  }, [state])

  const addMovieToWatchlist = (movie: Movie) => {
    dispatch({ type: ADDTOWATCHLIST, payload: movie })
  }

  const removeMovieFromWatchlist = (id: number) => {
    dispatch({ type: REMOVEFROMWATCHLIST, payload: id })
  }

  return (
    <WatchContext.Provider
      value={{ watchlist: state.watchlist, addMovieToWatchlist, removeMovieFromWatchlist }}
    >
      {children}
    </WatchContext.Provider>
  )
}

export { WatchContext, WatchProvider }
