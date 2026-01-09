import { Movie, Section } from '../types'

const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    description: 'A skilled thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg',
    rating: 8.8,
    year: 2010,
    genre: ['Sci-Fi', 'Thriller'],
    isTrending: true
  },
  {
    id: '2',
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc on Gotham, Batman must confront his greatest nemesis.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg',
    rating: 9.0,
    year: 2008,
    genre: ['Action', 'Crime', 'Drama'],
    isTrending: true
  },
  {
    id: '3',
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
    rating: 8.6,
    year: 2014,
    genre: ['Sci-Fi', 'Drama'],
    isTrending: true
  },
  {
    id: '4',
    title: 'Pulp Fiction',
    description: 'The lives of four gangsters, two hitmen, a boxer and a pair of diner bandits intertwine in four tales of violence.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2QM528GluxMcAd.jpg',
    rating: 8.9,
    year: 1994,
    genre: ['Crime', 'Drama']
  },
  {
    id: '5',
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
    rating: 9.3,
    year: 1994,
    genre: ['Drama']
  },
  {
    id: '6',
    title: 'The Matrix',
    description: 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg',
    rating: 8.7,
    year: 1999,
    genre: ['Sci-Fi', 'Action'],
    isTrending: true
  },
  {
    id: '7',
    title: 'Forrest Gump',
    description: 'The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/qdIMHd4sEfJSckfVJfKQvisL02a.jpg',
    rating: 8.8,
    year: 1994,
    genre: ['Drama', 'Romance']
  },
  {
    id: '8',
    title: 'Gladiator',
    description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/nBpwKGigwWg5TaAsO6F4xXXsIvF.jpg',
    rating: 8.5,
    year: 2000,
    genre: ['Action', 'Drama']
  },
  {
    id: '9',
    title: 'John Wick',
    description: 'An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/umC04Gg4Ep0vA7ehGhNq2RvBu2Q.jpg',
    rating: 7.4,
    year: 2014,
    genre: ['Action', 'Thriller'],
    isTrending: true
  },
  {
    id: '10',
    title: 'Mad Max: Fury Road',
    description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg',
    rating: 8.1,
    year: 2015,
    genre: ['Action', 'Sci-Fi'],
    isTrending: true
  },
  {
    id: '11',
    title: 'Se7en',
    description: 'Two detectives hunt a serial killer who uses the seven deadly sins as his motives.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/rBOdL0o1Kwj8m8r4jgNAG9iJHe6.jpg',
    rating: 8.6,
    year: 1995,
    genre: ['Thriller', 'Crime', 'Drama']
  },
  {
    id: '12',
    title: 'The Departed',
    description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/l9rUvgD1mLQ6uxfGkL9TCJ2Pz96.jpg',
    rating: 8.5,
    year: 2006,
    genre: ['Crime', 'Thriller', 'Drama']
  },
  {
    id: '13',
    title: 'Die Hard',
    description: 'A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/8oCkj0Qtjg2ZjNNq1HvGSo3MzYF.jpg',
    rating: 8.2,
    year: 1988,
    genre: ['Action', 'Thriller']
  },
  {
    id: '14',
    title: 'Fight Club',
    description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg',
    rating: 8.8,
    year: 1999,
    genre: ['Drama', 'Thriller']
  },
  {
    id: '15',
    title: 'The Godfather',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
    rating: 9.2,
    year: 1972,
    genre: ['Crime', 'Drama']
  },
  {
    id: '16',
    title: 'Terminator 2',
    description: 'A cyborg is sent back in time to protect the future leader of the human resistance against the machines.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/xKb6mtdfI5Qsggc44Hr9CCUDvaj.jpg',
    rating: 8.6,
    year: 1991,
    genre: ['Action', 'Sci-Fi']
  }
]

export const getSections = (): Section[] => {
  return [
    {
      title: 'Trending Now',
      movies: mockMovies.filter(m => m.isTrending)
    },
    {
      title: 'Popular Movies',
      movies: mockMovies.slice(0, 8)
    },
    {
      title: 'Drama Classics',
      movies: mockMovies.filter(m => m.genre.includes('Drama'))
    },
    {
      title: 'Action & Thriller',
      movies: mockMovies.filter(m => m.genre.includes('Action') || m.genre.includes('Thriller'))
    }
  ]
}

export const searchMovies = (query: string): Movie[] => {
  return mockMovies.filter(m =>
    m.title.toLowerCase().includes(query.toLowerCase()) ||
    m.description.toLowerCase().includes(query.toLowerCase())
  )
}

export const getFeaturedMovie = (): Movie => {
  return mockMovies[0]
}
