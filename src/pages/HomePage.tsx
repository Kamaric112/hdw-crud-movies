import React, { useEffect, useState } from 'react'
import MovieCard from '../features/movies/MovieCard'
import MainHeader from '../layouts/MainHeader'
import { fetchMovies, fetchMoviesQuery } from '../features/movies/fetchMovies'
import { RootState, AppDispatch } from '../app/store'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { Movie } from '../features/movies/type'
import PaginationButton from '../features/movies/PaginationButton'
import { getPage } from '../features/movies/movieSlice'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

function HomePage() {
  const [page, setPage] = useState<number>(1)
  const dispatch = useDispatch<AppDispatch>()
  console.log(page)
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    if (searchValue == '') {
      dispatch(fetchMovies(page))
    } else {
      dispatch(fetchMoviesQuery(searchValue))
    }
    dispatch(getPage(page)) // ask
  }, [dispatch, page, searchValue])

  const { movies } = useTypedSelector((state) => state.movie)
  console.log(movies)
  return (
    <div className='flex-1  text-2x1 font-bold flex flex-col justify-between items-center'>
      <MainHeader setSearchValue={setSearchValue} />
      <div className='flex h-full items-start justify-evenly flex-wrap bg-indigo-50 px-4 gap-5'>
        {movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      <div className='flex items-center space-x-1'>
        <PaginationButton page={page} setPage={setPage} />
      </div>
    </div>
  )
}

export default HomePage
