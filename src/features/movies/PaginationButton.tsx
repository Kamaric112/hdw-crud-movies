import React from 'react'
import { Link } from 'react-router-dom'
import { increasePageCount, decreasePageCount } from './movieSlice'
import { RootState, AppDispatch } from '../../app/store'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
interface props {
  page: number
}

function PaginationButton({ page }: props) {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className='flex items-center space-x-1'>
      <Link
        to={`/page/${page - 1}`}
        onClick={() => {
          dispatch(decreasePageCount())
          console.log(page)
        }}
      >
        Previous
      </Link>
      <button className='px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white'>
        {page}
      </button>

      <Link
        to={`/page/${page + 1}`}
        onClick={() => {
          dispatch(increasePageCount())
          console.log(page)
        }}
      >
        Next
      </Link>
    </div>
  )
}

export default PaginationButton
