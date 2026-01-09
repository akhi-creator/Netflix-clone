import React, { useState } from 'react'
import { Movie } from '../types'
import styles from './MovieCard.module.css'

interface MovieCardProps {
  movie: Movie
  onHover?: (movie: Movie | null) => void
}

const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="300"%3E%3Crect fill="%23333" width="200" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3ENo Image%3C/text%3E%3C/svg%3E'

export default function MovieCard({ movie, onHover }: MovieCardProps) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <div
      className={styles.card}
      onMouseEnter={() => onHover?.(movie)}
      onMouseLeave={() => onHover?.(null)}
    >
      <img
        src={imageError ? FALLBACK_IMAGE : movie.posterUrl}
        alt={movie.title}
        className={styles.poster}
        onError={handleImageError}
      />
      <div className={styles.overlay}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.rating}>⭐ {movie.rating}</p>
        <button className={styles.playBtn}>▶ Play</button>
      </div>
    </div>
  )
}
