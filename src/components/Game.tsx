import React, { useState, useEffect, useCallback } from 'react';
import { GameState, Card, Score } from '../types/game';
import { createCards, calculateScore, formatTime } from '../utils/gameLogic';
import { saveBestScore, saveScore, getBestScores } from '../utils/localStorage';
import { GameHeader } from './GameHeader';
import { GameBoard } from './GameBoard';
import { WinModal } from './WinModal';
import { PauseOverlay } from './PauseOverlay';
import { Leaderboard } from './Leaderboard';

interface GameProps {
  difficulty: 'easy' | 'medium' | 'hard';
  onHome: () => void;
}

export const Game: React.FC<GameProps> = ({ difficulty, onHome }) => {
  const [gameState, setGameState] = useState<GameState>({
    cards: createCards(difficulty),
    flippedCards: [],
    moves: 0,
    matches: 0,
    gameStatus: 'playing',
    startTime: Date.now(),
    elapsedTime: 0,
    difficulty
  });

  const [showWinModal, setShowWinModal] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [isNewBest, setIsNewBest] = useState(false);

  const totalPairs = gameState.cards.length / 2;

  // Timer effect
  useEffect(() => {
    let interval: number;
    
    if (gameState.gameStatus === 'playing' && gameState.startTime) {
      interval = setInterval(() => {
        setGameState(prev => ({
          ...prev,
          elapsedTime: Date.now() - (prev.startTime || 0)
        }));
      }, 100);
    }

    return () => clearInterval(interval);
  }, [gameState.gameStatus, gameState.startTime]);

  // Check for win condition
  useEffect(() => {
    if (gameState.matches === totalPairs && gameState.gameStatus === 'playing') {
      setGameState(prev => ({ ...prev, gameStatus: 'won' }));
      
      const finalScore: Score = {
        moves: gameState.moves,
        time: gameState.elapsedTime,
        difficulty,
        date: new Date().toLocaleDateString(),
        score: calculateScore(gameState.moves, gameState.elapsedTime, difficulty)
      };

      // Check if it's a new best score
      const bestScores = getBestScores();
      const currentBest = bestScores.find(s => s.difficulty === difficulty);
      const isNewBestScore = !currentBest || finalScore.score > currentBest.score;
      
      setIsNewBest(isNewBestScore);
      saveBestScore(finalScore);
      saveScore(finalScore);
      setShowWinModal(true);
    }
  }, [gameState.matches, totalPairs, gameState.moves, gameState.elapsedTime, difficulty, gameState.gameStatus]);

  const handleCardClick = useCallback((cardId: number) => {
    if (gameState.flippedCards.length >= 2 || gameState.gameStatus !== 'playing') return;

    setGameState(prev => {
      const card = prev.cards.find(c => c.id === cardId);
      if (!card || card.isFlipped || card.isMatched) return prev;

      const newFlippedCards = [...prev.flippedCards, cardId];
      const newCards = prev.cards.map(c => 
        c.id === cardId ? { ...c, isFlipped: true } : c
      );

      let newMoves = prev.moves;
      let newMatches = prev.matches;

      // Check for match when two cards are flipped
      if (newFlippedCards.length === 2) {
        newMoves += 1;
        const [firstId, secondId] = newFlippedCards;
        const firstCard = newCards.find(c => c.id === firstId);
        const secondCard = newCards.find(c => c.id === secondId);

        if (firstCard && secondCard && firstCard.symbol === secondCard.symbol) {
          // Match found
          newMatches += 1;
          newCards.forEach(c => {
            if (c.id === firstId || c.id === secondId) {
              c.isMatched = true;
            }
          });
          
          return {
            ...prev,
            cards: newCards,
            flippedCards: [],
            moves: newMoves,
            matches: newMatches
          };
        } else {
          // No match - flip cards back after delay
          setTimeout(() => {
            setGameState(current => ({
              ...current,
              cards: current.cards.map(c => 
                (c.id === firstId || c.id === secondId) ? { ...c, isFlipped: false } : c
              ),
              flippedCards: []
            }));
          }, 1000);
        }
      }

      return {
        ...prev,
        cards: newCards,
        flippedCards: newFlippedCards,
        moves: newMoves,
        matches: newMatches
      };
    });
  }, [gameState.flippedCards.length, gameState.gameStatus]);

  const handlePause = () => {
    setGameState(prev => ({ ...prev, gameStatus: 'paused' }));
  };

  const handleResume = () => {
    setGameState(prev => ({ ...prev, gameStatus: 'playing' }));
  };

  const handleRestart = () => {
    setGameState({
      cards: createCards(difficulty),
      flippedCards: [],
      moves: 0,
      matches: 0,
      gameStatus: 'playing',
      startTime: Date.now(),
      elapsedTime: 0,
      difficulty
    });
    setShowWinModal(false);
  };

  const isDisabled = gameState.flippedCards.length >= 2 || gameState.gameStatus !== 'playing';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 p-2 sm:p-4">
      <div className="max-w-7xl mx-auto">
        <GameHeader
          moves={gameState.moves}
          elapsedTime={gameState.elapsedTime}
          gameStatus={gameState.gameStatus}
          onPause={handlePause}
          onResume={handleResume}
          onRestart={handleRestart}
          onShowLeaderboard={() => setShowLeaderboard(true)}
          difficulty={difficulty}
        />

        <div className="relative mt-4 sm:mt-6">
          <GameBoard
            cards={gameState.cards}
            flippedCards={gameState.flippedCards}
            isDisabled={isDisabled}
            difficulty={difficulty}
            onCardClick={handleCardClick}
          />

          {gameState.gameStatus === 'paused' && (
            <PauseOverlay onResume={handleResume} />
          )}
        </div>
      </div>

      {showWinModal && (
        <WinModal
          moves={gameState.moves}
          time={gameState.elapsedTime}
          difficulty={difficulty}
          isNewBest={isNewBest}
          onRestart={handleRestart}
          onHome={onHome}
        />
      )}

      {showLeaderboard && (
        <Leaderboard onClose={() => setShowLeaderboard(false)} />
      )}
    </div>
  );
};