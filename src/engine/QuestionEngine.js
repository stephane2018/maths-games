/**
 * QuestionEngine - Picks questions, verifies answers, manages difficulty
 * Supports both SQLite (Tauri) and JS fallback (web).
 */

import { getRandomQuestion, getQuestionsByCategory, generateForOperation } from '../data/questionIndex.js';
import { isUsingDB, getRandomQuestionFromDB } from '../systems/QuestionDB.js';
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

  async getNextQuestion() {
    // If operations are specified, generate operation-specific questions
    if (this.operations && this.operations.length > 0) {
      const op = this.operations[Math.floor(Math.random() * this.operations.length)];
      const q = generateForOperation(op, this.level);
      if (q) {
        this.usedQuestions.add(q.id);
        return q;
      }
    }

    // Try SQLite first (Tauri), fall back to JS imports (web)
    if (isUsingDB()) {
      for (let i = 0; i < 6; i++) {
        const q = await getRandomQuestionFromDB(this.categories, this.level);
        if (!q) break;
        if (!this.usedQuestions.has(q.id) || i === 5) {
          this.usedQuestions.add(q.id);
          return q;
        }
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
    // Handle fraction answers (format: "a/b")
    if (typeof question.answer === 'string' && question.answer.includes('/')) {
      // Both expected answer and user answer should be fractions
      // Normalize both by simplifying to compare
      const userFraction = this.parseFraction(userAnswer);
      const expectedFraction = this.parseFraction(question.answer);

      if (!userFraction || !expectedFraction) return false;

      // Compare by cross-multiplication: a/b = c/d if a*d = b*c
      return userFraction.num * expectedFraction.den === userFraction.den * expectedFraction.num;
    }

    // Handle algebraic expressions (e.g., "3x + 7", "2a - 5b")
    if (typeof question.answer === 'string' && /[a-z]/i.test(question.answer)) {
      return this.compareAlgebraicExpressions(userAnswer, question.answer);
    }

    // Handle numeric answers
    const parsed = parseFloat(userAnswer);
    if (isNaN(parsed)) return false;

    const tolerance = question.tolerance || 0;
    return almostEqual(parsed, question.answer, tolerance);
  }

  /**
   * Compare two algebraic expressions by normalizing them
   * Examples: "3x + 7" == "7 + 3x", "2a - 5b" == "-5b + 2a"
   */
  compareAlgebraicExpressions(userAnswer, expectedAnswer) {
    if (typeof userAnswer !== 'string') return false;

    // Normalize both expressions
    const normalized1 = this.normalizeAlgebraicExpression(userAnswer.trim());
    const normalized2 = this.normalizeAlgebraicExpression(expectedAnswer.trim());

    return normalized1 === normalized2;
  }

  /**
   * Normalize an algebraic expression for comparison
   * Steps:
   * 1. Remove all spaces
   * 2. Parse terms (coefficient + variables)
   * 3. Sort terms alphabetically
   * 4. Rebuild canonical form
   */
  normalizeAlgebraicExpression(expr) {
    if (!expr) return '';

    // Normalize unicode minus (−) to ASCII minus (-)
    expr = expr.replace(/−/g, '-');

    // Remove spaces
    expr = expr.replace(/\s+/g, '');

    // Handle special case: just a number
    if (/^-?\d+\.?\d*$/.test(expr)) {
      return String(parseFloat(expr));
    }

    // Split by + and - while keeping the sign
    const terms = [];
    let currentTerm = '';
    let sign = '+';

    for (let i = 0; i < expr.length; i++) {
      const char = expr[i];

      if ((char === '+' || char === '-') && i > 0) {
        if (currentTerm) {
          terms.push(sign + currentTerm);
        }
        sign = char;
        currentTerm = '';
      } else if (char === '-' && i === 0) {
        sign = '-';
      } else if (char === '+' && i === 0) {
        // Skip leading +
      } else {
        currentTerm += char;
      }
    }

    if (currentTerm) {
      terms.push(sign + currentTerm);
    }

    // Parse and normalize each term
    const normalizedTerms = terms.map(term => this.normalizeTerm(term));

    // Sort terms alphabetically for consistent comparison
    normalizedTerms.sort();

    // Rebuild expression
    let result = normalizedTerms.join('');

    // Clean up leading +
    if (result.startsWith('+')) {
      result = result.substring(1);
    }

    return result;
  }

  /**
   * Normalize a single term like "+3x", "-2ab", "+5"
   * Returns format: sign + coefficient + sorted variables
   */
  normalizeTerm(term) {
    if (!term) return '+0';

    // Extract sign
    let sign = '+';
    if (term.startsWith('-')) {
      sign = '-';
      term = term.substring(1);
    } else if (term.startsWith('+')) {
      term = term.substring(1);
    }

    // Separate coefficient and variables
    const match = term.match(/^(-?\d*\.?\d*)(.*)$/);
    if (!match) return '+0';

    let coef = match[1];
    let vars = match[2];

    // Handle implicit coefficient
    if (coef === '' || coef === '+') {
      coef = '1';
    } else if (coef === '-') {
      coef = '1';
      sign = sign === '+' ? '-' : '+';
    }

    // Parse coefficient
    const coefNum = parseFloat(coef);
    if (isNaN(coefNum) || coefNum === 0) return ''; // Skip zero terms

    // Adjust sign
    if (coefNum < 0) {
      sign = sign === '+' ? '-' : '+';
      coef = String(Math.abs(coefNum));
    } else {
      coef = String(coefNum);
    }

    // Sort variables alphabetically (e.g., "ba" -> "ab")
    if (vars) {
      // Handle exponents: a², x³, etc.
      const varList = [];
      let i = 0;
      while (i < vars.length) {
        const v = vars[i];
        let exp = '1';

        // Check for exponent
        if (i + 1 < vars.length && (vars[i + 1] === '²' || vars[i + 1] === '³' || vars[i + 1] === '⁴')) {
          const expMap = { '²': '2', '³': '3', '⁴': '4' };
          exp = expMap[vars[i + 1]];
          i += 2;
        } else if (i + 1 < vars.length && vars[i + 1] === '^') {
          // Handle x^2 format
          exp = vars[i + 2] || '1';
          i += 3;
        } else {
          i++;
        }

        varList.push({ var: v, exp });
      }

      // Sort by variable name
      varList.sort((a, b) => a.var.localeCompare(b.var));

      // Rebuild vars string
      vars = varList.map(v => v.exp === '1' ? v.var : v.var + '^' + v.exp).join('');
    }

    return sign + coef + vars;
  }

  parseFraction(str) {
    if (typeof str !== 'string') return null;
    const match = str.match(/^(-?\d+)\/(\d+)$/);
    if (!match) return null;
    const num = parseInt(match[1], 10);
    const den = parseInt(match[2], 10);
    if (den === 0) return null;
    return { num, den };
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
