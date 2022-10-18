import React from 'react'
import MovieCard from '../features/movies/MovieCard'
import MainHeader from '../layouts/MainHeader'

function HomePage() {
  return (
    <div className='flex-1  text-2x1 font-bold flex flex-col justify-between items-center'>
      <MainHeader />
      <div className='flex h-full w-full items-start justify-evenly flex-wrap bg-indigo-50 px-4 py-4 gap-5'>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  )
}

export default HomePage
