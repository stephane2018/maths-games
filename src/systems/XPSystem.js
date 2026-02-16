/**
 * XP, leveling and achievement system
 */

import { storage } from './StorageManager.js';
import { CONFIG } from '../engine/GameConfig.js';

// XP needed for each level (increases each level)
function xpForLevel(level) {
  return Math.floor(100 * Math.pow(1.15, level - 1));
}

export function getLevelInfo(totalXP) {
  let level = 1;
  let xpRemaining = totalXP;

  while (level < 50) {
    const needed = xpForLevel(level);
    if (xpRemaining < needed) {
      return {
        level,
        currentXP: xpRemaining,
        neededXP: needed,
        progress: xpRemaining / needed,
      };
    }
    xpRemaining -= needed;
    level++;
  }

  return { level: 50, currentXP: xpRemaining, neededXP: 0, progress: 1 };
}

export function addXP(amount) {
  const profile = storage.getProfile();
  const oldLevel = getLevelInfo(profile.xp).level;
  profile.xp += amount;
  const newLevel = getLevelInfo(profile.xp).level;
  storage.saveProfile(profile);

  return {
    xpAdded: amount,
    totalXP: profile.xp,
    leveledUp: newLevel > oldLevel,
    newLevel,
    ...getLevelInfo(profile.xp),
  };
}

export function calculateMatchXP(stats) {
  let xp = 0;
  xp += stats.correctAnswers * CONFIG.XP_CORRECT;
  if (stats.won) xp += CONFIG.XP_WIN;
  xp += stats.streakBonuses * CONFIG.XP_STREAK_BONUS;
  if (stats.accuracy === 1 && stats.totalAnswered > 0) xp += CONFIG.XP_PERFECT_ROUND;
  return xp;
}

// Achievement definitions
const ACHIEVEMENT_DEFS = [
  { id: 'firstWin', check: (p) => p.gamesWon >= 1 },
  { id: 'streak5', check: (p) => p.bestStreak >= 5 },
  { id: 'streak10', check: (p) => p.bestStreak >= 10 },
  { id: 'speedster', check: (p, s) => s && s.fastestAnswer && s.fastestAnswer < 3 },
  { id: 'allCategories', check: (p) => {
    const cats = Object.keys(p.categoryStats || {});
    return cats.length >= 10;
  }},
  { id: 'level10', check: (p) => getLevelInfo(p.xp).level >= 10 },
  { id: 'level25', check: (p) => getLevelInfo(p.xp).level >= 25 },
  { id: 'perfect', check: (p, s) => s && s.accuracy === 1 && s.totalAnswered >= 5 },
  { id: 'games10', check: (p) => p.gamesPlayed >= 10 },
  { id: 'games50', check: (p) => p.gamesPlayed >= 50 },
];

export function getAchievementDefs() {
  return ACHIEVEMENT_DEFS;
}

export function getAchievementIcons() {
  return {
    firstWin: '🏆',
    streak5: '🔥',
    streak10: '💥',
    speedster: '⚡',
    allCategories: '🌟',
    level10: '🎓',
    level25: '👑',
    perfect: '💎',
    games10: '🎮',
    games50: '🎯',
  };
}

export function getAchievementProgress(profile) {
  const level = getLevelInfo(profile.xp).level;
  const catCount = Object.keys(profile.categoryStats || {}).length;

  return {
    firstWin:      { current: Math.min(profile.gamesWon, 1), target: 1 },
    streak5:       { current: Math.min(profile.bestStreak, 5), target: 5 },
    streak10:      { current: Math.min(profile.bestStreak, 10), target: 10 },
    speedster:     { current: null, target: null, isBinary: true, label: '< 3s' },
    allCategories: { current: Math.min(catCount, 10), target: 10 },
    level10:       { current: Math.min(level, 10), target: 10 },
    level25:       { current: Math.min(level, 25), target: 25 },
    perfect:       { current: null, target: null, isBinary: true, label: '100%' },
    games10:       { current: Math.min(profile.gamesPlayed, 10), target: 10 },
    games50:       { current: Math.min(profile.gamesPlayed, 50), target: 50 },
  };
}

export function checkAchievements(matchStats = null) {
  const profile = storage.getProfile();
  const newlyUnlocked = [];

  for (const def of ACHIEVEMENT_DEFS) {
    if (profile.achievements.includes(def.id)) continue;
    if (def.check(profile, matchStats)) {
      profile.achievements.push(def.id);
      newlyUnlocked.push(def.id);
    }
  }

  if (newlyUnlocked.length > 0) {
    storage.saveProfile(profile);
  }

  return newlyUnlocked;
}

export function updateProfileAfterMatch(matchStats) {
  const profile = storage.getProfile();
  profile.gamesPlayed++;
  if (matchStats.won) profile.gamesWon++;
  profile.totalCorrect += matchStats.correctAnswers;
  profile.totalAnswered += matchStats.totalAnswered;
  if (matchStats.bestStreak > profile.bestStreak) {
    profile.bestStreak = matchStats.bestStreak;
  }

  // Update category stats
  for (const [cat, stats] of Object.entries(matchStats.categoryBreakdown || {})) {
    if (!profile.categoryStats[cat]) {
      profile.categoryStats[cat] = { correct: 0, total: 0 };
    }
    profile.categoryStats[cat].correct += stats.correct;
    profile.categoryStats[cat].total += stats.total;
  }

  storage.saveProfile(profile);
  return profile;
}
