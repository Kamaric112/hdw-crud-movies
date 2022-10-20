import React from 'react'
import { Link } from 'react-router-dom'
interface props {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}
function PaginationButton({ page, setPage }: props) {
  return (
    <div className='flex items-center space-x-1'>
      <Link
        to={`/page/${page - 1}`}
        onClick={() => {
          setPage((prevState) => prevState - 1)
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
          setPage((prevState) => prevState + 1)
          console.log(page)
        }}
      >
        Next
      </Link>
    </div>
  )
}

export default PaginationButton
