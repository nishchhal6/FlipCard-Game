import React from 'react';
import { Play, Pause, RotateCcw, Trophy } from 'lucide-react';
import { formatTime } from '../utils/gameLogic';

interface GameHeaderProps {
  moves: number;
  elapsedTime: number;
  gameStatus: 'playing' | 'paused' | 'won' | 'idle';
  onPause: () => void;
  onResume: () => void;
  onRestart: () => void;
  onShowLeaderboard: () => void;
  difficulty: string;
}

export const GameHeader: React.FC<GameHeaderProps> = ({
  moves,
  elapsedTime,
  gameStatus,
  onPause,
  onResume,
  onRestart,
  onShowLeaderboard,
  difficulty
}) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg border border-white/20 p-3 sm:p-4 lg:p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">{moves}</div>
            <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Moves</div>
          </div>
          
          <div className="text-center">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">{formatTime(elapsedTime)}</div>
            <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Time</div>
          </div>
          
          <div className="text-center">
            <div className="text-base sm:text-lg lg:text-xl font-semibold text-purple-600 capitalize">{difficulty}</div>
            <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Level</div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {gameStatus === 'playing' && (
            <button
              onClick={onPause}
              className="p-2 sm:p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.05]"
            >
              <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}
          
          {gameStatus === 'paused' && (
            <button
              onClick={onResume}
              className="p-2 sm:p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.05]"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}
          
          <button
            onClick={onRestart}
            className="p-2 sm:p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.05]"
          >
            <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <button
            onClick={onShowLeaderboard}
            className="p-2 sm:p-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.05]"
          >
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};