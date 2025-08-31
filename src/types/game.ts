export interface Card {
  id: number;
  symbol: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameState {
  cards: Card[];
  flippedCards: number[];
  moves: number;
  matches: number;
  gameStatus: 'playing' | 'paused' | 'won' | 'idle';
  startTime: number | null;
  elapsedTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Score {
  moves: number;
  time: number;
  difficulty: string;
  date: string;
  score: number;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  moves: number;
  time: string;
  difficulty: string;
}