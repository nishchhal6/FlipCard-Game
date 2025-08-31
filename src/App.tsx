import React, { useState } from 'react';
import { DifficultySelector } from './components/DifficultySelector';
import { Game } from './components/Game';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleBackToHome = () => {
    setGameStarted(false);
  };

  if (gameStarted) {
    return <Game difficulty={selectedDifficulty} onHome={handleBackToHome} />;
  }

  return (
    <DifficultySelector
      selectedDifficulty={selectedDifficulty}
      onSelect={setSelectedDifficulty}
      onStart={handleStartGame}
    />
  );
}

export default App;