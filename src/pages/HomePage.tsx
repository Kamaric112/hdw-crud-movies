import MovieCard from '../features/movies/MovieCard';
import { RootState } from '../app/store';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { Movie } from '../features/movies/type';
import Paginator from '../components/Paginator';
import useUpdateParams from '../hooks/useUpdateParams';
import { useEffect, useState } from 'react';
import useRenderOnURLChanged from '../hooks/useRenderOnURLChanged';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

function HomePage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { totalPage } = useTypedSelector(state => state.movie);
  const { movies } = useTypedSelector(state => state.movie);
  const { updatePageParam } = useUpdateParams();
  const { pageParam } = useRenderOnURLChanged();

  useEffect(() => {
    if (typeof pageParam == 'string') {
      setCurrentPage(parseInt(pageParam));
    }
  }, [pageParam]);

  const handlePageChanged = (page: number) => {
    setCurrentPage(page);
    updatePageParam(page);
  };

  return (
    <div className="flex-1  text-2x1 font-bold flex flex-col justify-between items-center">
      {/* <MainHeader /> */}
      <Paginator currentPage={currentPage} totalPage={totalPage} onPageChanged={handlePageChanged} />

      <div className="flex h-full items-start justify-evenly flex-wrap bg-indigo-50 px-4 gap-8 overflow-auto">
        {movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

      <div className="flex items-center space-x-1"></div>
    </div>
  );
}

export default HomePage;
