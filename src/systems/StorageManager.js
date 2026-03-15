/**
 * LocalStorage wrapper with school mode (no-save) support
 */

const STORAGE_KEY = 'math-tow-data';
const LEADERBOARD_KEY = 'math-tow-leaderboard';
const CLASSROOMS_KEY = 'math-tow-classrooms';
const TEACHER_HISTORY_KEY = 'math-tow-teacher-history';
const CUSTOM_QUESTIONS_KEY = 'math-tow-custom-questions';

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

  clearAll() {
    this.resetProfile();
    this.resetLeaderboard();
    localStorage.removeItem('math-tow-difficulty');
    localStorage.removeItem('math-tow-roundTime');
  }

  // ---- Classroom CRUD (with in-memory cache) ----

  _classroomsCache = null;

  getClassrooms() {
    if (this._classroomsCache) return this._classroomsCache;
    try {
      const raw = localStorage.getItem(CLASSROOMS_KEY);
      this._classroomsCache = raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.warn('Classrooms load failed:', e);
      this._classroomsCache = [];
    }
    return this._classroomsCache;
  }

  _saveClassrooms(classrooms) {
    this._classroomsCache = classrooms;
    try {
      localStorage.setItem(CLASSROOMS_KEY, JSON.stringify(classrooms));
    } catch (e) {
      console.warn('Classrooms save failed:', e);
    }
  }

  getClassroom(id) {
    return this.getClassrooms().find(c => c.id === id) || null;
  }

  createClassroom(name) {
    const classrooms = this.getClassrooms();
    const classroom = {
      id: crypto.randomUUID(),
      name,
      students: [],
      createdAt: Date.now(),
    };
    classrooms.push(classroom);
    this._saveClassrooms(classrooms);
    return classroom;
  }

  updateClassroom(id, updates) {
    const classrooms = this.getClassrooms();
    const idx = classrooms.findIndex(c => c.id === id);
    if (idx === -1) return null;
    Object.assign(classrooms[idx], updates);
    this._saveClassrooms(classrooms);
    return classrooms[idx];
  }

  deleteClassroom(id) {
    this._saveClassrooms(this.getClassrooms().filter(c => c.id !== id));
  }

  // ---- Student CRUD ----

  addStudent(classroomId, firstName, lastInitial) {
    const classroom = this.getClassroom(classroomId);
    if (!classroom) return null;
    const student = {
      id: crypto.randomUUID(),
      firstName,
      lastInitial,
    };
    classroom.students.push(student);
    this._saveClassrooms(this.getClassrooms());
    return student;
  }

  updateStudent(classroomId, studentId, updates) {
    const classroom = this.getClassroom(classroomId);
    if (!classroom) return null;
    const student = classroom.students.find(s => s.id === studentId);
    if (!student) return null;
    Object.assign(student, updates);
    this._saveClassrooms(this.getClassrooms());
    return student;
  }

  deleteStudent(classroomId, studentId) {
    const classroom = this.getClassroom(classroomId);
    if (!classroom) return;
    classroom.students = classroom.students.filter(s => s.id !== studentId);
    this._saveClassrooms(this.getClassrooms());
  }

  // ---- Teacher match history ----

  _historyCache = null;

  getTeacherHistory() {
    if (this._historyCache) return this._historyCache;
    try {
      const raw = localStorage.getItem(TEACHER_HISTORY_KEY);
      this._historyCache = raw ? JSON.parse(raw) : [];
    } catch (e) {
      this._historyCache = [];
    }
    return this._historyCache;
  }

  _saveHistory(history) {
    this._historyCache = history;
    try {
      localStorage.setItem(TEACHER_HISTORY_KEY, JSON.stringify(history));
    } catch (e) {
      console.warn('Teacher history save failed:', e);
    }
  }

  addTeacherMatch(record) {
    const history = this.getTeacherHistory();
    history.push(record);
    if (history.length > 500) history.splice(0, history.length - 500);
    this._saveHistory(history);
  }

  getMatchesForClassroom(classroomId) {
    return this.getTeacherHistory().filter(m => m.classroomId === classroomId);
  }

  getMatchesForStudent(studentId) {
    return this.getTeacherHistory().filter(
      m => m.blueStudentId === studentId || m.redStudentId === studentId
    );
  }

  getStudentStats(studentId) {
    const matches = this.getMatchesForStudent(studentId);
    if (matches.length === 0) return null;

    let wins = 0, total = matches.length, totalCorrect = 0, totalAnswered = 0;
    const categoryStats = {};

    for (const m of matches) {
      const isBlue = m.blueStudentId === studentId;
      const stats = isBlue ? m.blueStats : m.redStats;
      const won = (isBlue && m.winner === 'blue') || (!isBlue && m.winner === 'red');

      if (won) wins++;
      totalCorrect += stats?.correct || 0;
      totalAnswered += stats?.total || 0;

      const breakdown = stats?.categoryBreakdown || {};
      for (const [cat, data] of Object.entries(breakdown)) {
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].correct += data.correct || 0;
        categoryStats[cat].total += data.total || 0;
      }
    }

    return {
      matches: total,
      wins,
      losses: total - wins,
      winRate: total > 0 ? wins / total : 0,
      totalCorrect,
      totalAnswered,
      accuracy: totalAnswered > 0 ? totalCorrect / totalAnswered : 0,
      categoryStats,
    };
  }
  // ---- Custom questions ----

  _customQCache = null;

  getCustomQuestions() {
    if (this._customQCache) return this._customQCache;
    try {
      const raw = localStorage.getItem(CUSTOM_QUESTIONS_KEY);
      this._customQCache = raw ? JSON.parse(raw) : [];
    } catch (e) {
      this._customQCache = [];
    }
    return this._customQCache;
  }

  _saveCustomQuestions(questions) {
    this._customQCache = questions;
    try {
      localStorage.setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(questions));
    } catch (e) {
      console.warn('Custom questions save failed:', e);
    }
  }

  addCustomQuestion({ category, level, textFr, textEn, textNl, answer, tolerance, hintFr, hintEn, hintNl }) {
    const questions = this.getCustomQuestions();
    const question = {
      id: `CQ_${crypto.randomUUID().slice(0, 8)}`,
      category,
      level,
      text: { fr: textFr, en: textEn || textFr, nl: textNl || textFr },
      answer: isNaN(Number(answer)) ? answer : Number(answer),
      tolerance: tolerance || 0,
      hint: (hintFr || hintEn || hintNl)
        ? { fr: hintFr || '', en: hintEn || '', nl: hintNl || '' }
        : undefined,
      is_custom: true,
      createdAt: Date.now(),
    };
    questions.push(question);
    this._saveCustomQuestions(questions);
    return question;
  }

  updateCustomQuestion(id, updates) {
    const questions = this.getCustomQuestions();
    const q = questions.find(q => q.id === id);
    if (!q) return null;
    if (updates.textFr !== undefined) {
      q.text = { fr: updates.textFr, en: updates.textEn || updates.textFr, nl: updates.textNl || updates.textFr };
    }
    if (updates.answer !== undefined) q.answer = isNaN(Number(updates.answer)) ? updates.answer : Number(updates.answer);
    if (updates.category !== undefined) q.category = updates.category;
    if (updates.level !== undefined) q.level = updates.level;
    if (updates.tolerance !== undefined) q.tolerance = updates.tolerance;
    if (updates.hintFr !== undefined || updates.hintEn !== undefined || updates.hintNl !== undefined) {
      q.hint = { fr: updates.hintFr || '', en: updates.hintEn || '', nl: updates.hintNl || '' };
    }
    this._saveCustomQuestions(questions);
    return q;
  }

  deleteCustomQuestion(id) {
    this._saveCustomQuestions(this.getCustomQuestions().filter(q => q.id !== id));
  }

  getCustomQuestionsByCategory(category) {
    return this.getCustomQuestions().filter(q => q.category === category);
  }
}

export const storage = new StorageManager();
