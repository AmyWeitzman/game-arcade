export type GameStatus = 'playable' | 'coming-soon' | 'download'
export type PlayerCount = 'Single Player' | 'Multiplayer'

export interface Game {
  id: string
  title: string
  description: string
  status: GameStatus
  players: PlayerCount
  emoji: string
  url?: string
}

export const games: Game[] = [
  {
    id: 'yoda-mad-libs',
    title: 'Yoda Mad Libs',
    description: 'Fill in the blanks and get your story converted to Yoda-speak. May the words be with you.',
    status: 'playable',
    players: 'Single Player',
    emoji: '🌿',
    // TODO: verify this matches your actual GitHub Pages repo name
    url: 'https://amyweitzman.github.io/yoda-mad-libs',
  },
  {
    id: 'minion-translator',
    title: 'Minion Translator',
    description: 'Type in English and get it translated into Minion language. Bello!',
    status: 'playable',
    players: 'Single Player',
    emoji: '🟡',
    // TODO: verify this matches your actual GitHub Pages repo name
    url: 'https://amyweitzman.github.io/minion-translator',
  },
  {
    id: 'real-life',
    title: 'Real Life',
    description: 'A Game of Life-inspired web app where players take turns making life decisions and watching the consequences unfold.',
    status: 'coming-soon',
    players: 'Multiplayer',
    emoji: '🌱',
  },
  {
    id: 'lemonade',
    title: 'Lemonade',
    description: 'Another take on life simulation — navigate choices, collect resources, and see how your story plays out.',
    status: 'coming-soon',
    players: 'Multiplayer',
    emoji: '🍋',
  },
  {
    id: 'stack',
    title: 'Stack',
    description: 'Players take turns playing cards to build a syntactically correct program one line at a time. First to complete it wins.',
    status: 'coming-soon',
    players: 'Multiplayer',
    emoji: '🃏',
  },
  {
    id: 'programmo',
    title: 'Programmo',
    description: 'Like Uno, but you play cards to build a syntactically correct program. Watch out for bug cards!',
    status: 'coming-soon',
    players: 'Multiplayer',
    emoji: '🖥️',
  },
  {
    id: 'cards-against-technology',
    title: 'Cards Against Technology',
    description: 'Cards Against Humanity but tech-themed. Fill in the blanks with hilariously inappropriate developer answers.',
    status: 'coming-soon',
    players: 'Multiplayer',
    emoji: '💻',
  },
  {
    id: 'cah-jeopardy',
    title: 'CAH: Jeopardy Style',
    description: 'Black cards are laid out on a Jeopardy board. The judge picks a category and players compete with their best white card.',
    status: 'coming-soon',
    players: 'Multiplayer',
    emoji: '🎭',
  },
  {
    id: 'apples-to-oranges',
    title: 'Apples to Oranges',
    description: 'Combines Apples to Apples with Disruptus. The judge picks a prompt and players respond with the best card from their hand.',
    status: 'coming-soon',
    players: 'Multiplayer',
    emoji: '🍊',
  },
  {
    id: 'balderdash',
    title: 'Balderdash',
    description: 'Make up fake definitions and vote on which one is real. The classic bluffing word game.',
    status: 'coming-soon',
    players: 'Multiplayer',
    emoji: '📝',
  },
  {
    id: 'scattergories',
    title: 'Scattergories',
    description: 'Race to fill categories with words starting with a random letter. Score points for unique answers no one else picked.',
    status: 'coming-soon',
    players: 'Multiplayer',
    emoji: '🔤',
  },
  {
    id: 'boggle',
    title: 'Boggle+',
    description: 'Standard Boggle with a twist — after finding words, players form phrases with them to earn bonus points.',
    status: 'coming-soon',
    players: 'Multiplayer',
    emoji: '🔡',
  },
  {
    id: 'sequence',
    title: 'Sequence',
    description: 'The classic strategy game reimagined with custom themes: emoji matching, noun-adjective pairs, and more.',
    status: 'coming-soon',
    players: 'Multiplayer',
    emoji: '🎯',
  },
  {
    id: 'bingo',
    title: 'Bingo',
    description: 'Bingo with custom themes — emoji matching, trivia, noun-adjective pairs. Call it, mark it, win it.',
    status: 'coming-soon',
    players: 'Multiplayer',
    emoji: '🎱',
  },
  {
    id: 'rummikub-math',
    title: 'Rummikub Math',
    description: 'Like Rummikub, but you lay tiles to form valid math equations instead of number sequences.',
    status: 'coming-soon',
    players: 'Multiplayer',
    emoji: '🔢',
  },
  {
    id: 'monopoly',
    title: 'Monopoly (Custom Themes)',
    description: 'Monopoly reimagined across four themes: Harry Potter, Family Edition, City Explorer, and Outer Space.',
    status: 'coming-soon',
    players: 'Multiplayer',
    emoji: '🎩',
  },
  {
    id: 'house-hunt',
    title: 'House Hunt',
    description: 'Race around the house to find objects fitting a category starting with a specific letter. Scattergories meets scavenger hunt.',
    status: 'coming-soon',
    players: 'Multiplayer',
    emoji: '🏠',
  },
  {
    id: 'horcrux-catch',
    title: 'Horcrux Catch',
    description: 'Fly on your broomstick, dodge magical barriers, and collect Horcruxes in this Harry Potter PyGame adventure.',
    status: 'coming-soon',
    players: 'Single Player',
    emoji: '🧹',
  },
  {
    id: 'beach-cleanup',
    title: 'Beach Clean-Up',
    description: 'Walk the beach, pick up trash, and dodge obstacles in this environmental desktop game.',
    status: 'coming-soon',
    players: 'Single Player',
    emoji: '🏖️',
  },
  {
    id: 'wikipedia-races',
    title: 'Wikipedia Races Solver',
    description: 'Give it a starting Wikipedia page and a destination — it finds the shortest click-path between them.',
    status: 'coming-soon',
    players: 'Single Player',
    emoji: '📖',
  },
]
