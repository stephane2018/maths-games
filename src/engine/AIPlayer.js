/**
 * AIPlayer - Simulates an opponent for solo mode
 */

import { CONFIG } from './GameConfig.js';
import { randomInt } from '../utils/math.js';

export class AIPlayer {
  constructor(difficulty = 'medium') {
    this.config = CONFIG.AI[difficulty] || CONFIG.AI.medium;
    this._timeout = null;
    this._active = false;
  }

  setDifficulty(difficulty) {
    this.config = CONFIG.AI[difficulty] || CONFIG.AI.medium;
  }

  /**
   * Simulate answering a question.
   * Returns a promise that resolves with { correct: boolean, delay: number }
   */
  simulateAnswer(question) {
    return new Promise((resolve) => {
      const delay = randomInt(this.config.minDelay, this.config.maxDelay);
      const willBeCorrect = Math.random() > this.config.errorRate;

      this._active = true;
      this._timeout = setTimeout(() => {
        this._active = false;
        resolve({
          correct: willBeCorrect,
          delay,
          answer: willBeCorrect ? question.answer : this._generateWrongAnswer(question),
        });
      }, delay);
    });
  }

  _generateWrongAnswer(question) {
    const answer = question.answer;
    // Generate a plausible wrong answer
    const offsets = [-2, -1, 1, 2, 10, -10];
    const offset = offsets[randomInt(0, offsets.length - 1)];
    return answer + offset;
  }

  cancel() {
    if (this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    this._active = false;
  }

  isThinking() {
    return this._active;
  }

  destroy() {
    this.cancel();
  }
}
