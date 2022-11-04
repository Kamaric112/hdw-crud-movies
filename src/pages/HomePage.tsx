import MovieCard from '../features/movies/MovieCard';
import { AppDispatch, RootState } from '../app/store';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { Movie } from '../features/movies/type';
import Paginator from '../components/Paginator';
import MainHeader from '../components/MainHeader';
import useRenderOnURLChanged from '../hooks/useRenderOnURLChanged';

import usePagination from '../hooks/usePagination';
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

function HomePage() {
  const { currentPage, goToPage, totalPage } = usePagination();
  const { movies } = useTypedSelector(state => state.movie);

  useRenderOnURLChanged();

  return (
    <div className="flex-1  text-2x1 font-bold flex flex-col justify-between items-center">
      <MainHeader />
      <Paginator currentPage={currentPage} totalPage={totalPage} goToPage={goToPage} />

      <div className="flex h-full items-start justify-evenly flex-wrap bg-indigo-50 px-4 gap-5">
        {movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

      <div className="flex items-center space-x-1"></div>
    </div>
  );
}

export default HomePage;
