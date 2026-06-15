import { Game } from '../data/games'

interface Props {
  game: Game
}

const STATUS_LABEL: Record<string, string> = {
  playable: 'LIVE',
  'coming-soon': 'COMING SOON',
  download: 'DOWNLOAD',
}

const BUTTON_LABEL: Record<string, string> = {
  playable: 'Play Now →',
  'coming-soon': 'Coming Soon',
  download: 'Download →',
}

export default function GameCard({ game }: Props) {
  const handleAction = () => {
    if (game.url) {
      window.open(game.url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className={`card card--${game.status}`}>
      <div className="card__emoji">{game.emoji}</div>
      <div className="card__content">
        <div className="card__top">
          <h3 className="card__title">{game.title}</h3>
          <span className="card__players">{game.players}</span>
        </div>
        <p className="card__description">{game.description}</p>
      </div>
      <div className="card__footer">
        <span className={`card__badge card__badge--${game.status}`}>
          {STATUS_LABEL[game.status]}
        </span>
        <button
          className={`card__button card__button--${game.status}`}
          onClick={handleAction}
          disabled={game.status === 'coming-soon'}
        >
          {BUTTON_LABEL[game.status]}
        </button>
      </div>
    </div>
  )
}
