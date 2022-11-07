import React from 'react';

interface PaginatorProps {
  currentPage: number;
  totalPage: number;
  onPageChanged: (page: number) => void;
}

function Paginator({ currentPage, totalPage, onPageChanged }: PaginatorProps) {
  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex">
        <li>
          <button
            onClick={() => onPageChanged(currentPage - 1)}
            className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100"
            disabled={currentPage == 1}
          >
            Prev
          </button>
          {currentPage !== 1 && (
            <button
              onClick={() => onPageChanged(1)}
              className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline"
            >
              {1}
            </button>
          )}
        </li>

        {currentPage > 2 && (
          <li>
            <button
              onClick={() => onPageChanged(currentPage - 1)}
              className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline"
            >
              {currentPage - 1}
            </button>
          </li>
        )}
        <li>
          <button className="h-10 px-5 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 focus:shadow-outline hover:bg-indigo-100">
            {currentPage}
          </button>
        </li>
        {currentPage < totalPage && (
          <li>
            <button
              onClick={() => onPageChanged(currentPage + 1)}
              className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline"
            >
              {currentPage + 1}
            </button>
          </li>
        )}
        <li>
          <button
            onClick={() => onPageChanged(10)}
            className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline"
          >
            {10}
          </button>
        </li>

        {currentPage < totalPage && (
          <li>
            <button
              onClick={() => onPageChanged(totalPage)}
              className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline"
            >
              {totalPage}
            </button>
          </li>
        )}

        <li>
          <button
            onClick={() => onPageChanged(currentPage + 1)}
            className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Paginator;