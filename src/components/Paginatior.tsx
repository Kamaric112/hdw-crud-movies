import React from 'react'
import usePagination from '../hooks/usePagination'

// interface props {
//   page: number
// }

function PaginationButton() {
  const { pageIndex, nextPage, previousPage, goToPage } = usePagination()
  return (
    // <div className='flex items-center space-x-1'>
    //   <button onClick={previousPage}>Previous</button>
    //   <button className='px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white'>
    //     {pageIndex}
    //   </button>

    //   <button
    //     className='px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white'
    //     onClick={() => goToPage(500)}
    //   >
    //     500
    //   </button>

    //   <button onClick={nextPage}>Next</button>
    // </div>
    <nav aria-label='Page navigation'>
      <ul className='inline-flex'>
        <li>
          <button
            onClick={previousPage}
            className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100'
          >
            Prev
          </button>
          {pageIndex !== 1 && (
            <button
              onClick={() => goToPage(1)}
              className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline'
            >
              {1}
            </button>
          )}
        </li>

        {pageIndex !== 1 && (
          <li>
            <button
              onClick={() => goToPage(pageIndex - 1)}
              className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline'
            >
              {pageIndex - 1}
            </button>
          </li>
        )}
        <li>
          <button className='h-10 px-5 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 focus:shadow-outline hover:bg-indigo-100'>
            {pageIndex}
          </button>
        </li>
        {pageIndex < 500 && (
          <li>
            <button
              onClick={() => goToPage(pageIndex + 1)}
              className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline'
            >
              {pageIndex + 1}
            </button>
          </li>
        )}

        {pageIndex < 500 && (
          <li>
            <button
              onClick={() => goToPage(500)}
              className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline'
            >
              500
            </button>
          </li>
        )}

        <li>
          <button
            onClick={nextPage}
            className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 rounded-r-lg focus:shadow-outline hover:bg-indigo-100'
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default PaginationButton
