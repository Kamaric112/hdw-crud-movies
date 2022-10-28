import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import useDebounce from './useDebounce'
import { AppDispatch } from '../app/store'
import { useDispatch } from 'react-redux'
import {
  fetchMovies,
  fetchMoviesQuery,
  fetchMoviesQueryPage,
  fetchMoviesTotalPage,
} from '../features/movies/fetchMovies'

function useSearch(resetPage?: () => void) {
  const dispatch = useDispatch<AppDispatch>()
  const [searchValue, setSearchValue] = useState<string>('')
  const debounceValue = useDebounce(searchValue, 500)
  const [previousKeyword, setPreviousKeyword] = useState<string>(debounceValue)
  const [params, setParams] = useSearchParams()

  useEffect(() => {
    // get value to fetch movie (http://localhost:3000/?search=wick)
    const searchParam = params.get('search')
    if (searchParam) {
      setSearchValue(searchParam)
      setPreviousKeyword(searchParam)
      // const query = searchParam
      // dispatch(fetchMoviesQuery({ query }))
      // dispatch(fetchMoviesQueryPage({ query }))
    }
    if (searchParam == '') {
      dispatch(fetchMoviesTotalPage(1)) // change page after done pagination
    } else if (!searchParam) {
      return
    }
  }, [])

  useEffect(() => {
    // set debounce value and dispatch
    if (previousKeyword === debounceValue) return

    if (resetPage) {
      resetPage()
    }

    setPreviousKeyword(debounceValue)

    if (debounceValue.length > 0) {
      // params.delete('page') // delete page param (ask)
      params.set('search', debounceValue)
      setParams(params)
      const query = debounceValue
      dispatch(fetchMoviesQuery({ query }))
      dispatch(fetchMoviesQueryPage({ query }))
    } else {
      params.delete('search')
      setParams(params)
    }

    if (debounceValue == '') {
      dispatch(fetchMovies(1)) // change page after done pagination
      dispatch(fetchMoviesTotalPage(1)) // change page after done pagination
      params.delete('search')
    } else {
      const query = debounceValue
      dispatch(fetchMoviesQuery({ query }))
    }
    console.log(debounceValue)
  }, [debounceValue])

  return {
    search: debounceValue,
    setSearchValue,
  }
}

export default useSearch
