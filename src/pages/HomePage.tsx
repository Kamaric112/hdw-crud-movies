import MovieCard from '../features/movies/MovieCard'
import { AppDispatch, RootState } from '../app/store'
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import { Movie } from '../features/movies/type'
import PaginationButton from '../components/Paginatior'
import MainHeader from '../components/MainHeader'
import {
  fetchMovies,
  fetchMoviesQuery,
  fetchMoviesQueryPage,
  fetchMoviesTotalPage,
} from '../features/movies/fetchMovies'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

function HomePage() {
  const dispatch = useDispatch<AppDispatch>()
  const [params, setParams] = useSearchParams()

  useEffect(() => {
    const searchParam = params.get('search')
    const pageParam = params.get('page')
    if (searchParam && pageParam) {
      const query = searchParam
      const page = parseInt(pageParam)
      dispatch(fetchMoviesQuery({ query, page }))
      dispatch(fetchMoviesQueryPage({ query, page }))
    } else if (pageParam) {
      dispatch(fetchMovies(parseInt(pageParam) || 1))
      dispatch(fetchMoviesTotalPage(parseInt(pageParam) || 1))
    } else {
      dispatch(fetchMovies(1))
      dispatch(fetchMoviesTotalPage(1))
    }
  }, [dispatch])

  const { movies } = useTypedSelector((state) => state.movie)
  // console.log(movies)

  return (
    <div className='flex-1  text-2x1 font-bold flex flex-col justify-between items-center'>
      <MainHeader />
      <PaginationButton />

      <div className='flex h-full items-start justify-evenly flex-wrap bg-indigo-50 px-4 gap-5'>
        {movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

      <div className='flex items-center space-x-1'></div>
    </div>
  )
}

export default HomePage
