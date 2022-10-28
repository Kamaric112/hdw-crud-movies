import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AppDispatch } from '../app/store'
import { useDispatch } from 'react-redux'
import { fetchMovies, fetchMoviesQuery } from '../features/movies/fetchMovies'

function usePagination() {
  const dispatch = useDispatch<AppDispatch>()
  const [params, setParams] = useSearchParams()
  const [pageIndex, setPageIndex] = useState<number>(1)
  const searchParam = params.get('search')

  useEffect(() => {
    const pageParam = params.get('page')
    if (pageParam) {
      setPageIndex(parseInt(pageParam) || 1)
      dispatch(fetchMovies(parseInt(pageParam)))
    }
  }, [])

  useEffect(() => {
    params.set('page', pageIndex.toString())
    setParams(params)
  }, [pageIndex])

  function nextPage() {
    if (pageIndex < 500) {
      if (searchParam) {
        const query = searchParam
        const page = pageIndex + 1
        dispatch(fetchMoviesQuery({ query, page }))
      } else {
        dispatch(fetchMovies(pageIndex + 1))
      }
      setPageIndex((oldPageIndex) => ++oldPageIndex)
      window.scrollTo(0, 0)
    }
  }

  function previousPage() {
    if (pageIndex > 1) {
      if (searchParam) {
        const query = searchParam
        const page = pageIndex - 1
        dispatch(fetchMoviesQuery({ query, page }))
      } else {
        dispatch(fetchMovies(pageIndex - 1))
      }
      setPageIndex((oldPageIndex) => oldPageIndex - 1)
      window.scrollTo(0, 0)
    }
  }

  function goToPage(pageNumber: number) {
    if (pageNumber !== pageIndex) {
      setPageIndex(pageNumber)
      dispatch(fetchMovies(pageNumber))
    }
    window.scrollTo(0, 0)
  }

  return {
    pageIndex,
    // pageSize,
    nextPage,
    previousPage,
    goToPage,
    // changePageSize,
  }
}

export default usePagination
