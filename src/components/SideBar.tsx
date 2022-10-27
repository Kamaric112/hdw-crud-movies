import React, { useEffect } from 'react'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { fetchGenres } from '../features/genres/fetchGenres'
import { AppDispatch, RootState } from '../app/store'
import { Genres } from '../features/genres/type'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import apiService from '../app/apiService'
import fetchGenreTest from '../app/fetch/fetchGenreTest'
import { useQueryClient } from '@tanstack/react-query/build/lib/QueryClientProvider'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

function SideBar() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchGenres())
  }, [dispatch])

  const { genres } = useTypedSelector((state) => state.genre)

  return (
    <>
      <Link to='/watch'>WatchList</Link>
      {genres.map((genre: Genres) => (
        <a
          href='/#'
          className='block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white'
          key={genre.id}
        >
          {genre.name}
        </a>
      ))}
    </>
  )
}

export default SideBar
