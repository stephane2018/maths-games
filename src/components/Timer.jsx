import { useRef, useEffect } from 'react';
import { formatTime } from '../utils/math.js';

const CIRCUMFERENCE = 2 * Math.PI * 22;

export default function Timer({ timeRemaining, totalTime }) {
  const containerRef = useRef(null);
  const circleRef = useRef(null);

  const progress = 1 - (timeRemaining / totalTime);
  const offset = progress * CIRCUMFERENCE;

  let strokeColor = '#3B82F6';
  let isUrgent = false;
  if (timeRemaining <= 10) {
    strokeColor = '#EF4444';
    isUrgent = true;
  } else if (timeRemaining <= 20) {
    strokeColor = '#F59E0B';
  }

  // Pulse animation for last 10 seconds
  useEffect(() => {
    if (timeRemaining <= 10 && containerRef.current) {
      containerRef.current.style.animation = 'timerPulse 1s ease-in-out';
      const timeout = setTimeout(() => {
        if (containerRef.current) containerRef.current.style.animation = '';
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [timeRemaining]);

  return (
    <div
      ref={containerRef}
      className={`timer-display ${isUrgent ? 'timer-urgent' : ''}`}
    >
      <svg viewBox="0 0 50 50" width="50" height="50">
        <circle cx="25" cy="25" r="22" fill="none" stroke="#E2E8F0" strokeWidth="4" />
        <circle
          ref={circleRef}
          cx="25" cy="25" r="22"
          fill="none"
          stroke={strokeColor}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          transform="rotate(-90 25 25)"
          style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.3s ease' }}
        />
      </svg>
      <span
        className="timer-text"
        style={{ fontWeight: '900', fontVariantNumeric: 'tabular-nums', fontSize: '1rem' }}
      >
        {formatTime(timeRemaining)}
      </span>
    </div>
  );
}
