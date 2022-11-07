import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useDebounce from './useDebounce';
import useUpdateParams from './useUpdateParams';
import useRenderOnURLChanged from './useRenderOnURLChanged';

function useSearch() {
  const [searchValue, setSearchValue] = useState<string>('');
  const debounceValue = useDebounce(searchValue, 500);
  const [previousKeyword, setPreviousKeyword] = useState<string>(debounceValue);
  const [params, setParams] = useSearchParams();
  const { updateSearchParam } = useUpdateParams();
  const { searchParam } = useRenderOnURLChanged();

  useEffect(() => {
    // get value to fetch movie (http://localhost:3000/?search=wick)
    if (searchParam) {
      setSearchValue(searchParam);
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    if (previousKeyword === debounceValue) return;
    setPreviousKeyword(debounceValue);

    if (debounceValue.length > 0) {
      updateSearchParam(debounceValue);
    } else {
      params.delete('search');
      setParams(params);
    }
    console.log(debounceValue);
  }, [debounceValue]);

  return {
    searchQuery: debounceValue,
    setSearchValue,
  };
}

export default useSearch;
