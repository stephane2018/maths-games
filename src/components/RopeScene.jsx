import { useRef, useState, useCallback, useEffect, useImperativeHandle, forwardRef } from 'react';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useAnimationFrame } from '../hooks/useAnimationFrame.js';
import { Team, SVGDefs } from './CharacterSVG.jsx';
import Timer from './Timer.jsx';
import { sound } from '../systems/SoundManager.js';

const VB_W = 600;
const VB_H = 280;
const CENTER_X = VB_W / 2;
const CENTER_Y = VB_H / 2 + 20;
const ROPE_Y = CENTER_Y - 2;
const ROPE_LENGTH = 420;
const ROPE_START_X = CENTER_X - ROPE_LENGTH / 2;
const ROPE_END_X = CENTER_X + ROPE_LENGTH / 2;

// Rope texture segments
const ropeTextures = [];
for (let x = ROPE_START_X + 10; x < ROPE_END_X - 10; x += 14) {
  ropeTextures.push(x);
}

const RopeScene = forwardRef(function RopeScene({
  roundTime = 60,
  blueName = 'Blue',
  redName = 'Red',
  timeRemaining,
  totalTime,
  blueScore = 0,
  redScore = 0,
  roundText = '',
}, ref) {
  const { t } = useI18n();
  const ropeGroupRef = useRef(null);
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  // Position state
  const positionRef = useRef(0);
  const targetXRef = useRef(0);
  const currentXRef = useRef(0);
  const animatingRef = useRef(false);

  // Dynamic flag / dominance tracking
  const flagRef = useRef(null);
  const glowRef = useRef(null);
  const dominanceRef = useRef('neutral');
  const prevDominanceRef = useRef('neutral');

  // Score popups
  const [popups, setPopups] = useState([]);
  const popupIdRef = useRef(0);

  // Winner overlay
  const [winnerOverlay, setWinnerOverlay] = useState(null);

  // Countdown overlay
  const [countdown, setCountdown] = useState(null);

  // Smooth interpolation loop
  useAnimationFrame((dt) => {
    if (ropeGroupRef.current && !animatingRef.current) {
      const diff = targetXRef.current - currentXRef.current;
      if (Math.abs(diff) > 0.1) {
        currentXRef.current += diff * 4 * dt;
        ropeGroupRef.current.setAttribute('transform', `translate(${currentXRef.current}, 0)`);
      }
    }
  });

  const updateFlagColor = useCallback((dominance) => {
    if (!flagRef.current) return;
    const flag = flagRef.current;
    if (dominance === 'blue') {
      flag.style.fill = '#3B82F6';
      flag.style.stroke = '#1D4ED8';
      flag.classList.remove('flag-blink');
    } else if (dominance === 'red') {
      flag.style.fill = '#EF4444';
      flag.style.stroke = '#B91C1C';
      flag.classList.remove('flag-blink');
    } else {
      flag.style.fill = '#A8A29E';
      flag.style.stroke = '#78716C';
      flag.classList.add('flag-blink');
    }
  }, []);

  const updateGlowZone = useCallback((dominance) => {
    if (!glowRef.current) return;
    const gradId = dominance === 'blue' ? 'glow-blue'
                  : dominance === 'red' ? 'glow-red'
                  : 'glow-neutral';
    glowRef.current.setAttribute('fill', `url(#${gradId})`);
    const absPos = Math.abs(positionRef.current);
    const opacity = 0.3 + (absPos / 5) * 0.7;
    glowRef.current.setAttribute('opacity', String(opacity));
  }, []);

  const triggerLeadChangeVibration = useCallback(() => {
    if (!ropeGroupRef.current || animatingRef.current) return;
    const baseX = currentXRef.current;
    animatingRef.current = true;
    sound.leadChange();

    const offsets = [0, 2, -2, 1.5, -1, 0.5, 0];
    const yOffsets = [0, 1, -1, 0.5, -0.5, 0, 0];
    let step = 0;

    const interval = setInterval(() => {
      step++;
      if (step >= offsets.length || !ropeGroupRef.current) {
        clearInterval(interval);
        if (ropeGroupRef.current) {
          ropeGroupRef.current.setAttribute('transform', `translate(${baseX}, 0)`);
        }
        animatingRef.current = false;
        return;
      }
      ropeGroupRef.current.setAttribute('transform', `translate(${baseX + offsets[step]}, ${yOffsets[step]})`);
    }, 30);
  }, []);

  const setPosition = useCallback((position) => {
    positionRef.current = Math.max(-5, Math.min(5, position));
    targetXRef.current = positionRef.current * 16;

    // Compute dominance
    const prevDom = dominanceRef.current;
    let newDom = 'neutral';
    if (position < 0) newDom = 'blue';
    else if (position > 0) newDom = 'red';
    dominanceRef.current = newDom;

    // Update flag color and glow
    updateFlagColor(newDom);
    updateGlowZone(newDom);

    // Detect lead change (blue↔red, not from/to neutral)
    if (prevDom !== 'neutral' && newDom !== 'neutral' && prevDom !== newDom) {
      triggerLeadChangeVibration();
    }
    prevDominanceRef.current = newDom;
  }, [updateFlagColor, updateGlowZone, triggerLeadChangeVibration]);

  const animatePull = useCallback((team) => {
    if (!ropeGroupRef.current) return;
    const dir = team === 'blue' ? -1 : 1;
    const overshoot = dir * 12;
    const target = targetXRef.current;

    animatingRef.current = true;
    ropeGroupRef.current.style.transition = 'transform 0.12s linear';
    currentXRef.current = target + overshoot;
    ropeGroupRef.current.setAttribute('transform', `translate(${currentXRef.current}, 0)`);

    setTimeout(() => {
      if (!ropeGroupRef.current) return;
      ropeGroupRef.current.style.transition = 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)';
      currentXRef.current = target;
      ropeGroupRef.current.setAttribute('transform', `translate(${currentXRef.current}, 0)`);
    }, 130);

    setTimeout(() => {
      if (!ropeGroupRef.current) return;
      ropeGroupRef.current.style.transition = '';
      animatingRef.current = false;
    }, 600);
  }, []);

  const showScorePopup = useCallback((team, text) => {
    const id = ++popupIdRef.current;
    setPopups(prev => [...prev, { id, team, text }]);
    setTimeout(() => {
      setPopups(prev => prev.filter(p => p.id !== id));
    }, 900);
  }, []);

  const celebrate = useCallback((team) => {
    if (!svgRef.current) return;
    const teamClass = team === 'blue' ? '.team-blue' : '.team-red';
    const loserClass = team === 'blue' ? '.team-red' : '.team-blue';
    const winners = svgRef.current.querySelector(teamClass);
    const losers = svgRef.current.querySelector(loserClass);

    if (winners) {
      winners.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
      winners.style.transform = 'translateY(-8px)';
      setTimeout(() => {
        if (winners) {
          winners.style.transform = 'translateY(0)';
          setTimeout(() => {
            if (winners) winners.style.transform = 'translateY(-5px)';
            setTimeout(() => {
              if (winners) winners.style.transform = 'translateY(0)';
            }, 200);
          }, 200);
        }
      }, 300);
    }

    if (losers) {
      losers.style.transition = 'transform 0.5s ease';
      losers.style.transform = 'translateY(4px) scaleY(0.95)';
    }
  }, []);

  const resetCamera = useCallback(() => {
    if (!svgRef.current) return;
    const blue = svgRef.current.querySelector('.team-blue');
    const red = svgRef.current.querySelector('.team-red');
    if (blue) { blue.style.transition = ''; blue.style.transform = ''; }
    if (red) { red.style.transition = ''; red.style.transform = ''; }
  }, []);

  const showCountdownOverlay = useCallback((count) => {
    setCountdown(count);
  }, []);

  const hideCountdownOverlay = useCallback(() => {
    setCountdown(null);
  }, []);

  const updateCountdownText = useCallback((count) => {
    setCountdown(count === 0 ? t('game.go') : count);
  }, [t]);

  useImperativeHandle(ref, () => ({
    setPosition,
    animatePull,
    showScorePopup,
    celebrate,
    resetCamera,
    showWinnerOverlay: (data) => setWinnerOverlay(data),
    showCountdown: showCountdownOverlay,
    hideCountdown: hideCountdownOverlay,
    updateCountdown: updateCountdownText,
  }));

  return (
    <div className="rope-arena" ref={containerRef}>
      {/* Score bar */}
      <div className="rope-score-bar-inner">
        <div className="arena-team-score">
          <span className="arena-team-name blue-name">{blueName}</span>
          <span className="arena-score blue-score">{blueScore}</span>
        </div>
        <div className="arena-center-info">
          <span className="arena-round">{roundText}</span>
          <Timer timeRemaining={timeRemaining ?? totalTime} totalTime={totalTime} />
        </div>
        <div className="arena-team-score">
          <span className="arena-score red-score">{redScore}</span>
          <span className="arena-team-name red-name">{redName}</span>
        </div>
      </div>

      {/* SVG Arena */}
      <svg ref={svgRef} viewBox={`0 0 ${VB_W} ${VB_H}`} className="rope-svg">
        <SVGDefs />
        <defs>
          <radialGradient id="glow-blue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-red" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EF4444" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow-neutral" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A8A29E" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#A8A29E" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Background */}
        <rect width={VB_W} height={VB_H} fill="#F8FAFC" rx="0" />
        {/* Dashed center line */}
        <line x1={CENTER_X} y1={30} x2={CENTER_X} y2={VB_H - 10}
          stroke="#CBD5E1" strokeWidth="2" strokeDasharray="8 6" opacity="0.7" />
        {/* Win zone indicators */}
        <rect x={0} y={30} width={60} height={VB_H - 40} fill="#3B82F6" opacity="0.04" rx="0" />
        <rect x={VB_W - 60} y={30} width={60} height={VB_H - 40} fill="#EF4444" opacity="0.04" rx="0" />
        {/* Center glow zone (fixed, outside rope group) */}
        <circle ref={glowRef} cx={CENTER_X} cy={ROPE_Y} r={50}
          fill="url(#glow-neutral)" opacity="0.3" />

        {/* Rope group (moves) */}
        <g ref={ropeGroupRef} className="rope-group">
          {/* Rope shadow */}
          <line x1={ROPE_START_X} y1={ROPE_Y + 3} x2={ROPE_END_X} y2={ROPE_Y + 3}
            stroke="#000" strokeWidth="6" strokeLinecap="round" opacity="0.08" />
          {/* Main rope */}
          <line x1={ROPE_START_X} y1={ROPE_Y} x2={ROPE_END_X} y2={ROPE_Y}
            stroke="#292524" strokeWidth="6" strokeLinecap="round" />
          {/* Rope texture */}
          {ropeTextures.map((x, i) => (
            <line key={i} x1={x} y1={ROPE_Y - 1.5} x2={x + 7} y2={ROPE_Y + 1.5}
              stroke="#78716C" strokeWidth="1.5" opacity="0.4" />
          ))}
          {/* Flag/Fanion marker */}
          <g>
            <line x1={CENTER_X} y1={ROPE_Y - 3} x2={CENTER_X} y2={ROPE_Y - 28}
              stroke="#78716C" strokeWidth="2" strokeLinecap="round" />
            <polygon
              ref={flagRef}
              points={`${CENTER_X},${ROPE_Y - 28} ${CENTER_X + 16},${ROPE_Y - 22} ${CENTER_X},${ROPE_Y - 16}`}
              className="flag-pennant flag-blink"
              style={{ fill: '#A8A29E', stroke: '#78716C' }}
              strokeWidth="1.5"
            />
            <circle cx={CENTER_X} cy={ROPE_Y} r={3} fill="#A8A29E" stroke="#78716C" strokeWidth="1" />
          </g>
          {/* Blue team */}
          <g transform={`translate(${CENTER_X - 150}, ${ROPE_Y - 2})`}>
            <Team team="blue" />
          </g>
          {/* Red team */}
          <g transform={`translate(${CENTER_X + 46}, ${ROPE_Y - 2})`}>
            <Team team="red" />
          </g>
        </g>
      </svg>

      {/* Score popups */}
      {popups.map(p => (
        <div key={p.id} className="score-popup" style={{
          left: p.team === 'blue' ? '30%' : '70%',
          top: '40%',
          transform: 'translateX(-50%)',
          color: p.team === 'blue' ? '#3B82F6' : '#EF4444',
        }}>
          {p.text}
        </div>
      ))}

      {/* Countdown overlay */}
      {countdown !== null && (
        <div className="countdown-overlay" style={{ display: 'flex' }}>
          <div className="countdown-number" style={{ animation: 'countdownPop 1s var(--ease-bounce)' }}>
            {countdown}
          </div>
        </div>
      )}

      {/* Winner overlay */}
      {winnerOverlay && (
        <div className="arena-winner-overlay">
          <div className="winner-trophy" dangerouslySetInnerHTML={{ __html: '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>' }} />
          <div className="winner-name">{winnerOverlay.winnerName}</div>
          <div className="winner-label">{t('game.winner')}</div>
          <div className="winner-stats">
            <div className="winner-stat">
              <div className="winner-stat-icon" dangerouslySetInnerHTML={{ __html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' }} />
              <div className="winner-stat-value">{String(winnerOverlay.correctAnswers)}</div>
              <div className="winner-stat-label">{t('game.correctAnswers')}</div>
            </div>
            <div className="winner-stat">
              <div className="winner-stat-icon" dangerouslySetInnerHTML={{ __html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' }} />
              <div className="winner-stat-value">{winnerOverlay.time}</div>
              <div className="winner-stat-label">{t('game.time')}</div>
            </div>
          </div>
          <button
            className="btn btn-blue winner-play-again"
            onClick={winnerOverlay.onPlayAgain}
            dangerouslySetInnerHTML={{ __html: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg> ${t('game.playAgain')}` }}
          />
        </div>
      )}
    </div>
  );
});

export default RopeScene;
