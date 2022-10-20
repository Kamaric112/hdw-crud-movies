import React, { useContext } from 'react'
import { Movie } from './type'
import { WatchContext } from '../../contexts/MovieContext'
import DeleteModal from '../../components/DeleteModal'

interface MovieCardProps {
  movie: Movie
}
function MovieCard({ movie }: MovieCardProps) {
  const { addMovieToWatchlist, removeMovieFromWatchlist, watchlist } = useContext(WatchContext)
  const storedMovie = watchlist.find((o) => o.id === movie.id)

  const watchlistDisabled = storedMovie ? true : false
  return (
    <div>
      <div className='max-w-xs max-h-fit	 overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl'>
        <img
          src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}
          `}
          // src='https://placehold.jp/400x400.png'
          alt={movie.title}
          className='h-3/4 w-3/4 mx-auto	'
        />
        <div className='p-5 my-auto'>
          <h1 className='text-large  text-gray-700 text-2xl	text-center my-2 '>{movie.title}</h1>
          <span className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path d='M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z' />
              <path
                fillRule='evenodd'
                d='M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z'
                clipRule='evenodd'
              />
            </svg>

            <p>{movie.release_date}</p>
          </span>
          <div className='flex mb-4'>
            <span className='flex items-center'>
              <svg
                fill='currentColor'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 text-red-500'
                viewBox='0 0 24 24'
              >
                <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
              </svg>
              <span className='text-gray-600 ml-3'>{movie.vote_average}</span>
              <span className='text-gray-600 ml-3'>{movie.vote_count} Reviews</span>
            </span>
          </div>
          {watchlistDisabled ? (
            <>
              <button
                className='w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75'
                onClick={() => removeMovieFromWatchlist?.(movie.id)}
              >
                Remove from WatchList
              </button>
              <DeleteModal movie={movie} />
            </>
          ) : (
            <button
              className='w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75'
              disabled={watchlistDisabled}
              onClick={() => addMovieToWatchlist?.(movie)}
            >
              Add to WatchList
            </button>
          )}
          {/* <button
            className='w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75'
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist?.(movie)}
          >
            Add to WatchList
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default MovieCard
