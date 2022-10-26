import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AppDispatch } from '../app/store'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../features/movies/fetchMovies'

function usePagination() {
  const dispatch = useDispatch<AppDispatch>()
  const [params, setParams] = useSearchParams()
  const [pageIndex, setPageIndex] = useState<number>(1)

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
      setPageIndex((oldPageIndex) => ++oldPageIndex)
      dispatch(fetchMovies(pageIndex + 1))
    }
  }

  function previousPage() {
    if (pageIndex > 1) {
      setPageIndex((oldPageIndex) => oldPageIndex - 1)
      dispatch(fetchMovies(pageIndex - 1))
    }
  }

  function goToPage(pageNumber: number) {
    if (pageNumber !== pageIndex) {
      setPageIndex(pageNumber)
      dispatch(fetchMovies(pageNumber))
    }
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
