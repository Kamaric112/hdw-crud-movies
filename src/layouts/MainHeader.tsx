import React from 'react'
import { useSearchParams, createSearchParams } from 'react-router-dom'

import { debounce } from 'lodash'

import useAuth from '../hooks/useAuth'

interface MainHeaderProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

function MainHeader({ setSearchValue }: MainHeaderProps) {
  const auth = useAuth()
  const handleLogout = () => {
    auth.logout?.(() => console.log('test'))
  }

  const debouncedSearch = React.useRef(
    debounce(async (searchValue) => {
      setSearchValue(searchValue)
      console.log(searchValue)
    }, 500),
  ).current

  const [searchParams, setSearchParams] = useSearchParams()

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value)
    setSearchParams(createSearchParams({ query: e.target.value }))
  }

  return (
    <div className='bg-gray-800 text-gray-100 flex justify-between w-full '>
      <a href='/#' className='block p-4 text-white font-bold'>
        Movie
      </a>

      <div className='flex items-center justify-center '>
        <div className='flex border-2 rounded'>
          <input
            type='text'
            className='px-4 py-2 w-56  text-gray-800'
            placeholder='Search...'
            onChange={handleChange}
          />
          <button className='px-4 text-white bg-gray-600 border-l '>Search</button>
        </div>
      </div>

      <button className='flex justify-center items-center gap-4 mr-10' onClick={handleLogout}>
        {' '}
        Logout
      </button>
    </div>
  )
}

export default MainHeader
