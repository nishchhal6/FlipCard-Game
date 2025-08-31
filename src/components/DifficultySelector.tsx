import React from 'react';
import { AnimatedBackground } from './AnimatedBackground';

interface DifficultySelectorProps {
  selectedDifficulty: 'easy' | 'medium' | 'hard';
  onSelect: (difficulty: 'easy' | 'medium' | 'hard') => void;
  onStart: () => void;
}

export const DifficultySelector: React.FC<DifficultySelectorProps> = ({
  selectedDifficulty,
  onSelect,
  onStart
}) => {
  const difficulties = [
    { key: 'easy' as const, label: 'Easy', grid: '4×4', pairs: '8 pairs' },
    { key: 'medium' as const, label: 'Medium', grid: '6×6', pairs: '18 pairs' },
    { key: 'hard' as const, label: 'Hard', grid: '8×8', pairs: '32 pairs' }
  ];

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 max-w-sm sm:max-w-md w-full mx-4 transform hover:scale-[1.02] transition-transform duration-300">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Memory Match
          </h1>
          <p className="text-sm sm:text-base text-gray-600">Choose your difficulty level</p>
        </div>

        <div className="space-y-4 mb-8">
          {difficulties.map((diff) => (
            <button
              key={diff.key}
              onClick={() => onSelect(diff.key)}
              className={`
                w-full p-3 sm:p-4 rounded-xl border-2 transition-all duration-200 hover:scale-[1.02]
                ${selectedDifficulty === diff.key
                  ? 'border-purple-500 bg-purple-50 shadow-lg shadow-purple-200'
                  : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
                }
              `}
            >
              <div className="text-left">
                <div className="font-semibold text-gray-800 text-sm sm:text-base">{diff.label}</div>
                <div className="text-xs sm:text-sm text-gray-600">{diff.grid} • {diff.pairs}</div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={onStart}
          className="w-full py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <span className="text-sm sm:text-base">Start Game</span>
        </button>
      </div>
    </div>
  );
};