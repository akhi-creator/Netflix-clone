import React from 'react'
import styles from './Header.module.css'

interface HeaderProps {
  onSearch?: (query: string) => void
}

export default function Header({ onSearch }: HeaderProps) {
  const [searchActive, setSearchActive] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch?.(query)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.netflixText}>NETFLIX</span>
        </div>

        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#" className={styles.navLink}>TV Shows</a>
          <a href="#" className={styles.navLink}>Movies</a>
          <a href="#" className={styles.navLink}>New & Popular</a>
        </nav>

        <div className={styles.rightSection}>
          <div className={styles.searchContainer}>
            {searchActive && (
              <input
                type="text"
                placeholder="Search movies..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={handleSearchChange}
                autoFocus
              />
            )}
            <button
              className={styles.searchBtn}
              onClick={() => {
                if (!searchActive) setSearchActive(true)
                else setSearchActive(false)
              }}
            >
              🔍
            </button>
          </div>
          <button className={styles.loginBtn}>
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}
