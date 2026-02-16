import { useRef } from 'react';
import { QuestionEngine } from '../engine/QuestionEngine.js';

export function useQuestionEngine(categories = [], startLevel = 1, operations = []) {
  const engineRef = useRef(null);

  if (!engineRef.current) {
    engineRef.current = new QuestionEngine(categories, startLevel, operations);
  }

  return engineRef.current;
}
