import React, { useState } from 'react'
import { Movie } from '../types'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  movie: Movie
}

export default function HeroSection({ movie }: HeroSectionProps) {
  const [backdropError, setBackdropError] = useState(false)

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: backdropError
          ? 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221920%22 height=%221080%22%3E%3Crect fill=%22%23222%22 width=%221920%22 height=%221080%22/%3E%3C/svg%3E")'
          : `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(${movie.backdropUrl})`
      }}
      onError={() => setBackdropError(true)}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>{movie.title}</h1>
        <p className={styles.description}>{movie.description}</p>
        <div className={styles.info}>
          <span className={styles.rating}>⭐ {movie.rating}</span>
          <span className={styles.year}>{movie.year}</span>
          <span className={styles.genre}>{movie.genre.join(', ')}</span>
        </div>
        <div className={styles.buttons}>
          <button className={styles.playBtn}>▶ Play</button>
          <button className={styles.infoBtn}>More Info</button>
        </div>
      </div>
    </section>
  )
}
