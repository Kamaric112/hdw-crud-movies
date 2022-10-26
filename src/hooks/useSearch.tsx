import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import useDebounce from './useDebounce'
import { AppDispatch } from '../app/store'
import { useDispatch } from 'react-redux'
import { fetchMovies, fetchMoviesQuery } from '../features/movies/fetchMovies'

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
      dispatch(fetchMoviesQuery(searchParam))
    }
    if (searchParam == '') {
      return
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
      params.delete('page') // delete page param (ask)
      params.set('search', debounceValue)
      setParams(params)
    } else {
      params.delete('search')
      setParams(params)
    }

    if (debounceValue == '') {
      dispatch(fetchMovies(1)) // change page after done pagination
    } else {
      dispatch(fetchMoviesQuery(debounceValue))
    }
    console.log(debounceValue)
  }, [debounceValue])

  return {
    search: debounceValue,
    setSearchValue,
  }
}

export default useSearch
