/**
 * LocalStorage wrapper with school mode (no-save) support
 */

const STORAGE_KEY = 'math-tow-data';
const LEADERBOARD_KEY = 'math-tow-leaderboard';

class StorageManager {
  constructor() {
    this.schoolMode = false;
    this.memoryStore = {};
  }

  init() {
    this.schoolMode = localStorage.getItem('math-tow-school') === 'true';
  }

  setSchoolMode(enabled) {
    this.schoolMode = enabled;
    localStorage.setItem('math-tow-school', String(enabled));
    if (enabled) {
      this.memoryStore = this._loadFromStorage();
    }
  }

  isSchoolMode() {
    return this.schoolMode;
  }

  save(data) {
    if (this.schoolMode) {
      this.memoryStore = data;
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Storage save failed:', e);
    }
  }

  load() {
    if (this.schoolMode) {
      return this.memoryStore;
    }
    return this._loadFromStorage();
  }

  _loadFromStorage() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.warn('Storage load failed:', e);
      return null;
    }
  }

  getProfile() {
    const data = this.load();
    if (!data) return this.defaultProfile();
    return data;
  }

  saveProfile(profile) {
    this.save(profile);
  }

  defaultProfile() {
    return {
      xp: 0,
      level: 1,
      gamesPlayed: 0,
      gamesWon: 0,
      totalCorrect: 0,
      totalAnswered: 0,
      bestStreak: 0,
      achievements: [],
      categoryStats: {},
      dailyChallenge: { lastCompleted: null, streak: 0 },
      createdAt: Date.now(),
    };
  }

  resetProfile() {
    const profile = this.defaultProfile();
    this.save(profile);
    return profile;
  }

  // Leaderboard methods
  getLeaderboard() {
    if (this.schoolMode) return [];
    try {
      const raw = localStorage.getItem(LEADERBOARD_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  addMatchRecord(record) {
    if (this.schoolMode) return;
    try {
      const board = this.getLeaderboard();
      board.push(record);
      if (board.length > 100) board.splice(0, board.length - 100);
      localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(board));
    } catch (e) {
      console.warn('Leaderboard save failed:', e);
    }
  }

  resetLeaderboard() {
    localStorage.removeItem(LEADERBOARD_KEY);
  }
}

export const storage = new StorageManager();
