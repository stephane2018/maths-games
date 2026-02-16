import { useRef, useImperativeHandle, forwardRef, useState, useCallback, useEffect } from 'react';
import { useI18n } from '../contexts/I18nContext.jsx';
import Numpad from './Numpad.jsx';

const QuestionPanel = forwardRef(function QuestionPanel({
  team = 'blue',
  teamName = '',
  onAnswer,
  onHintRequest,
  disabled = false,
  showHintButton = true,
}, ref) {
  const { t } = useI18n();
  const numpadRef = useRef(null);
  const [questionText, setQuestionText] = useState('...');
  const [score, setScore] = useState(0);
  const [streakText, setStreakText] = useState('');
  const [streakVisible, setStreakVisible] = useState(false);
  const [questionAnim, setQuestionAnim] = useState(false);
  const [questionFeedback, setQuestionFeedback] = useState(null); // 'correct' | 'wrong' | null
  const [hintText, setHintText] = useState('');
  const [hintUsed, setHintUsed] = useState(false);
  const currentQuestionRef = useRef(null);
  const questionStartRef = useRef(0);

  const handleSubmit = useCallback((value) => {
    if (!currentQuestionRef.current) return;
    const timeSpent = (Date.now() - questionStartRef.current) / 1000;
    onAnswer?.(value, currentQuestionRef.current, timeSpent);
  }, [onAnswer]);

  const setQuestion = useCallback((question, text) => {
    currentQuestionRef.current = question;
    questionStartRef.current = Date.now();
    numpadRef.current?.clear();
    setQuestionText(text);
    setHintText('');
    setHintUsed(false);
    // Trigger animation
    setQuestionAnim(false);
    requestAnimationFrame(() => setQuestionAnim(true));
  }, []);

  const showCorrectFeedback = useCallback(() => {
    numpadRef.current?.showCorrect();
    setQuestionFeedback('correct');
    setTimeout(() => setQuestionFeedback(null), 500);
  }, []);

  const showWrongFeedback = useCallback(() => {
    numpadRef.current?.showWrong();
    setQuestionFeedback('wrong');
    setTimeout(() => setQuestionFeedback(null), 500);
  }, []);

  const updateScore = useCallback((s) => setScore(s), []);

  const showStreak = useCallback((streak) => {
    if (streak >= 2) {
      setStreakText(`${streak}x`);
      setStreakVisible(true);
      setTimeout(() => setStreakVisible(false), 1500);
    }
  }, []);

  const showHint = useCallback((text) => {
    setHintText(text);
    setHintUsed(true);
  }, []);

  const clear = useCallback(() => {
    numpadRef.current?.clear();
    setQuestionText('...');
    currentQuestionRef.current = null;
    setHintText('');
    setHintUsed(false);
  }, []);

  const handleKeyboard = useCallback((key) => {
    numpadRef.current?.handleKeyboard(key);
  }, []);

  useImperativeHandle(ref, () => ({
    setQuestion,
    showCorrectFeedback,
    showWrongFeedback,
    updateScore,
    showStreak,
    showHint,
    getCurrentQuestion: () => currentQuestionRef.current,
    setDisabled: () => {}, // disabled is controlled by prop
    clear,
    handleKeyboard,
  }));

  const feedbackStyle = {};
  if (questionFeedback === 'correct') {
    feedbackStyle.background = 'var(--green-light)';
    feedbackStyle.color = 'var(--green)';
  } else if (questionFeedback === 'wrong') {
    feedbackStyle.background = 'var(--red-light)';
    feedbackStyle.color = 'var(--red-dark)';
  }

  return (
    <div className="player-panel">
      <div className={`player-header ${team}`}>
        <span>{teamName}</span>
        <span style={{
          fontSize: '0.8rem',
          opacity: streakVisible ? '1' : '0',
          transition: 'opacity 0.3s ease',
          color: '#F59E0B',
          fontWeight: '900',
        }}>
          {streakText}
        </span>
        <span className="player-score">{score}</span>
      </div>

      <div
        className={`question-display ${team === 'blue' ? 'blue-bg' : 'red-bg'} ${questionAnim ? 'anim-scale-in' : ''}`}
        style={feedbackStyle}
      >
        {questionText}
      </div>

      {hintText && (
        <div className="hint-display">{hintText}</div>
      )}

      {showHintButton && !hintUsed && currentQuestionRef.current?.hint && !disabled && (
        <button
          className="hint-btn"
          onClick={() => onHintRequest?.(team)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>
          {t('game.hint')}
        </button>
      )}

      <Numpad
        ref={numpadRef}
        team={team}
        onSubmit={handleSubmit}
        disabled={disabled}
        hasDecimal={false}
        hasNegative={false}
      />
    </div>
  );
});

export default QuestionPanel;
