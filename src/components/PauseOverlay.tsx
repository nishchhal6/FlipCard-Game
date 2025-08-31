import React from 'react';
import { Play } from 'lucide-react';

interface PauseOverlayProps {
  onResume: () => void;
}

export const PauseOverlay: React.FC<PauseOverlayProps> = ({ onResume }) => {
  return (
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-40 rounded-xl sm:rounded-2xl">
      <div className="text-center">
        <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4">PAUSED</div>
        <button
          onClick={onResume}
          className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.05] text-sm sm:text-base"
        >
          <Play className="w-5 h-5" />
          Resume Game
        </button>
      </div>
    </div>
  );
};