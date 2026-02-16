/**
 * Game configuration constants
 */

export const ROUND_TIME_OPTIONS = [30, 45, 60, 90, 120];

export function getRoundTime() {
  const saved = localStorage.getItem('math-tow-roundTime');
  if (saved) {
    const val = parseInt(saved, 10);
    if (ROUND_TIME_OPTIONS.includes(val)) return val;
  }
  return 60;
}

export function setRoundTime(seconds) {
  localStorage.setItem('math-tow-roundTime', String(seconds));
}

export const CONFIG = {
  // Round settings
  ROUND_TIME: 60,         // seconds per round (default, use getRoundTime() for actual)
  NUM_ROUNDS: 3,          // best of 3
  ROPE_WIN_THRESHOLD: 5,  // rope steps to win a round

  // Scoring
  POINTS_CORRECT: 1,      // rope steps per correct answer
  POINTS_STREAK_BONUS: 1, // extra step after 3 correct in a row
  STREAK_THRESHOLD: 3,    // answers needed for streak bonus

  // XP
  XP_CORRECT: 10,
  XP_WIN: 50,
  XP_STREAK_BONUS: 5,
  XP_PERFECT_ROUND: 30,

  // AI difficulty presets
  AI: {
    easy: {
      minDelay: 4000,     // ms before AI answers
      maxDelay: 8000,
      errorRate: 0.35,    // 35% chance of wrong answer
      label: 'easy',
    },
    medium: {
      minDelay: 2500,
      maxDelay: 5000,
      errorRate: 0.2,
      label: 'medium',
    },
    hard: {
      minDelay: 1500,
      maxDelay: 3000,
      errorRate: 0.08,
      label: 'hard',
    },
  },

  // Visual
  ROPE_POSITIONS: 11,     // -5 to +5 (0 = center)
  COUNTDOWN_SECONDS: 3,

  // Question levels
  LEVELS: {
    1: { label: 'easy', weight: 3 },
    2: { label: 'medium', weight: 2 },
    3: { label: 'hard', weight: 1 },
  },
};
