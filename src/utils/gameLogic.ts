import { Card, GameState, Score } from '../types/game';

const CARD_SYMBOLS = ['🌟', '🎯', '🎨', '🎭', '🎪', '🎸', '🎺', '🎻', '🎹', '🎮', '🎲', '🎳', '🏆', '🏅', '💎', '🔥', '⚡', '🌈', '🦄', '🐙'];

export const createCards = (difficulty: 'easy' | 'medium' | 'hard'): Card[] => {
  const gridSizes = { easy: 8, medium: 18, hard: 32 };
  const pairs = gridSizes[difficulty];
  const symbols = CARD_SYMBOLS.slice(0, pairs);
  
  const cards: Card[] = [];
  symbols.forEach((symbol, index) => {
    cards.push(
      { id: index * 2, symbol, isFlipped: false, isMatched: false },
      { id: index * 2 + 1, symbol, isFlipped: false, isMatched: false }
    );
  });
  
  return shuffleArray(cards);
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const calculateScore = (moves: number, time: number, difficulty: string): number => {
  const baseScore = 10000;
  const movesPenalty = moves * 10;
  const timePenalty = Math.floor(time / 1000);
  const difficultyMultiplier = { easy: 1, medium: 1.5, hard: 2 }[difficulty] || 1;
  
  return Math.max(0, Math.floor((baseScore - movesPenalty - timePenalty) * difficultyMultiplier));
};

export const formatTime = (milliseconds: number): string => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export const getGridCols = (difficulty: 'easy' | 'medium' | 'hard'): string => {
  return {
    easy: 'grid-cols-4',
    medium: 'grid-cols-6',
    hard: 'grid-cols-8'
  }[difficulty];
};