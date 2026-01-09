import React, { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import MovieSection from './components/MovieSection'
import SearchResults from './components/SearchResults'
import { getSections, searchMovies, getFeaturedMovie } from './services/movieService'
import './App.css'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const sections = getSections()
  const featured = getFeaturedMovie()
  const searchResults = searchQuery.length > 0 ? searchMovies(searchQuery) : []

  return (
    <div className="app">
      <Header onSearch={setSearchQuery} />
      
      {searchQuery.length === 0 ? (
        <>
          <HeroSection movie={featured} />
          <main className="main-content">
            {sections.map(section => (
              <MovieSection key={section.title} section={section} />
            ))}
          </main>
        </>
      ) : (
        <SearchResults results={searchResults} query={searchQuery} />
      )}
    </div>
  )
}
