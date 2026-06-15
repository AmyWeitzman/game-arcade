import { useState, useMemo } from 'react'
import { games, GameStatus } from './data/games'
import GameCard from './components/GameCard'
import FilterBar from './components/FilterBar'
import './App.css'

export default function App() {
  const [statusFilter, setStatusFilter] = useState<GameStatus | 'all'>('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return games.filter(game => {
      const matchesStatus = statusFilter === 'all' || game.status === statusFilter
      const q = search.toLowerCase()
      const matchesSearch =
        !q ||
        game.title.toLowerCase().includes(q) ||
        game.description.toLowerCase().includes(q)
      return matchesStatus && matchesSearch
    })
  }, [statusFilter, search])

  const liveCount = games.filter(g => g.status === 'playable').length

  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">🕹️ Amy's Arcade</h1>
        <p className="header__subtitle">
          {games.length} games &nbsp;·&nbsp; {liveCount} playable now
        </p>
      </header>

      <main className="main">
        <FilterBar
          statusFilter={statusFilter}
          onStatusFilter={setStatusFilter}
          search={search}
          onSearch={setSearch}
        />
        {filtered.length > 0 ? (
          <div className="game-grid">
            {filtered.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <p className="no-results">No games match your search.</p>
        )}
      </main>

      <footer className="footer">
        <p>Built with React · Hosted on GitHub Pages</p>
      </footer>
    </div>
  )
}
