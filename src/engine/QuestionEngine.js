/**
 * QuestionEngine - Picks questions, verifies answers, manages difficulty
 */

import { getRandomQuestion, getQuestionsByCategory, generateForOperation } from '../data/questionIndex.js';
import { getLang } from '../i18n/i18n.js';
import { almostEqual } from '../utils/math.js';

export class QuestionEngine {
  constructor(categories = [], startLevel = 1, operations = []) {
    this.categories = categories;
    this.operations = operations;
    this.level = startLevel;
    this.usedQuestions = new Set();
    this.streak = 0;
    this.totalCorrect = 0;
    this.totalAnswered = 0;
    this.categoryBreakdown = {};
    this.fastestAnswer = Infinity;

    // Init category breakdown
    for (const cat of categories) {
      this.categoryBreakdown[cat] = { correct: 0, total: 0 };
    }
  }

  getNextQuestion() {
    // If operations are specified, generate operation-specific questions
    if (this.operations && this.operations.length > 0) {
      const op = this.operations[Math.floor(Math.random() * this.operations.length)];
      const q = generateForOperation(op, this.level);
      if (q) {
        this.usedQuestions.add(q.id);
        return q;
      }
    }

    const q = getRandomQuestion(this.categories, this.level);
    if (!q) return null;

    // Track used questions to avoid repeats
    if (this.usedQuestions.has(q.id)) {
      // Try again a few times before allowing repeat
      for (let i = 0; i < 5; i++) {
        const q2 = getRandomQuestion(this.categories, this.level);
        if (q2 && !this.usedQuestions.has(q2.id)) {
          this.usedQuestions.add(q2.id);
          return q2;
        }
      }
    }

    this.usedQuestions.add(q.id);
    return q;
  }

  getQuestionText(question) {
    const lang = getLang();
    if (typeof question.text === 'string') return question.text;
    return question.text[lang] || question.text.fr || '';
  }

  getHintText(question) {
    if (!question.hint) return '';
    const lang = getLang();
    if (typeof question.hint === 'string') return question.hint;
    return question.hint[lang] || question.hint.fr || '';
  }

  checkAnswer(question, userAnswer) {
    const parsed = parseFloat(userAnswer);
    if (isNaN(parsed)) return false;

    const tolerance = question.tolerance || 0;
    return almostEqual(parsed, question.answer, tolerance);
  }

  submitAnswer(question, userAnswer, timeSpent) {
    this.totalAnswered++;
    const isCorrect = this.checkAnswer(question, userAnswer);

    if (question.category && this.categoryBreakdown[question.category]) {
      this.categoryBreakdown[question.category].total++;
      if (isCorrect) this.categoryBreakdown[question.category].correct++;
    }

    if (isCorrect) {
      this.totalCorrect++;
      this.streak++;

      if (timeSpent < this.fastestAnswer) {
        this.fastestAnswer = timeSpent;
      }

      // Adaptive difficulty: increase after 3 correct in a row
      if (this.streak >= 5 && this.level < 3) {
        this.level = 3;
      } else if (this.streak >= 3 && this.level < 2) {
        this.level = 2;
      }
    } else {
      this.streak = 0;
      // Lower difficulty after wrong answer
      if (this.level > 1) {
        this.level--;
      }
    }

    return {
      correct: isCorrect,
      streak: this.streak,
      correctAnswer: question.answer,
    };
  }

  getStats() {
    return {
      totalCorrect: this.totalCorrect,
      totalAnswered: this.totalAnswered,
      accuracy: this.totalAnswered > 0 ? this.totalCorrect / this.totalAnswered : 0,
      bestStreak: this.streak, // Current streak (max tracked externally)
      fastestAnswer: this.fastestAnswer === Infinity ? null : this.fastestAnswer,
      categoryBreakdown: { ...this.categoryBreakdown },
    };
  }

  reset() {
    this.usedQuestions.clear();
    this.streak = 0;
    this.totalCorrect = 0;
    this.totalAnswered = 0;
    this.level = 1;
    this.fastestAnswer = Infinity;
    for (const cat of this.categories) {
      this.categoryBreakdown[cat] = { correct: 0, total: 0 };
    }
  }
}
