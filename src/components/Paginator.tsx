import React from 'react';

interface PaginatorProps {
  currentPage: number;
  totalPage: number;
  onPageChanged: (page: number) => void;
}

function Paginator({ currentPage, totalPage, onPageChanged }: PaginatorProps) {
  return (
    <nav aria-label="Page navigation">
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

      {currentPage > 2 && (
        <button
          onClick={() => onPageChanged(currentPage - 1)}
          className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline"
        >
          {currentPage - 1}
        </button>
      )}
      <button className="h-10 px-5 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 focus:shadow-outline hover:bg-indigo-100">
        {currentPage}
      </button>
      {currentPage < totalPage && (
        <button
          onClick={() => onPageChanged(currentPage + 1)}
          className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline"
        >
          {currentPage + 1}
        </button>
      )}

      {currentPage < totalPage && (
        <button
          onClick={() => onPageChanged(totalPage)}
          className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-indigo-600 focus:shadow-outline"
        >
          {totalPage}
        </button>
      )}

      <button
        onClick={() => onPageChanged(currentPage + 1)}
        className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-indigo-600 rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
      >
        Next
      </button>
    </nav>
  );
}

export default Paginator;
