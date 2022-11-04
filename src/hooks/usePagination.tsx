import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../app/store'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import {
  fetchMovies,
  fetchMoviesQuery,
  fetchMoviesTotalPage,
  fetchMoviesQueryPage,
} from '../features/movies/fetchMovies'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

function usePagination() {
  const dispatch = useDispatch<AppDispatch>()
  const [params, setParams] = useSearchParams()
  const [pageIndex, setPageIndex] = useState<number>(1)
  const searchParam = params.get('search')
  const { page } = useTypedSelector((state) => state.movie)

  useEffect(() => {
    const pageParam = params.get('page')
    if (pageParam) {
      setPageIndex(parseInt(pageParam))
      if (searchParam) {
        const query = searchParam
        const page = parseInt(pageParam)
        dispatch(fetchMoviesQuery({ query, page }))
        dispatch(fetchMoviesQueryPage({ query, page }))
      } else {
        setPageIndex(parseInt(pageParam) || 1)
        dispatch(fetchMovies(parseInt(pageParam)))
        dispatch(fetchMoviesTotalPage(parseInt(pageParam)))
      }
    }
  }, [searchParam])

  useEffect(() => {
    params.set('page', pageIndex.toString())
    setParams(params)
  }, [pageIndex])

  function goToPage(pageNumber: number) {
    console.log(pageIndex)
    setPageIndex(pageNumber)
    if (searchParam) {
      const query = searchParam
      const page = pageNumber
      dispatch(fetchMoviesQuery({ query, page }))
      dispatch(fetchMoviesQueryPage({ query, page }))
    } else {
      dispatch(fetchMovies(pageNumber))
      dispatch(fetchMoviesTotalPage(pageNumber))
    }
    window.scrollTo(0, 0)
  }

  return {
    pageIndex,
    page,
    // pageSize,
    // nextPage,
    // previousPage,
    goToPage,
    // changePageSize,
  }
}

export default usePagination
