import { useEffect } from 'react';
import { AppDispatch } from '../app/store';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  fetchMovies,
  fetchMoviesQuery,
  fetchMoviesTotalPage,
  fetchMoviesQueryPage,
} from '../features/movies/fetchMovies';

function useRenderOnURLChanged() {
  const [params, setParams] = useSearchParams();

  const dispatch = useDispatch<AppDispatch>();
  const searchParam = params.get('search');
  const pageParam = params.get('page');

  useEffect(() => {
    if (searchParam && pageParam) {
      const query = searchParam;
      const page = parseInt(pageParam);
      dispatch(fetchMoviesQuery({ query, page }));
      dispatch(fetchMoviesQueryPage({ query, page })); // duplicate fetch
    } else if (pageParam) {
      dispatch(fetchMovies(parseInt(pageParam) || 1));
      dispatch(fetchMoviesTotalPage(parseInt(pageParam) || 1));
    } else {
      dispatch(fetchMovies(1));
      dispatch(fetchMoviesTotalPage(1));
    }
  }, [dispatch, pageParam, searchParam]);
  return { pageParam, searchParam };
}

export default useRenderOnURLChanged;
