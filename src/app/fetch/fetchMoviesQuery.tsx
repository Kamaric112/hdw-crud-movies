import { APIKEY } from '../config'
import apiService from '../apiService'
import { Movie } from '../../features/movies/type'

const fetchMoviesWithQuery = async (query: string | null): Promise<Movie[]> => {
  const response = await apiService.get(
    `/search/movie?api_key=${APIKEY}&language=en-US&page=1&query=${query}`,
  )
  console.log(response.data)
  return response.data.results
}

export default fetchMoviesWithQuery
