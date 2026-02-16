import { useRef, useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useMatchState } from '../hooks/useMatchState.js';
import { QuestionEngine } from '../engine/QuestionEngine.js';
import { AIPlayer } from '../engine/AIPlayer.js';
import { CONFIG, getRoundTime } from '../engine/GameConfig.js';
import { STATES } from '../engine/MatchState.js';
import QuestionPanel from '../components/QuestionPanel.jsx';
import RopeScene from '../components/RopeScene.jsx';

export default function GameScreen() {
  const { t } = useI18n();
  const sound = useSound();
  const navigate = useNavigate();
  const location = useLocation();

  const params = location.state || {};
  const mode = params.mode || 'solo';
  const categories = params.categories || ['N1', 'N2'];
  const difficulty = params.difficulty || localStorage.getItem('math-tow-difficulty') || 'medium';
  const blueName = params.blueName || t('game.blue');
  const redName = params.redName || (mode === 'solo' ? 'AI' : t('game.red'));
  const operations = params.operations || [];
  const numRounds = params.numRounds || CONFIG.NUM_ROUNDS;
  const roundTime = getRoundTime();
  const startLevel = difficulty === 'hard' ? 3 : difficulty === 'medium' ? 2 : 1;

  // Engine instances (refs, not state)
  const blueEngineRef = useRef(null);
  const redEngineRef = useRef(null);
  const aiRef = useRef(null);

  if (!blueEngineRef.current) blueEngineRef.current = new QuestionEngine(categories, startLevel, operations);
  if (!redEngineRef.current) redEngineRef.current = new QuestionEngine(categories, startLevel, operations);
  if (!aiRef.current && mode === 'solo') aiRef.current = new AIPlayer(difficulty);

  // MatchState hook
  const { match, gameState, lastEvent, startMatch, playerScored, playerMissed } = useMatchState({ roundTime, numRounds });

  // Component refs
  const bluePanelRef = useRef(null);
  const redPanelRef = useRef(null);
  const ropeSceneRef = useRef(null);

  // Tracking
  const blueBestStreakRef = useRef(0);
  const redBestStreakRef = useRef(0);
  const blueDisabledRef = useRef(true);
  const redDisabledRef = useRef(true);

  // State for controlled props
  const [blueDisabled, setBlueDisabled] = useState(true);
  const [redDisabled, setRedDisabled] = useState(true);
  const [timerTime, setTimerTime] = useState(roundTime);
  const [blueScoreDisplay, setBlueScoreDisplay] = useState(0);
  const [redScoreDisplay, setRedScoreDisplay] = useState(0);
  const [roundText, setRoundText] = useState('');

  // Zoom
  const ZOOM_STEPS = [0.6, 0.7, 0.8, 0.85, 0.9, 0.95, 1, 1.05, 1.1, 1.15, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2];
  const [zoomIndex, setZoomIndex] = useState(ZOOM_STEPS.indexOf(1));
  const gameLayoutRef = useRef(null);

  const applyZoom = useCallback((idx) => {
    if (!gameLayoutRef.current) return;
    const z = ZOOM_STEPS[idx];
    gameLayoutRef.current.style.transform = z === 1 ? '' : `scale(${z})`;
    gameLayoutRef.current.style.transformOrigin = 'center center';
  }, []);

  useEffect(() => { applyZoom(zoomIndex); }, [zoomIndex, applyZoom]);

  const lang = useI18n().lang;

  // Give a new question to a team
  const giveNewQuestion = useCallback((team) => {
    if (match.state !== STATES.PLAYING) return;
    const engine = team === 'blue' ? blueEngineRef.current : redEngineRef.current;
    const panelRef = team === 'blue' ? bluePanelRef : redPanelRef;
    const q = engine.getNextQuestion();
    if (!q) return;

    const text = engine.getQuestionText(q);
    panelRef.current?.setQuestion(q, text);

    // AI handling
    if (mode === 'solo' && team === 'red' && aiRef.current) {
      setRedDisabled(true);
      aiRef.current.simulateAnswer(q).then((aiResult) => {
        if (match.state !== STATES.PLAYING) return;
        if (aiResult.correct) {
          handleAnswer('red', String(q.answer), q, aiResult.delay / 1000);
        } else {
          handleAnswer('red', String(aiResult.answer), q, aiResult.delay / 1000);
        }
      });
    }
  }, [match, mode]);

  // Handle answer
  const handleAnswer = useCallback((team, value, question, timeSpent) => {
    const engine = team === 'blue' ? blueEngineRef.current : redEngineRef.current;
    const panelRef = team === 'blue' ? bluePanelRef : redPanelRef;
    const result = engine.submitAnswer(question, value, timeSpent);

    if (result.correct) {
      sound.correct();
      panelRef.current?.showCorrectFeedback();
      panelRef.current?.showStreak(result.streak);
      playerScored(team);
      ropeSceneRef.current?.animatePull(team);
      ropeSceneRef.current?.showScorePopup(team, '+1');

      if (team === 'blue' && result.streak > blueBestStreakRef.current) blueBestStreakRef.current = result.streak;
      if (team === 'red' && result.streak > redBestStreakRef.current) redBestStreakRef.current = result.streak;
    } else {
      sound.wrong();
      panelRef.current?.showWrongFeedback();
      playerMissed(team);
    }

    if (match.state === STATES.PLAYING) {
      setTimeout(() => giveNewQuestion(team), result.correct ? 600 : 400);
    }
  }, [sound, playerScored, playerMissed, match, giveNewQuestion]);

  // React to match events
  useEffect(() => {
    if (!lastEvent) return;
    const { type, data } = lastEvent;

    switch (type) {
      case 'countdown': {
        setRoundText(t('game.round', { n: `${data.round}/${match.numRounds}` }));
        setTimerTime(roundTime);
        bluePanelRef.current?.clear();
        redPanelRef.current?.clear();
        bluePanelRef.current?.updateScore(0);
        redPanelRef.current?.updateScore(0);
        setBlueDisabled(true);
        setRedDisabled(true);
        ropeSceneRef.current?.showCountdown(CONFIG.COUNTDOWN_SECONDS);
        break;
      }
      case 'countdownTick': {
        if (data.count > 0) {
          sound.countdown();
        } else {
          sound.countdownGo();
        }
        ropeSceneRef.current?.updateCountdown(data.count);
        break;
      }
      case 'roundStart': {
        ropeSceneRef.current?.hideCountdown();
        ropeSceneRef.current?.resetCamera();
        setBlueDisabled(false);
        if (mode !== 'solo') setRedDisabled(false);
        giveNewQuestion('blue');
        giveNewQuestion('red');
        sound.startBgMusic();
        break;
      }
      case 'timerTick': {
        setTimerTime(data.time);
        if (data.time <= 10 && data.time > 0) {
          sound.tickUrgent();
        }
        break;
      }
      case 'ropeMove': {
        ropeSceneRef.current?.setPosition(data.position);
        setBlueScoreDisplay(match.blueRoundCorrect);
        setRedScoreDisplay(match.redRoundCorrect);
        bluePanelRef.current?.updateScore(match.blueRoundCorrect);
        redPanelRef.current?.updateScore(match.redRoundCorrect);
        break;
      }
      case 'streakBonus': {
        ropeSceneRef.current?.showScorePopup(data.team, `${data.streak}x STREAK!`);
        break;
      }
      case 'roundEnd': {
        setBlueDisabled(true);
        setRedDisabled(true);
        if (aiRef.current) aiRef.current.cancel();
        sound.stopBgMusic();

        setBlueScoreDisplay(data.blueScore);
        setRedScoreDisplay(data.redScore);
        bluePanelRef.current?.updateScore(data.blueScore);
        redPanelRef.current?.updateScore(data.redScore);

        if (data.winner === 'blue') {
          sound.win();
          ropeSceneRef.current?.celebrate('blue');
        } else if (data.winner === 'red') {
          sound.lose();
          ropeSceneRef.current?.celebrate('red');
        }

        ropeSceneRef.current?.showCountdown(0);
        const label = data.winner === 'draw' ? '=' : data.winner === 'blue' ? blueName : redName;
        ropeSceneRef.current?.updateCountdown(label);
        setTimeout(() => ropeSceneRef.current?.hideCountdown(), 2000);
        break;
      }
      case 'matchEnd': {
        if (aiRef.current) aiRef.current.destroy();
        sound.stopBgMusic();
        sound.victoryFanfare();

        const winnerName = data.winner === 'blue' ? blueName : data.winner === 'red' ? redName : null;
        const winnerCorrect = data.winner === 'blue' ? data.blueScore : data.redScore;
        const elapsed = Math.max(0, match.currentRound * roundTime - (match.timeRemaining || 0));
        const min = String(Math.floor(elapsed / 60)).padStart(2, '0');
        const sec = String(elapsed % 60).padStart(2, '0');

        ropeSceneRef.current?.showWinnerOverlay({
          winner: data.winner,
          winnerName: winnerName || '=',
          correctAnswers: winnerCorrect,
          time: `${min}:${sec}`,
          onPlayAgain: () => {
            const blueStats = blueEngineRef.current.getStats();
            const redStats = redEngineRef.current.getStats();
            navigate('/result', {
              state: {
                winner: data.winner,
                blueScore: data.blueScore,
                redScore: data.redScore,
                mode,
                blueName,
                redName,
                blueStats: { ...blueStats, bestStreak: blueBestStreakRef.current },
                redStats: { ...redStats, bestStreak: redBestStreakRef.current },
                categories,
              },
            });
          },
        });
        break;
      }
    }
  }, [lastEvent]);

  // Keyboard handling
  useEffect(() => {
    const handler = (e) => {
      if (match.state !== STATES.PLAYING) return;

      if (mode === 'versus') {
        const blueKeys = {
          '&': '1', '\u00e9': '2', '"': '3', "'": '4', '(': '5',
          '-': '6', '\u00e8': '7', '_': '8', '\u00e7': '9',
        };

        if (blueKeys[e.key]) {
          e.preventDefault();
          bluePanelRef.current?.handleKeyboard(blueKeys[e.key]);
        } else if (e.key === '\u00e0') {
          e.preventDefault();
          bluePanelRef.current?.handleKeyboard('0');
        } else if (e.key === 'Backspace' && !e.shiftKey) {
          e.preventDefault();
          bluePanelRef.current?.handleKeyboard('Backspace');
        } else if (e.key === 'Tab') {
          e.preventDefault();
          bluePanelRef.current?.handleKeyboard('Enter');
        }

        if (e.code && e.code.startsWith('Numpad')) {
          e.preventDefault();
          const num = e.code.replace('Numpad', '');
          if (num >= '0' && num <= '9') {
            redPanelRef.current?.handleKeyboard(num);
          } else if (e.code === 'NumpadEnter') {
            redPanelRef.current?.handleKeyboard('Enter');
          } else if (e.code === 'NumpadDecimal') {
            redPanelRef.current?.handleKeyboard('.');
          }
        }
        return;
      }

      // Solo mode
      if (e.key >= '0' && e.key <= '9') {
        bluePanelRef.current?.handleKeyboard(e.key);
      } else if (e.key === 'Enter') {
        bluePanelRef.current?.handleKeyboard('Enter');
      } else if (e.key === 'Backspace') {
        bluePanelRef.current?.handleKeyboard('Backspace');
      } else if (e.key === '.' || e.key === ',') {
        bluePanelRef.current?.handleKeyboard('.');
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [match, mode]);

  // Start match on mount
  useEffect(() => {
    startMatch();
    return () => {
      sound.stopBgMusic();
      match.destroy();
      if (aiRef.current) aiRef.current.destroy();
    };
  }, []);

  // Fullscreen
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  const zoomPercent = Math.round(ZOOM_STEPS[zoomIndex] * 100);

  return (
    <div className="screen">
      {/* Top bar */}
      <div className="top-bar game-top-bar">
        <div className="top-bar-left">
          <button
            className="home-btn"
            onClick={() => {
              sound.buttonClick();
              sound.stopBgMusic();
              match.destroy();
              if (aiRef.current) aiRef.current.destroy();
              navigate('/');
            }}
            dangerouslySetInnerHTML={{ __html: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> HOME' }}
          />
        </div>
        <div className="top-bar-center">
          <h1 className="game-title">{t('game.title')}</h1>
        </div>
        <div className="top-bar-right">
          <div className="lang-selector">
            <span className="lang-flag">{lang === 'fr' ? '\uD83C\uDDEB\uD83C\uDDF7' : lang === 'nl' ? '\uD83C\uDDF3\uD83C\uDDF1' : '\uD83C\uDDEC\uD83C\uDDE7'}</span>
            <span className="lang-code">{lang.toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* Game layout */}
      <div className="game-layout" ref={gameLayoutRef}>
        <QuestionPanel
          ref={bluePanelRef}
          team="blue"
          teamName={blueName}
          onAnswer={(val, q, time) => handleAnswer('blue', val, q, time)}
          disabled={blueDisabled}
        />
        <div className="rope-section">
          <RopeScene
            ref={ropeSceneRef}
            roundTime={roundTime}
            blueName={blueName}
            redName={redName}
            timeRemaining={timerTime}
            totalTime={roundTime}
            blueScore={blueScoreDisplay}
            redScore={redScoreDisplay}
            roundText={roundText}
          />
        </div>
        <QuestionPanel
          ref={redPanelRef}
          team="red"
          teamName={redName}
          onAnswer={(val, q, time) => handleAnswer('red', val, q, time)}
          disabled={redDisabled}
        />
      </div>

      {/* Bottom bar */}
      <div className="game-bottom-bar">
        <div className="bottom-bar-left">
          <div className="zoom-controls">
            <button className="zoom-btn"
              onClick={() => { sound.buttonClick(); setZoomIndex(i => Math.max(0, i - 1)); }}
              dangerouslySetInnerHTML={{ __html: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/></svg>' }}
            />
            <span className="zoom-label">{zoomPercent}%</span>
            <button className="zoom-btn"
              onClick={() => { sound.buttonClick(); setZoomIndex(i => Math.min(ZOOM_STEPS.length - 1, i + 1)); }}
              dangerouslySetInnerHTML={{ __html: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>' }}
            />
            <button className="zoom-btn"
              onClick={toggleFullscreen}
              dangerouslySetInnerHTML={{ __html: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>' }}
            />
          </div>
        </div>
        <div className="bottom-bar-center">
          <a className="social-link" href="#"
            dangerouslySetInnerHTML={{ __html: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#229ED9"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>' }}
          />
          <a className="social-link" href="#"
            dangerouslySetInnerHTML={{ __html: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>' }}
          />
        </div>
        <div className="bottom-bar-right" />
      </div>
    </div>
  );
}
