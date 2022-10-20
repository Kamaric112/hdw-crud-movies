export type Genres = {
  id: number
  name: string
}

export type GenresState = {
  isLoading: boolean
  error: string | null
  genres: Genres[]
}
