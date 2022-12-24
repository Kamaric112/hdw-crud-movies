import { useSearchParams } from 'react-router-dom';

function useUpdateParams() {
  const [params, setParams] = useSearchParams();

  const updatePageParam = (param: string | number) => {
    params.set('page', param.toString());
    setParams(params);
  };

  const updateSearchParam = (param: string | number) => {
    params.set('search', param.toString());
    setParams(params);
  };

  const updateGenresParam = (param: string | number) => {
    params.set('genres', param.toString());
    setParams(params);
  };

  return { updatePageParam, updateSearchParam, updateGenresParam };
}

export default useUpdateParams;
