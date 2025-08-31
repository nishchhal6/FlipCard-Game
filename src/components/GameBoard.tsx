import React from 'react';
import { GameCard } from './GameCard';
import { Card } from '../types/game';
import { getGridCols } from '../utils/gameLogic';

interface GameBoardProps {
  cards: Card[];
  flippedCards: number[];
  isDisabled: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  onCardClick: (cardId: number) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  cards,
  flippedCards,
  isDisabled,
  difficulty,
  onCardClick
}) => {
  const gridCols = getGridCols(difficulty);
  
  return (
    <div className={`
      grid ${gridCols} gap-1 sm:gap-2 lg:gap-3 w-full mx-auto px-2 sm:px-4
      ${difficulty === 'easy' ? 'max-w-sm sm:max-w-md' : ''}
      ${difficulty === 'medium' ? 'max-w-md sm:max-w-lg lg:max-w-xl' : ''}
      ${difficulty === 'hard' ? 'max-w-lg sm:max-w-xl lg:max-w-3xl' : ''}
    `}>
      {cards.map((card) => (
        <GameCard
          key={card.id}
          card={card}
          isDisabled={isDisabled}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
};