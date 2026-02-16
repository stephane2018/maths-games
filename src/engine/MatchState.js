/**
 * MatchState - Central game state machine
 * Manages rounds, timer, score, rope position
 */

import { CONFIG } from './GameConfig.js';

export const STATES = {
  IDLE: 'IDLE',
  COUNTDOWN: 'COUNTDOWN',
  PLAYING: 'PLAYING',
  ROUND_END: 'ROUND_END',
  MATCH_END: 'MATCH_END',
};

export class MatchState {
  constructor(options = {}) {
    this.numRounds = options.numRounds || CONFIG.NUM_ROUNDS;
    this.roundTime = options.roundTime || CONFIG.ROUND_TIME;
    this.winThreshold = CONFIG.ROPE_WIN_THRESHOLD;

    this.state = STATES.IDLE;
    this.currentRound = 0;
    this.timeRemaining = this.roundTime;

    // Scores
    this.blueScore = 0; // rounds won
    this.redScore = 0;
    this.blueRoundCorrect = 0;
    this.redRoundCorrect = 0;

    // Rope position: 0 = center, negative = blue winning, positive = red winning
    this.ropePosition = 0;

    // Streaks
    this.blueStreak = 0;
    this.redStreak = 0;
    this.blueBestStreak = 0;
    this.redBestStreak = 0;

    // Timer
    this._timerInterval = null;

    // Listeners
    this._listeners = {};
  }

  on(event, callback) {
    if (!this._listeners[event]) this._listeners[event] = [];
    this._listeners[event].push(callback);
  }

  _emit(event, data) {
    const cbs = this._listeners[event] || [];
    cbs.forEach(cb => cb(data));
  }

  startMatch() {
    this.currentRound = 0;
    this.blueScore = 0;
    this.redScore = 0;
    this.startRound();
  }

  startRound() {
    this.currentRound++;
    this.ropePosition = 0;
    this.blueRoundCorrect = 0;
    this.redRoundCorrect = 0;
    this.blueStreak = 0;
    this.redStreak = 0;
    this.timeRemaining = this.roundTime;

    this.state = STATES.COUNTDOWN;
    this._emit('countdown', { round: this.currentRound });

    // 3-2-1-Go countdown
    let count = CONFIG.COUNTDOWN_SECONDS;
    const countInterval = setInterval(() => {
      count--;
      this._emit('countdownTick', { count });
      if (count <= 0) {
        clearInterval(countInterval);
        this.state = STATES.PLAYING;
        this._emit('roundStart', { round: this.currentRound });
        this._startTimer();
      }
    }, 1000);
  }

  _startTimer() {
    this._stopTimer();
    this._timerInterval = setInterval(() => {
      if (this.state !== STATES.PLAYING) return;

      this.timeRemaining--;
      this._emit('timerTick', { time: this.timeRemaining });

      if (this.timeRemaining <= 0) {
        this._endRound('timeout');
      }
    }, 1000);
  }

  _stopTimer() {
    if (this._timerInterval) {
      clearInterval(this._timerInterval);
      this._timerInterval = null;
    }
  }

  // Called when a player answers correctly
  playerScored(team) {
    if (this.state !== STATES.PLAYING) return;

    if (team === 'blue') {
      this.blueRoundCorrect++;
      this.blueStreak++;
      this.redStreak = 0;
      if (this.blueStreak > this.blueBestStreak) this.blueBestStreak = this.blueStreak;

      // Move rope toward blue side (negative = blue winning)
      this.ropePosition -= CONFIG.POINTS_CORRECT;

      // Streak bonus
      if (this.blueStreak > 0 && this.blueStreak % CONFIG.STREAK_THRESHOLD === 0) {
        this.ropePosition -= CONFIG.POINTS_STREAK_BONUS;
        this._emit('streakBonus', { team: 'blue', streak: this.blueStreak });
      }
    } else {
      this.redRoundCorrect++;
      this.redStreak++;
      this.blueStreak = 0;
      if (this.redStreak > this.redBestStreak) this.redBestStreak = this.redStreak;

      this.ropePosition += CONFIG.POINTS_CORRECT;

      if (this.redStreak > 0 && this.redStreak % CONFIG.STREAK_THRESHOLD === 0) {
        this.ropePosition += CONFIG.POINTS_STREAK_BONUS;
        this._emit('streakBonus', { team: 'red', streak: this.redStreak });
      }
    }

    this._emit('ropeMove', { position: this.ropePosition, team });

    // Check for round win by threshold
    if (this.ropePosition <= -this.winThreshold) {
      this._endRound('blue');
    } else if (this.ropePosition >= this.winThreshold) {
      this._endRound('red');
    }
  }

  // Called when a player answers wrong
  playerMissed(team) {
    if (this.state !== STATES.PLAYING) return;

    if (team === 'blue') {
      this.blueStreak = 0;
    } else {
      this.redStreak = 0;
    }

    this._emit('playerMissed', { team });
  }

  _endRound(reason) {
    this._stopTimer();
    this.state = STATES.ROUND_END;

    let roundWinner;
    if (reason === 'blue' || (reason === 'timeout' && this.ropePosition < 0)) {
      roundWinner = 'blue';
      this.blueScore++;
    } else if (reason === 'red' || (reason === 'timeout' && this.ropePosition > 0)) {
      roundWinner = 'red';
      this.redScore++;
    } else {
      roundWinner = 'draw';
    }

    this._emit('roundEnd', {
      round: this.currentRound,
      winner: roundWinner,
      blueScore: this.blueScore,
      redScore: this.redScore,
      ropePosition: this.ropePosition,
    });

    // Check match end
    const roundsToWin = Math.ceil(this.numRounds / 2);
    if (this.blueScore >= roundsToWin || this.redScore >= roundsToWin || this.currentRound >= this.numRounds) {
      setTimeout(() => this._endMatch(), 2000);
    } else {
      setTimeout(() => this.startRound(), 2500);
    }
  }

  _endMatch() {
    this.state = STATES.MATCH_END;

    let winner;
    if (this.blueScore > this.redScore) winner = 'blue';
    else if (this.redScore > this.blueScore) winner = 'red';
    else winner = 'draw';

    this._emit('matchEnd', {
      winner,
      blueScore: this.blueScore,
      redScore: this.redScore,
      rounds: this.currentRound,
    });
  }

  getState() {
    return {
      state: this.state,
      round: this.currentRound,
      numRounds: this.numRounds,
      timeRemaining: this.timeRemaining,
      ropePosition: this.ropePosition,
      blueScore: this.blueScore,
      redScore: this.redScore,
      blueRoundCorrect: this.blueRoundCorrect,
      redRoundCorrect: this.redRoundCorrect,
      blueStreak: this.blueStreak,
      redStreak: this.redStreak,
    };
  }

  destroy() {
    this._stopTimer();
    this._listeners = {};
  }
}
