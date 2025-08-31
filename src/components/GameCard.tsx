import React from 'react';
import { Card } from '../types/game';

interface GameCardProps {
  card: Card;
  isDisabled: boolean;
  onClick: (cardId: number) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ card, isDisabled, onClick }) => {
  const handleClick = () => {
    if (!isDisabled && !card.isFlipped && !card.isMatched) {
      onClick(card.id);
    }
  };

  return (
    <div 
      className="relative aspect-square cursor-pointer select-none group touch-manipulation"
      onClick={handleClick}
    >
      <div className={`
        relative w-full h-full transition-transform duration-500 transform-style-3d
        ${card.isFlipped || card.isMatched ? 'rotate-y-180' : ''}
        ${isDisabled && !card.isFlipped && !card.isMatched ? 'cursor-not-allowed' : ''}
      `}>
        {/* Card Back */}
        <div className={`
          absolute inset-0 w-full h-full backface-hidden rounded-lg sm:rounded-xl border-2
          bg-gradient-to-br from-purple-500 to-blue-600 border-purple-300
          flex items-center justify-center shadow-lg
          ${!card.isFlipped && !card.isMatched ? 'group-hover:shadow-xl group-hover:scale-[1.03]' : ''}
          transition-all duration-300
        `}>
          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-white/40 rounded"></div>
          </div>
        </div>

        {/* Card Front */}
        <div className={`
          absolute inset-0 w-full h-full backface-hidden rounded-lg sm:rounded-xl border-2 rotate-y-180
          ${card.isMatched 
            ? 'bg-gradient-to-br from-green-400 to-emerald-500 border-green-300 shadow-lg shadow-green-200' 
            : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg'
          }
          flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl
          transition-all duration-300
        `}>
          <span className={`
            transform transition-transform duration-300
            ${card.isMatched ? 'scale-105 sm:scale-110' : ''}
          `}>
            {card.symbol}
          </span>
        </div>
      </div>
    </div>
  );
};