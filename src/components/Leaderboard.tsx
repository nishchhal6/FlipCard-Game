import React from 'react';
import { X, Trophy, Medal, Award } from 'lucide-react';
import { LeaderboardEntry } from '../types/game';
import { getAllScores } from '../utils/localStorage';

interface LeaderboardProps {
  onClose: () => void;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ onClose }) => {
  const scores = getAllScores();
  
  // Mock leaderboard data for demonstration
  const mockEntries: LeaderboardEntry[] = [
    { rank: 1, name: 'Alex Champion', score: 9850, moves: 12, time: '1:23', difficulty: 'hard' },
    { rank: 2, name: 'Sam Quick', score: 9720, moves: 15, time: '1:45', difficulty: 'hard' },
    { rank: 3, name: 'Jordan Fast', score: 9650, moves: 18, time: '2:01', difficulty: 'medium' },
    { rank: 4, name: 'Casey Swift', score: 9500, moves: 20, time: '2:15', difficulty: 'medium' },
    { rank: 5, name: 'Riley Sharp', score: 9300, moves: 22, time: '2:30', difficulty: 'easy' }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 2: return <Medal className="w-5 h-5 text-gray-400" />;
      case 3: return <Award className="w-5 h-5 text-orange-500" />;
      default: return <div className="w-5 h-5 flex items-center justify-center text-gray-600 font-bold text-sm">{rank}</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 w-full max-w-sm sm:max-w-lg lg:max-w-2xl max-h-[85vh] sm:max-h-[80vh] overflow-hidden mx-4">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Leaderboard</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg sm:rounded-xl transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto max-h-80 sm:max-h-96">
          {scores.length > 0 && (
            <div className="mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Your Best Scores</h3>
              <div className="space-y-2">
                {scores.slice(0, 5).map((score, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg sm:rounded-xl border border-purple-200">
                    <div className="flex items-center gap-3">
                      <div className="w-6 sm:w-8 h-6 sm:h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 text-sm sm:text-base">{score.score.toLocaleString()}</div>
                        <div className="text-xs sm:text-sm text-gray-600">{score.moves} moves • {formatTime(score.time)}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs sm:text-sm font-medium text-purple-600 capitalize">{score.difficulty}</div>
                      <div className="text-xs text-gray-500">{score.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Global Leaders</h3>
            <div className="space-y-2">
              {mockEntries.map((entry) => (
                <div key={entry.rank} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg sm:rounded-xl">
                  <div className="flex items-center gap-3">
                    {getRankIcon(entry.rank)}
                    <div>
                      <div className="font-semibold text-gray-800 text-sm sm:text-base">{entry.name}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{entry.moves} moves • {entry.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-800 text-sm sm:text-base">{entry.score.toLocaleString()}</div>
                    <div className="text-xs sm:text-sm text-gray-600 capitalize">{entry.difficulty}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};