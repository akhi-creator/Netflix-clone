import React from 'react'
import { Movie } from '../types'
import styles from './SearchResults.module.css'
import MovieCard from './MovieCard'

interface SearchResultsProps {
  results: Movie[]
  query: string
}

export default function SearchResults({ results, query }: SearchResultsProps) {
  if (query.length === 0) return null

  return (
    <section className={styles.resultsSection}>
      <h2 className={styles.title}>
        Search Results for "{query}" ({results.length} found)
      </h2>
      {results.length === 0 ? (
        <p className={styles.noResults}>No movies found matching your search.</p>
      ) : (
        <div className={styles.grid}>
          {results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  )
}
