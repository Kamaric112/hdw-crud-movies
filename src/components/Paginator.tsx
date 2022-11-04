import React from 'react'
import usePagination from '../hooks/usePagination'

function PaginationButton() {
  const { pageIndex, goToPage, page: totalPage } = usePagination()

  return (
    <nav aria-label='Page navigation'>
      <ul className='inline-flex'>
        <li>
          <button
            onClick={() => goToPage(pageIndex - 1)}
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

        {pageIndex > 2 && (
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
        {pageIndex < totalPage && (
          <li>
            <button
              onClick={() => goToPage(pageIndex + 1)}
              className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline'
            >
              {pageIndex + 1}
            </button>
          </li>
        )}

        {pageIndex < totalPage && (
          <li>
            <button
              onClick={() => goToPage(totalPage)}
              className='h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline'
            >
              {totalPage}
            </button>
          </li>
        )}

        <li>
          <button
            onClick={() => goToPage(pageIndex + 1)}
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
