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
  const genresParam = params.get('genres');

  useEffect(() => {
    if (searchParam && pageParam) {
      const query = searchParam;
      const page = parseInt(pageParam);
      dispatch(fetchMoviesQuery({ query: query, page: page }));
      dispatch(fetchMoviesQueryPage({ query, page }));
    } else if (pageParam && genresParam) {
      dispatch(fetchMovies({ page: parseInt(pageParam) || 1, genreId: parseInt(genresParam) }));
      dispatch(fetchMoviesTotalPage(parseInt(pageParam) || 1));
    } else if (pageParam) {
      dispatch(fetchMovies({ page: parseInt(pageParam) }));
    } else {
      dispatch(fetchMovies({ page: 1 }));
      dispatch(fetchMoviesTotalPage(1));
    }
  }, [dispatch, pageParam, searchParam, genresParam, setParams]);
  return { pageParam, searchParam, genresParam };
}

export default useRenderOnURLChanged;
