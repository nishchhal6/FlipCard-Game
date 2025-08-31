import { Score } from '../types/game';

const BEST_SCORES_KEY = 'memory-game-best-scores';
const ALL_SCORES_KEY = 'memory-game-all-scores';

export const saveBestScore = (score: Score): void => {
  const bestScores = getBestScores();
  const existingIndex = bestScores.findIndex(s => s.difficulty === score.difficulty);
  
  if (existingIndex >= 0) {
    if (score.score > bestScores[existingIndex].score) {
      bestScores[existingIndex] = score;
    }
  } else {
    bestScores.push(score);
  }
  
  localStorage.setItem(BEST_SCORES_KEY, JSON.stringify(bestScores));
};

export const getBestScores = (): Score[] => {
  const stored = localStorage.getItem(BEST_SCORES_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveScore = (score: Score): void => {
  const allScores = getAllScores();
  allScores.push(score);
  allScores.sort((a, b) => b.score - a.score);
  
  // Keep only top 50 scores
  const topScores = allScores.slice(0, 50);
  localStorage.setItem(ALL_SCORES_KEY, JSON.stringify(topScores));
};

export const getAllScores = (): Score[] => {
  const stored = localStorage.getItem(ALL_SCORES_KEY);
  return stored ? JSON.parse(stored) : [];
};