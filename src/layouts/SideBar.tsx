import React, { useEffect } from 'react'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { fetchGenres } from '../features/genres/fetchGenres'
import { AppDispatch, RootState } from '../app/store'
import { Genres } from '../features/genres/type'
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
function SideBar() {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchGenres())
  }, [dispatch])
  // const genres = useSelector((state) => state.genre.genres)

  const { genres } = useTypedSelector((state) => state.genre)
  // useEffect(() => {
  //   dispatch(getGenres123())
  // }, [])
  console.log(genres)

  return (
    <>
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
