import { APIKEY } from '../config'
import apiService from '../apiService'
import { Genres } from '../../features/genres/type'

const fetchGenresData = async (): Promise<Genres[]> => {
  const response = await apiService.get(`/genre/movie/list?api_key=${APIKEY}&language=en-US`)
  return response.data.genres
}

export default fetchGenresData
