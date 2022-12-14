import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RootState } from '../app/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import useRenderOnURLChanged from './useUpdateParams';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

function usePagination() {
  // not used
  const [params, setParams] = useSearchParams();
  // const { pageParam } = useRenderOnURLChanged();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { totalPage } = useTypedSelector(state => state.movie);

  // useEffect(() => {
  //   const pageParam = params.get('page');
  //   if (pageParam) setCurrentPage(Number(pageParam) || 1);
  // }, [pageParam]);

  function goToPage(pageNumber: number) {
    setCurrentPage(pageNumber);
    // params.set('page', pageNumber.toString());
    // setParams(params);
    // window.scrollTo(0, 0);
  }

  return {
    currentPage,
    totalPage,
    goToPage,
  };
}

export default usePagination;
