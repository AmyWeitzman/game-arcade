import { GameStatus } from '../data/games'

interface Props {
  statusFilter: GameStatus | 'all'
  onStatusFilter: (s: GameStatus | 'all') => void
  search: string
  onSearch: (s: string) => void
}

const FILTERS: { value: GameStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All Games' },
  { value: 'playable', label: '🟢 Playable' },
  { value: 'coming-soon', label: '🟡 Coming Soon' },
  { value: 'download', label: '🔵 Download' },
]

export default function FilterBar({ statusFilter, onStatusFilter, search, onSearch }: Props) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__tabs">
        {FILTERS.map(f => (
          <button
            key={f.value}
            className={`filter-tab ${statusFilter === f.value ? 'filter-tab--active' : ''}`}
            onClick={() => onStatusFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <input
        className="filter-bar__search"
        type="search"
        placeholder="Search games..."
        value={search}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  )
}
