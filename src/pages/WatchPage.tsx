import React, { useContext } from 'react';
import { WatchContext } from '../contexts/WatchContext';
import MovieCard from '../features/movies/MovieCard';
import { Movie } from '../features/movies/type';
function WatchPage() {
  const { watchlist } = useContext(WatchContext);
  return (
    <div className="flex h-full w-full items-start justify-evenly flex-wrap bg-indigo-50 px-4 gap-5">
      {watchlist.map((movie: Movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}{' '}
    </div>
  );
}

export default WatchPage;
