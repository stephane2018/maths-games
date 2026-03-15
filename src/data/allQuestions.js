// =============================================================================
// Global Question Import - Single source of truth for all question data
// Future SQLite migration: replace these imports with DB queries here only
// =============================================================================

// --- Numbers (N) ---
import { questions as questionsN1, generate as generateN1 } from './questions-N1.js';
import { questions as questionsN2, generate as generateN2 } from './questions-N2.js';
import { questions as questionsN3, generate as generateN3 } from './questions-N3.js';
import { questions as questionsN4, generate as generateN4 } from './questions-N4.js';
import { questions as questionsN5, generate as generateN5 } from './questions-N5.js';
import { questions as questionsN6, generate as generateN6 } from './questions-N6.js';

// --- Geometry (G) ---
import { questions as questionsG1, generate as generateG1 } from './questions-G1.js';
import { questions as questionsG2 } from './questions-G2.js';
import { questions as questionsG3 } from './questions-G3.js';
import { questions as questionsG4 } from './questions-G4.js';
import { questions as questionsG5 } from './questions-G5.js';
import { questions as questionsG6, generate as generateG6 } from './questions-G6.js';
import { questions as questionsG7, generate as generateG7 } from './questions-G7.js';

// --- Algebra (A) ---
import { questions as questionsA1 } from './questions-A1.js';
import { questions as questionsA2 } from './questions-A2.js';
import { questions as questionsA3 } from './questions-A3.js';
import { questions as questionsA4 } from './questions-A4.js';
import { questions as questionsA5 } from './questions-A5.js';
import { questions as questionsA6, generate as generateA6 } from './questions-A6.js';
import { questions as questionsA8 } from './questions-A8.js';
import { questions as questionsA9 } from './questions-A9.js';
import { questions as questionsA10 } from './questions-A10.js';

// --- Probability & Statistics (P, D) ---
import { questions as questionsP1 } from './questions-P1.js';
import { questions as questionsD1 } from './questions-D1.js';
import { questions as questionsD2, generate as generateD2 } from './questions-D2.js';

// --- Miscellaneous (M) ---
import { questions as questionsM1, generate as generateM1 } from './questions-M1.js';

// =============================================================================
// Unified question registry
// Each entry: { code, questions, generate? }
// =============================================================================

export const questionModules = {
  N1: { questions: questionsN1, generate: generateN1 },
  N2: { questions: questionsN2, generate: generateN2 },
  N3: { questions: questionsN3, generate: generateN3 },
  N4: { questions: questionsN4, generate: generateN4 },
  N5: { questions: questionsN5, generate: generateN5 },
  N6: { questions: questionsN6, generate: generateN6 },
  G1: { questions: questionsG1, generate: generateG1 },
  G2: { questions: questionsG2 },
  G3: { questions: questionsG3 },
  G4: { questions: questionsG4 },
  G5: { questions: questionsG5 },
  G6: { questions: questionsG6, generate: generateG6 },
  G7: { questions: questionsG7, generate: generateG7 },
  A1: { questions: questionsA1 },
  A2: { questions: questionsA2 },
  A3: { questions: questionsA3 },
  A4: { questions: questionsA4 },
  A5: { questions: questionsA5 },
  A6: { questions: questionsA6, generate: generateA6 },
  A8: { questions: questionsA8 },
  A9: { questions: questionsA9 },
  A10: { questions: questionsA10 },
  P1: { questions: questionsP1 },
  D1: { questions: questionsD1 },
  D2: { questions: questionsD2, generate: generateD2 },
  M1: { questions: questionsM1, generate: generateM1 },
};

export function getQuestionsForCode(code) {
  return questionModules[code]?.questions || [];
}

export function getGeneratorForCode(code) {
  return questionModules[code]?.generate || null;
}
