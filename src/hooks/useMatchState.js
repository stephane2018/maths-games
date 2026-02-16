import { useRef, useState, useCallback, useEffect } from 'react';
import { MatchState } from '../engine/MatchState.js';

export function useMatchState(options = {}) {
  const matchRef = useRef(null);
  const [gameState, setGameState] = useState(null);
  const [lastEvent, setLastEvent] = useState(null);

  // Create MatchState once
  if (!matchRef.current) {
    matchRef.current = new MatchState(options);
  }

  useEffect(() => {
    const ms = matchRef.current;

    const events = [
      'countdown', 'countdownTick', 'roundStart', 'timerTick',
      'ropeMove', 'streakBonus', 'playerMissed', 'roundEnd', 'matchEnd',
    ];

    events.forEach(evt => {
      ms.on(evt, (data) => {
        setLastEvent({ type: evt, data, timestamp: Date.now() });
        setGameState(ms.getState());
      });
    });

    return () => {
      ms.destroy();
    };
  }, []);

  const startMatch = useCallback(() => {
    matchRef.current.startMatch();
    setGameState(matchRef.current.getState());
  }, []);

  const playerScored = useCallback((team) => {
    matchRef.current.playerScored(team);
  }, []);

  const playerMissed = useCallback((team) => {
    matchRef.current.playerMissed(team);
  }, []);

  return {
    match: matchRef.current,
    gameState,
    lastEvent,
    startMatch,
    playerScored,
    playerMissed,
  };
}
