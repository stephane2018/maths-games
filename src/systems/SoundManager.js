/**
 * Sound manager using Web Audio API with procedurally generated sounds
 * No external audio files needed
 */

class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.volume = 0.5;
    this._bgMusicInterval = null;
    this._bgMusicGain = null;
    this._victoryTimeout = null;
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

  // -- Background music (looping procedural pattern) --

  startBgMusic() {
    if (!this.enabled) return;
    this.stopBgMusic();
    this._ensureContext();

    // Master gain for background music
    this._bgMusicGain = this.ctx.createGain();
    this._bgMusicGain.gain.setValueAtTime(0, this.ctx.currentTime);
    this._bgMusicGain.gain.linearRampToValueAtTime(this.volume * 0.12, this.ctx.currentTime + 1);
    this._bgMusicGain.connect(this.ctx.destination);

    // Tempo: 140 BPM → beat = 0.4286s
    const beat = 60 / 140;

    // Bass + chord pattern (C minor pentatonic vibe, upbeat & energetic)
    const bassPattern = [
      131, 131, 165, 165, 175, 175, 196, 196,  // C3 C3 E3 E3 F3 F3 G3 G3
      196, 196, 175, 175, 165, 165, 131, 131,  // G3 G3 F3 F3 E3 E3 C3 C3
    ];
    const melodyPattern = [
      523, 0, 659, 0, 784, 0, 659, 0,    // C5 . E5 . G5 . E5 .
      698, 0, 784, 0, 880, 784, 659, 0,  // F5 . G5 . A5 G5 E5 .
    ];
    const hihatPattern = [
      1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 1, 1, 0, 1, 0,
    ];

    let stepIndex = 0;

    const playStep = () => {
      if (!this.ctx || !this._bgMusicGain) return;
      const now = this.ctx.currentTime;
      const idx = stepIndex % bassPattern.length;

      // Bass note (triangle, warm)
      const bassFreq = bassPattern[idx];
      if (bassFreq) {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(bassFreq, now);
        g.gain.setValueAtTime(0.7, now);
        g.gain.exponentialRampToValueAtTime(0.01, now + beat * 0.9);
        osc.connect(g);
        g.connect(this._bgMusicGain);
        osc.start(now);
        osc.stop(now + beat);
      }

      // Melody note (sine, light)
      const melFreq = melodyPattern[idx];
      if (melFreq) {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(melFreq, now);
        g.gain.setValueAtTime(0.4, now);
        g.gain.exponentialRampToValueAtTime(0.01, now + beat * 0.7);
        osc.connect(g);
        g.connect(this._bgMusicGain);
        osc.start(now);
        osc.stop(now + beat);
      }

      // Hi-hat (noise burst)
      if (hihatPattern[idx]) {
        const bufferSize = this.ctx.sampleRate * 0.03;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.3, now);
        g.gain.exponentialRampToValueAtTime(0.01, now + 0.04);
        const hpf = this.ctx.createBiquadFilter();
        hpf.type = 'highpass';
        hpf.frequency.value = 8000;
        noise.connect(hpf);
        hpf.connect(g);
        g.connect(this._bgMusicGain);
        noise.start(now);
        noise.stop(now + 0.05);
      }

      stepIndex++;
    };

    // Play first step immediately, then loop
    playStep();
    this._bgMusicInterval = setInterval(playStep, beat * 1000);
  }

  stopBgMusic() {
    if (this._bgMusicInterval) {
      clearInterval(this._bgMusicInterval);
      this._bgMusicInterval = null;
    }
    // Fade out
    if (this._bgMusicGain && this.ctx) {
      try {
        this._bgMusicGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.5);
      } catch (e) { /* ignore */ }
      setTimeout(() => { this._bgMusicGain = null; }, 600);
    }
  }

  // -- Victory fanfare (played at match end) --

  victoryFanfare() {
    if (!this.enabled) return;
    this._ensureContext();

    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(this.volume * 0.5, this.ctx.currentTime);
    masterGain.connect(this.ctx.destination);

    let t = this.ctx.currentTime;
    const bpm = 160;
    const quarter = 60 / bpm;
    const eighth = quarter / 2;

    // Triumphant fanfare in C major
    const melody = [
      // Intro flourish
      [523, eighth, 'sine', 0.6],     // C5
      [659, eighth, 'sine', 0.6],     // E5
      [784, eighth, 'sine', 0.7],     // G5
      [1047, quarter, 'sine', 0.8],   // C6 (hold)
      // Pause
      [0, eighth],
      // Second phrase
      [784, eighth, 'sine', 0.6],     // G5
      [880, eighth, 'sine', 0.7],     // A5
      [988, eighth, 'sine', 0.7],     // B5
      [1047, quarter, 'sine', 0.8],   // C6 (hold)
      // Pause
      [0, eighth],
      // Triumphant ending
      [784, eighth, 'sine', 0.6],     // G5
      [1047, eighth, 'sine', 0.7],    // C6
      [1319, eighth, 'sine', 0.8],    // E6
      [1568, quarter * 2, 'sine', 0.9], // G6 (long hold)
    ];

    // Bass accompaniment (lower octave, triangle wave)
    const bass = [
      [131, quarter * 2, 'triangle', 0.5],  // C3
      [0, eighth],
      [196, quarter * 2, 'triangle', 0.5],  // G3
      [0, eighth],
      [131, quarter * 3, 'triangle', 0.6],  // C3 (long)
    ];

    // Play melody
    for (const note of melody) {
      if (note[0] === 0) {
        t += note[1];
        continue;
      }
      const [freq, dur, type, vol] = note;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(vol, t);
      g.gain.exponentialRampToValueAtTime(0.01, t + dur * 0.95);
      osc.connect(g);
      g.connect(masterGain);
      osc.start(t);
      osc.stop(t + dur);
      t += dur * 0.85;
    }

    // Play bass
    let tb = this.ctx.currentTime;
    for (const note of bass) {
      if (note[0] === 0) {
        tb += note[1];
        continue;
      }
      const [freq, dur, type, vol] = note;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, tb);
      g.gain.setValueAtTime(vol, tb);
      g.gain.exponentialRampToValueAtTime(0.01, tb + dur * 0.95);
      osc.connect(g);
      g.connect(masterGain);
      osc.start(tb);
      osc.stop(tb + dur);
      tb += dur * 0.85;
    }

    // Fade out master after fanfare
    const totalDur = Math.max(t, tb) - this.ctx.currentTime + 0.5;
    masterGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + totalDur);
  }

}

export const sound = new SoundManager();
