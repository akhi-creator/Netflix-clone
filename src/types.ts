export interface Movie {
  id: string
  title: string
  description: string
  posterUrl: string
  backdropUrl: string
  rating: number
  year: number
  genre: string[]
  isTrending?: boolean
}

export interface Section {
  title: string
  movies: Movie[]
}
