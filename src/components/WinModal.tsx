import React from 'react';
import { Trophy, Star, RotateCcw, Home } from 'lucide-react';
import { formatTime, calculateScore } from '../utils/gameLogic';

interface WinModalProps {
  moves: number;
  time: number;
  difficulty: string;
  isNewBest: boolean;
  onRestart: () => void;
  onHome: () => void;
}

export const WinModal: React.FC<WinModalProps> = ({
  moves,
  time,
  difficulty,
  isNewBest,
  onRestart,
  onHome
}) => {
  const score = calculateScore(moves, time, difficulty);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 max-w-sm sm:max-w-md w-full mx-4 animate-bounce-in">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Trophy className="w-12 sm:w-16 h-12 sm:h-16 text-yellow-500" />
              {isNewBest && (
                <Star className="w-4 sm:w-6 h-4 sm:h-6 text-yellow-400 absolute -top-1 -right-1" />
              )}
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Congratulations!</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6">You completed the {difficulty} level!</p>
          
          {isNewBest && (
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-xl p-3 mb-6">
              <p className="text-yellow-800 font-semibold text-sm sm:text-base">🎉 New Best Score!</p>
            </div>
          )}

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
              <div className="text-lg sm:text-2xl font-bold text-gray-800">{moves}</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Moves</div>
            </div>
            <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
              <div className="text-lg sm:text-2xl font-bold text-gray-800">{formatTime(time)}</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Time</div>
            </div>
            <div className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
              <div className="text-lg sm:text-2xl font-bold text-purple-600">{score.toLocaleString()}</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Score</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onRestart}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-sm sm:text-base"
            >
              <RotateCcw className="w-4 h-4" />
              Play Again
            </button>
            <button
              onClick={onHome}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-sm sm:text-base"
            >
              <Home className="w-4 h-4" />
              Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};