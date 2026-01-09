import React, { useState } from 'react'
import { Movie, Section } from '../types'
import MovieCard from './MovieCard'
import styles from './MovieSection.module.css'

interface MovieSectionProps {
  section: Section
}

export default function MovieSection({ section }: MovieSectionProps) {
  const [scrollPos, setScrollPos] = useState(0)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return
    const scrollAmount = 400
    const newPos = direction === 'left' ? scrollPos - scrollAmount : scrollPos + scrollAmount
    containerRef.current.scrollLeft = newPos
    setScrollPos(newPos)
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{section.title}</h2>
      <div className={styles.carouselContainer}>
        <button
          className={`${styles.arrowBtn} ${styles.leftArrow}`}
          onClick={() => scroll('left')}
        >
          ◀
        </button>

        <div className={styles.carousel} ref={containerRef}>
          {section.movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <button
          className={`${styles.arrowBtn} ${styles.rightArrow}`}
          onClick={() => scroll('right')}
        >
          ▶
        </button>
      </div>
    </section>
  )
}
