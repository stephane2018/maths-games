/**
 * Daily Challenge System
 * Generates a deterministic daily challenge and tracks day streaks.
 */

import { CE1D_THEMES, getCategoriesToLoad } from '../data/ce1dThemes.js';

function dateToSeed(dateStr) {
  return parseInt(dateStr.replace(/-/g, ''), 10);
}

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export function getTodayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function getDailyChallenge(dateStr) {
  const seed = dateToSeed(dateStr);
  const rng = seededRandom(seed);
  const themeIndex = Math.floor(rng() * CE1D_THEMES.length);
  const theme = CE1D_THEMES[themeIndex];
  const categories = getCategoriesToLoad([theme.id]);
  const difficulties = ['easy', 'medium', 'hard'];
  const difficulty = difficulties[Math.floor(rng() * 3)];

  return {
    date: dateStr,
    theme: theme.id,
    themeIcon: theme.icon,
    themeColor: theme.color,
    categories,
    difficulty,
    numRounds: 1,
    bonusXP: 25,
  };
}

export function getCurrentStreak(profile) {
  const daily = profile.dailyChallenge || { lastCompleted: null, streak: 0 };
  const today = getTodayStr();

  if (daily.lastCompleted === today) {
    return daily.streak;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

  if (daily.lastCompleted === yesterdayStr) {
    return daily.streak;
  }

  return 0;
}

export function updateStreak(profile) {
  const today = getTodayStr();
  const daily = profile.dailyChallenge || { lastCompleted: null, streak: 0 };

  if (daily.lastCompleted === today) {
    return { ...daily, alreadyCompleted: true };
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

  const newStreak = daily.lastCompleted === yesterdayStr ? daily.streak + 1 : 1;

  return {
    lastCompleted: today,
    streak: newStreak,
    alreadyCompleted: false,
  };
}
