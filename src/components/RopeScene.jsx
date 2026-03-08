import { useRef, useState, useCallback, useEffect, useImperativeHandle, forwardRef } from 'react';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useAnimationFrame } from '../hooks/useAnimationFrame.js';
import gsap from 'gsap';
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
const GROUND_Y = ROPE_Y + 20;

// Character colors
const BLUE = { cap: '#2563EB', capBrim: '#1D4ED8', shirt: '#60A5FA', shirtDark: '#3B82F6', pants: '#1E3A5F', shoe: '#3B82F6', skin: '#E8B878', skinDark: '#D4A06A' };
const RED = { cap: '#DC2626', capBrim: '#991B1B', shirt: '#FB923C', shirtDark: '#F97316', pants: '#1E3A5F', shoe: '#EF4444', skin: '#E8B878', skinDark: '#D4A06A' };

// Build a sine-wave rope path using quadratic Bezier segments
function buildRopePath(startX, endX, y, time, tension) {
  const segments = 10;
  const segWidth = (endX - startX) / segments;
  const amplitude = 1.5 + tension * 2.5;
  const speed = 3 + tension * 4;
  let d = `M ${startX} ${y}`;
  for (let i = 1; i <= segments; i++) {
    const x = startX + i * segWidth;
    const ctrlX = startX + (i - 0.5) * segWidth;
    const wave = Math.sin(time * speed + i * 0.8) * amplitude;
    d += ` Q ${ctrlX} ${y + wave} ${x} ${y}`;
  }
  return d;
}

// Build a waving flag path with 3 undulations, amplitude increasing toward tip
function buildFlagPath(baseX, topY, time, lean) {
  const W = 18, H = 14;
  const n = 3;
  const dx = W / n;
  const waves = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const amp = t * 3.5;
    waves.push(Math.sin(time * 5 + i * 1.5) * amp);
  }
  // Top edge (left to right)
  let d = `M ${baseX} ${topY}`;
  for (let i = 1; i <= n; i++) {
    const x = baseX + i * dx + lean * (i / n);
    const y = topY + waves[i];
    const cpx = baseX + (i - 0.5) * dx + lean * ((i - 0.5) / n);
    const cpy = topY + (waves[i - 1] + waves[i]) / 2;
    d += ` Q ${cpx} ${cpy} ${x} ${y}`;
  }
  // Bottom edge (right to left)
  for (let i = n; i >= 0; i--) {
    const x = baseX + i * dx + lean * (i / n);
    const y = topY + H + waves[i];
    if (i === n) {
      d += ` L ${x} ${y}`;
    } else {
      const cpx = baseX + (i + 0.5) * dx + lean * ((i + 0.5) / n);
      const cpy = topY + H + (waves[i + 1] + waves[i]) / 2;
      d += ` Q ${cpx} ${cpy} ${x} ${y}`;
    }
  }
  d += ' Z';
  return d;
}

// SVG character drawn facing RIGHT, origin at hip center (0,0)
// Arms reach toward the rope (to the right)
function CharacterBody({ c }) {
  return (
    <>
      {/* Torso */}
      <rect x={-9} y={-24} width={18} height={26} rx={4} fill={c.shirt} />
      <rect x={-5} y={-24} width={10} height={26} rx={3} fill={c.shirtDark} opacity={0.2} />

      {/* Back arm — pulling pose */}
      <line x1={-5} y1={-20} x2={8} y2={-10} stroke={c.shirtDark} strokeWidth={5} strokeLinecap="round" />
      <line x1={8} y1={-10} x2={18} y2={0} stroke={c.skinDark} strokeWidth={4.5} strokeLinecap="round" />
      <circle cx={18} cy={0} r={3} fill={c.skinDark} />

      {/* Front arm — pulling pose */}
      <line x1={5} y1={-20} x2={15} y2={-8} stroke={c.shirt} strokeWidth={5} strokeLinecap="round" />
      <line x1={15} y1={-8} x2={23} y2={2} stroke={c.skin} strokeWidth={4.5} strokeLinecap="round" />
      <circle cx={23} cy={2} r={3} fill={c.skin} />

      {/* Neck */}
      <rect x={-3} y={-29} width={6} height={7} rx={2} fill={c.skin} />

      {/* Head */}
      <circle cx={0} cy={-36} r={9} fill={c.skin} />
      {/* Ear */}
      <circle cx={-8} cy={-35} r={3} fill={c.skinDark} />
      {/* Eye */}
      <ellipse cx={4} cy={-37} rx={2.5} ry={2.5} fill="white" />
      <circle cx={4.5} cy={-37} r={1.2} fill="#333" />
      {/* Eyebrow */}
      <line x1={2} y1={-40.5} x2={7} y2={-41.5} stroke="#5D4037" strokeWidth={1.2} strokeLinecap="round" />
      {/* Mouth */}
      <path d="M 1 -32 Q 3.5 -30 6 -32" stroke="#8D6E63" strokeWidth={1} fill="none" strokeLinecap="round" />

      {/* Cap */}
      <path d="M -9 -38 Q -10 -47 0 -48 Q 10 -47 9 -38 Z" fill={c.cap} />
      <rect x={-10} y={-39} width={20} height={3} rx={1.5} fill={c.capBrim} />
      <path d="M 7 -38 L 15 -36 Q 15 -34.5 14 -35 L 7 -37 Z" fill={c.capBrim} />
    </>
  );
}

function CharacterLegs({ c }) {
  return (
    <>
      {/* Back leg — bracing */}
      <line x1={-4} y1={2} x2={-12} y2={14} stroke={c.pants} strokeWidth={6} strokeLinecap="round" />
      <line x1={-12} y1={14} x2={-16} y2={25} stroke={c.pants} strokeWidth={5.5} strokeLinecap="round" />
      <ellipse cx={-18} cy={26} rx={7} ry={3} fill={c.shoe} />

      {/* Front leg — bracing */}
      <line x1={4} y1={2} x2={10} y2={14} stroke={c.pants} strokeWidth={6} strokeLinecap="round" />
      <line x1={10} y1={14} x2={6} y2={25} stroke={c.pants} strokeWidth={5.5} strokeLinecap="round" />
      <ellipse cx={4} cy={26} rx={7} ry={3} fill={c.shoe} />
    </>
  );
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
  const [visualPosition, setVisualPosition] = useState(0);
  const [dominance, setDominance] = useState('neutral');

  // Dynamic flag / dominance tracking
  const flagRef = useRef(null);
  const glowRef = useRef(null);
  const dominanceRef = useRef('neutral');
  const prevDominanceRef = useRef('neutral');

  // Animated rope refs
  const ropePathRef = useRef(null);
  const ropeShadowRef = useRef(null);
  const ropeFiberRef = useRef(null);
  const timeAccRef = useRef(0);

  // Team group refs (for translate animation)
  const blueTeamRef = useRef(null);
  const redTeamRef = useRef(null);

  // Skeletal body refs (for rotation/lean animation)
  const blueBody1Ref = useRef(null);
  const blueBody2Ref = useRef(null);
  const redBody1Ref = useRef(null);
  const redBody2Ref = useRef(null);

  // Score popups
  const [popups, setPopups] = useState([]);
  const popupIdRef = useRef(0);

  // Winner overlay
  const [winnerOverlay, setWinnerOverlay] = useState(null);

  // Countdown overlay
  const [countdown, setCountdown] = useState(null);

  // Hip Y position (characters stand on ground, hips above ground)
  const hipY = GROUND_Y - 25;

  // Animation loop: rope wave + flag wave + smooth interpolation
  useAnimationFrame((dt) => {
    timeAccRef.current += dt;
    const time = timeAccRef.current;
    const tension = Math.abs(positionRef.current) / 5;

    // Animate rope paths
    if (ropePathRef.current) {
      ropePathRef.current.setAttribute('d', buildRopePath(ROPE_START_X, ROPE_END_X, ROPE_Y, time, tension));
    }
    if (ropeShadowRef.current) {
      ropeShadowRef.current.setAttribute('d', buildRopePath(ROPE_START_X, ROPE_END_X, ROPE_Y + 3, time, tension));
    }
    if (ropeFiberRef.current) {
      ropeFiberRef.current.setAttribute('d', buildRopePath(ROPE_START_X, ROPE_END_X, ROPE_Y, time, tension));
      const dashOffset = (time * (60 + tension * 80)) % 16;
      ropeFiberRef.current.setAttribute('stroke-dashoffset', String(dashOffset));
    }

    // Animate flag
    if (flagRef.current) {
      const lean = positionRef.current > 0 ? 2 : positionRef.current < 0 ? -2 : 0;
      flagRef.current.setAttribute('d', buildFlagPath(CENTER_X, ROPE_Y - 32, time, lean));
    }

    // Smooth rope group interpolation
    if (ropeGroupRef.current && !animatingRef.current) {
      const diff = targetXRef.current - currentXRef.current;
      if (Math.abs(diff) > 0.1) {
        currentXRef.current += diff * 4 * dt;
        ropeGroupRef.current.setAttribute('transform', `translate(${currentXRef.current}, 0)`);
      }
    }
  });

  // GSAP pulling animation — heave-ho rhythm with body lean
  useEffect(() => {
    if (!blueTeamRef.current || !redTeamRef.current) return;

    const ctx = gsap.context(() => {
      // Blue team group: translate pull
      const blueTl = gsap.timeline({ repeat: -1 });
      blueTl
        .to(blueTeamRef.current, { x: -6, y: -3, duration: 0.5, ease: 'power2.in', force3D: true })
        .to(blueTeamRef.current, { x: -1, y: 1, duration: 0.35, ease: 'power2.out', force3D: true })
        .to(blueTeamRef.current, { x: 0, y: 0, duration: 0.15, ease: 'power1.out', force3D: true });

      // Red team group: translate pull (offset)
      const redTl = gsap.timeline({ repeat: -1, delay: 0.5 });
      redTl
        .to(redTeamRef.current, { x: 6, y: -3, duration: 0.5, ease: 'power2.in', force3D: true })
        .to(redTeamRef.current, { x: 1, y: 1, duration: 0.35, ease: 'power2.out', force3D: true })
        .to(redTeamRef.current, { x: 0, y: 0, duration: 0.15, ease: 'power1.out', force3D: true });

      // Blue body lean (rotation around hips)
      [blueBody1Ref, blueBody2Ref].forEach((bodyRef, i) => {
        if (!bodyRef.current) return;
        gsap.timeline({ repeat: -1, delay: i * 0.2 })
          .to(bodyRef.current, { rotation: -12, duration: 0.5, ease: 'power2.in', transformOrigin: '50% 100%' })
          .to(bodyRef.current, { rotation: 4, duration: 0.35, ease: 'power2.out', transformOrigin: '50% 100%' })
          .to(bodyRef.current, { rotation: 0, duration: 0.15, ease: 'power1.out', transformOrigin: '50% 100%' });
      });

      // Red body lean (rotation around hips, opposite direction)
      [redBody1Ref, redBody2Ref].forEach((bodyRef, i) => {
        if (!bodyRef.current) return;
        gsap.timeline({ repeat: -1, delay: 0.5 + i * 0.2 })
          .to(bodyRef.current, { rotation: 12, duration: 0.5, ease: 'power2.in', transformOrigin: '50% 100%' })
          .to(bodyRef.current, { rotation: -4, duration: 0.35, ease: 'power2.out', transformOrigin: '50% 100%' })
          .to(bodyRef.current, { rotation: 0, duration: 0.15, ease: 'power1.out', transformOrigin: '50% 100%' });
      });
    });

    return () => ctx.revert();
  }, []);

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
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - lastTime;
      if (elapsed >= 30) {
        step++;
        lastTime = currentTime;

        if (step >= offsets.length || !ropeGroupRef.current) {
          if (ropeGroupRef.current) {
            ropeGroupRef.current.setAttribute('transform', `translate(${baseX}, 0)`);
          }
          animatingRef.current = false;
          return;
        }
        ropeGroupRef.current.setAttribute('transform', `translate(${baseX + offsets[step]}, ${yOffsets[step]})`);
        requestAnimationFrame(animate);
      } else {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const setPosition = useCallback((position) => {
    positionRef.current = Math.max(-5, Math.min(5, position));
    targetXRef.current = positionRef.current * 16;
    setVisualPosition(positionRef.current);

    // Compute dominance
    const prevDom = dominanceRef.current;
    let newDom = 'neutral';
    if (position < 0) newDom = 'blue';
    else if (position > 0) newDom = 'red';
    dominanceRef.current = newDom;
    setDominance(newDom);

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
      {/* Progress bar */}
      <div className="rope-progress-bar">
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: `${50 + (visualPosition / 5) * 50}%`,
              background: visualPosition < 0 ? '#3B82F6' : visualPosition > 0 ? '#EF4444' : '#94A3B8',
              transition: 'width 0.3s ease-in-out, background 0.3s ease'
            }}
          />
          <div className="progress-center-marker" />
        </div>
      </div>
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
          {/* Rope 3D cylindrical gradient */}
          <linearGradient id="rope-gradient" x1="0" y1={ROPE_Y - 3} x2="0" y2={ROPE_Y + 3} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3C2415" />
            <stop offset="50%" stopColor="#6B4C30" />
            <stop offset="100%" stopColor="#3C2415" />
          </linearGradient>
          {/* Ground: grass to earth */}
          <linearGradient id="ground-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5A8C3A" />
            <stop offset="30%" stopColor="#4A7C30" />
            <stop offset="100%" stopColor="#5D4E37" />
          </linearGradient>
          {/* Mud pit radial */}
          <radialGradient id="mud-gradient" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#6B5B45" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#5D4E37" stopOpacity="0.15" />
          </radialGradient>
          {/* Sky */}
          <linearGradient id="sky-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="100%" stopColor="#F8FAFC" />
          </linearGradient>
        </defs>

        <rect width={VB_W} height={VB_H} fill="url(#sky-gradient)" rx="0" />

        {/* Ground terrain */}
        <g className="ground">
          <rect x={0} y={GROUND_Y} width={VB_W} height={VB_H - GROUND_Y} fill="url(#ground-gradient)" />
          {[10, 25, 40, 55, 70].map((offset, i) => (
            <line key={`grass-${i}`}
              x1={0} y1={GROUND_Y + offset}
              x2={VB_W} y2={GROUND_Y + offset}
              stroke="#3D6B28" strokeWidth="0.5" opacity="0.15" />
          ))}
          {[40, 90, 150, 210, 350, 420, 480, 530].map((x, i) => (
            <g key={`tuft-${i}`} opacity="0.35">
              <line x1={x} y1={GROUND_Y} x2={x - 3} y2={GROUND_Y - 6} stroke="#4A7C30" strokeWidth="1.5" strokeLinecap="round" />
              <line x1={x + 4} y1={GROUND_Y} x2={x + 5} y2={GROUND_Y - 8} stroke="#5A8C3A" strokeWidth="1" strokeLinecap="round" />
              <line x1={x + 8} y1={GROUND_Y} x2={x + 10} y2={GROUND_Y - 5} stroke="#4A7C30" strokeWidth="1.5" strokeLinecap="round" />
            </g>
          ))}
          <ellipse cx={CENTER_X} cy={GROUND_Y + 15} rx={70} ry={18} fill="url(#mud-gradient)" />
          <ellipse cx={CENTER_X} cy={GROUND_Y + 17} rx={45} ry={11} fill="#5D4E37" opacity="0.4" />
          <ellipse cx={CENTER_X - 20} cy={GROUND_Y + 14} rx={4} ry={2} fill="#4A3C2A" opacity="0.15" />
          <ellipse cx={CENTER_X + 15} cy={GROUND_Y + 18} rx={4} ry={2} fill="#4A3C2A" opacity="0.12" />
          <line x1={0} y1={GROUND_Y} x2={VB_W} y2={GROUND_Y} stroke="#4A7C30" strokeWidth="2" opacity="0.5" />
          <rect
            x={CENTER_X - 80} y={GROUND_Y}
            width={160} height={VB_H - GROUND_Y}
            style={{
              fill: dominance === 'blue' ? '#3B82F6' :
                    dominance === 'red' ? '#EF4444' : 'transparent',
              opacity: dominance === 'neutral' ? 0 : 0.2,
              transition: 'fill 0.4s ease, opacity 0.4s ease'
            }}
          />
        </g>

        {/* Dashed center line */}
        <line x1={CENTER_X} y1={30} x2={CENTER_X} y2={VB_H - 10}
          stroke="#94A3B8" strokeWidth="3" strokeDasharray="8 6" opacity="0.15" />
        <line x1={CENTER_X} y1={30} x2={CENTER_X} y2={VB_H - 10}
          stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.5" />
        {/* Win zone indicators */}
        <rect x={0} y={30} width={70} height={VB_H - 40} fill="#3B82F6" opacity="0.05" rx="4" />
        <rect x={VB_W - 70} y={30} width={70} height={VB_H - 40} fill="#EF4444" opacity="0.05" rx="4" />
        {/* Center glow zone */}
        <circle ref={glowRef} cx={CENTER_X} cy={ROPE_Y} r={50}
          fill="url(#glow-neutral)" opacity="0.3" />

        {/* Rope group (moves) */}
        <g ref={ropeGroupRef} className="rope-group">
          {/* Rope shadow */}
          <path ref={ropeShadowRef}
            d={`M ${ROPE_START_X} ${ROPE_Y + 3} L ${ROPE_END_X} ${ROPE_Y + 3}`}
            stroke="#000" strokeWidth="6" strokeLinecap="round" opacity="0.08" fill="none" />
          {/* Main rope */}
          <path ref={ropePathRef}
            d={`M ${ROPE_START_X} ${ROPE_Y} L ${ROPE_END_X} ${ROPE_Y}`}
            stroke="url(#rope-gradient)" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* Twisted fibers */}
          <path ref={ropeFiberRef}
            d={`M ${ROPE_START_X} ${ROPE_Y} L ${ROPE_END_X} ${ROPE_Y}`}
            stroke="#8B7355" strokeWidth="5" strokeLinecap="round" fill="none"
            strokeDasharray="4 12" opacity="0.4" />

          {/* Flag/Fanion marker */}
          <g>
            <line x1={CENTER_X} y1={ROPE_Y - 3} x2={CENTER_X} y2={ROPE_Y - 32}
              stroke="#78716C" strokeWidth="2" strokeLinecap="round" />
            <path
              ref={flagRef}
              d={buildFlagPath(CENTER_X, ROPE_Y - 32, 0, 0)}
              className="flag-pennant flag-blink"
              style={{ fill: '#A8A29E', stroke: '#78716C' }}
              strokeWidth="1.5"
            />
            <circle cx={CENTER_X} cy={ROPE_Y} r={3} fill="#A8A29E" stroke="#78716C" strokeWidth="1" />
          </g>

          {/* ===== BLUE TEAM (left, facing right) ===== */}
          <g ref={blueTeamRef} className="team-blue">
            {/* Character 1 — front puller */}
            <g transform={`translate(${CENTER_X - 75}, ${hipY})`}>
              <CharacterLegs c={BLUE} />
              <g ref={blueBody1Ref}>
                <CharacterBody c={BLUE} />
              </g>
            </g>
            {/* Character 2 — back puller (slightly smaller for depth) */}
            <g transform={`translate(${CENTER_X - 135}, ${hipY + 3}) scale(0.88)`}>
              <CharacterLegs c={BLUE} />
              <g ref={blueBody2Ref}>
                <CharacterBody c={BLUE} />
              </g>
            </g>
          </g>

          {/* ===== RED TEAM (right, facing left = mirrored) ===== */}
          <g ref={redTeamRef} className="team-red">
            {/* Character 1 — front puller */}
            <g transform={`translate(${CENTER_X + 75}, ${hipY}) scale(-1, 1)`}>
              <CharacterLegs c={RED} />
              <g ref={redBody1Ref}>
                <CharacterBody c={RED} />
              </g>
            </g>
            {/* Character 2 — back puller (slightly smaller for depth) */}
            <g transform={`translate(${CENTER_X + 135}, ${hipY + 3}) scale(-0.88, 0.88)`}>
              <CharacterLegs c={RED} />
              <g ref={redBody2Ref}>
                <CharacterBody c={RED} />
              </g>
            </g>
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
