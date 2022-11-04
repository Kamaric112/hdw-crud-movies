import React, { useEffect, useState } from 'react';
import { AppDispatch, RootState } from '../app/store';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
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
  let firstLoad = true;
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
    firstLoad = false;
  }, [dispatch, pageParam, searchParam]);
  return { searchParam, pageParam, firstLoad };
}

export default useRenderOnURLChanged;
