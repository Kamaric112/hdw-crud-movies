import { APIKEY } from '../config';
import apiService from '../apiService';
import { Movie } from '../../features/movies/type';

const fetchMoviesWithQuery = async (query: string | null, page = 1): Promise<Movie[]> => {
  const response = await apiService.get(`/search/movie?api_key=${APIKEY}&language=en-US&page=${page}&query=${query}`);
  return response.data.results;
};

export const fetchMoviesQueryWithPage = async (query: string | null, page = 1): Promise<number> => {
  const response = await apiService.get(`/search/movie?api_key=${APIKEY}&language=en-US&page=${page}&query=${query}`);
  return response.data.total_pages;
};

export default fetchMoviesWithQuery;
