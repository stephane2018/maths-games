/**
 * Sound manager using Web Audio API with procedurally generated sounds
 * No external audio files needed
 */

class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.volume = 0.5;
  }

  _ensureContext() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    localStorage.setItem('math-tow-sound', String(enabled));
  }

  isEnabled() {
    return this.enabled;
  }

  init() {
    this.enabled = localStorage.getItem('math-tow-sound') !== 'false';
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
  }

  _playTone(frequency, duration, type = 'sine', volumeMult = 1) {
    if (!this.enabled) return;
    this._ensureContext();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);

    gain.gain.setValueAtTime(this.volume * volumeMult, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  _playNotes(notes) {
    if (!this.enabled) return;
    this._ensureContext();

    let time = this.ctx.currentTime;
    for (const [freq, dur, type = 'sine', vol = 1] of notes) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, time);
      gain.gain.setValueAtTime(this.volume * vol, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + dur);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(time);
      osc.stop(time + dur);

      time += dur * 0.8;
    }
  }

  // -- Sound effects --

  correct() {
    this._playNotes([
      [523, 0.1, 'sine', 0.6],  // C5
      [659, 0.1, 'sine', 0.6],  // E5
      [784, 0.15, 'sine', 0.8], // G5
    ]);
  }

  wrong() {
    this._playNotes([
      [300, 0.15, 'sawtooth', 0.3],
      [250, 0.2, 'sawtooth', 0.3],
    ]);
  }

  tick() {
    this._playTone(800, 0.05, 'sine', 0.2);
  }

  tickUrgent() {
    this._playTone(1000, 0.08, 'square', 0.3);
  }

  buttonClick() {
    this._playTone(600, 0.04, 'sine', 0.15);
  }

  countdown() {
    this._playTone(440, 0.2, 'sine', 0.4);
  }

  countdownGo() {
    this._playNotes([
      [523, 0.1, 'sine', 0.6],
      [784, 0.2, 'sine', 0.8],
    ]);
  }

  win() {
    this._playNotes([
      [523, 0.15, 'sine', 0.6],
      [659, 0.15, 'sine', 0.6],
      [784, 0.15, 'sine', 0.7],
      [1047, 0.3, 'sine', 0.9],
    ]);
  }

  lose() {
    this._playNotes([
      [400, 0.2, 'sawtooth', 0.3],
      [350, 0.2, 'sawtooth', 0.3],
      [300, 0.3, 'sawtooth', 0.25],
    ]);
  }

  levelUp() {
    this._playNotes([
      [523, 0.1, 'sine', 0.5],
      [659, 0.1, 'sine', 0.5],
      [784, 0.1, 'sine', 0.6],
      [1047, 0.1, 'sine', 0.7],
      [1319, 0.2, 'sine', 0.8],
    ]);
  }

  achievement() {
    this._playNotes([
      [784, 0.12, 'sine', 0.5],
      [988, 0.12, 'sine', 0.6],
      [1175, 0.12, 'sine', 0.7],
      [1568, 0.25, 'sine', 0.8],
    ]);
  }

  ropePull() {
    this._playTone(200, 0.15, 'triangle', 0.3);
  }

  welcome() {
    this._playNotes([
      [523, 0.12, 'sine', 0.5],   // C5
      [587, 0.12, 'sine', 0.5],   // D5
      [659, 0.12, 'sine', 0.6],   // E5
      [784, 0.12, 'sine', 0.6],   // G5
      [880, 0.12, 'sine', 0.7],   // A5
      [1047, 0.25, 'sine', 0.8],  // C6
    ]);
  }

  gameOver() {
    this._playNotes([
      [220, 0.15, 'triangle', 0.5],  // A3
      [330, 0.15, 'sine', 0.5],      // E4
      [440, 0.15, 'sine', 0.6],      // A4
      [554, 0.2, 'sine', 0.6],       // C#5
      [660, 0.3, 'sine', 0.7],       // E5
    ]);
  }

}

export const sound = new SoundManager();
