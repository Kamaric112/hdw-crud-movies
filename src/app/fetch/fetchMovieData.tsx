import { APIKEY } from '../config'
import apiService from '../apiService'
import { Movie } from '../../features/movies/type'

const fetchMoviesData = async (page: number): Promise<Movie[]> => {
  const response = await apiService.get(
    `/movie/popular?api_key=${APIKEY}&language=en-US&page=${page}`,
  )
  console.log(response.data)

  return response.data.results
}

export const fetchMoviesPage = async (page: number): Promise<number> => {
  const response = await apiService.get(
    `/movie/popular?api_key=${APIKEY}&language=en-US&page=${page}`,
  )
  // console.log(response.data)

  return response.data.total_pages
}

export default fetchMoviesData
