export type Movie = {
  poster_path: string | null
  title: string
  release_date: string
  id: number
  vote_average: number
  vote_count: number
  overview: string
  results?: Movie[]
}

export type MovieState = {
  isLoading: boolean
  error: string | null
  page: number
  movies: Movie[]
}
