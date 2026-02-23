import { useRef, useImperativeHandle, forwardRef, useState, useCallback, useEffect } from 'react';
import { useI18n } from '../contexts/I18nContext.jsx';
import Numpad from './Numpad.jsx';

const QuestionPanel = forwardRef(function QuestionPanel({
  team = 'blue',
  teamName = '',
  onAnswer,
  onHintRequest,
  hintsRemaining = 0,
  disabled = false,
  showHintButton = true,
}, ref) {
  const { t, lang } = useI18n();
  const numpadRef = useRef(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
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
    setCurrentQuestion(question);
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
    setCurrentQuestion(null);
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

  // Get question text in current language
  const getQuestionText = useCallback((question) => {
    if (!question) return '...';
    if (typeof question.text === 'string') return question.text;
    return question.text[lang] || question.text.fr || '...';
  }, [lang]);

  // Get hint text in current language
  const getHintTextInLang = useCallback((question) => {
    if (!question?.hint) return '';
    if (typeof question.hint === 'string') return question.hint;
    return question.hint[lang] || question.hint.fr || '';
  }, [lang]);

  // Update hint text when language changes
  useEffect(() => {
    if (hintUsed && currentQuestion) {
      setHintText(getHintTextInLang(currentQuestion));
    }
  }, [lang, hintUsed, currentQuestion, getHintTextInLang]);

  const questionText = getQuestionText(currentQuestion);

  // Ajuster la taille de police selon la longueur du texte
  const getQuestionFontSize = (text) => {
    const length = text.length;
    if (length > 100) return '0.85rem';
    if (length > 70) return '1rem';
    if (length > 50) return '1.15rem';
    return '1.3rem';
  };

  const feedbackStyle = {
    fontSize: getQuestionFontSize(questionText)
  };
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

      {showHintButton && onHintRequest && (
        <button
          className="hint-btn"
          onClick={() => onHintRequest(team)}
          disabled={disabled || hintsRemaining <= 0}
          style={{
            opacity: hintsRemaining <= 0 ? 0.5 : 1,
            cursor: hintsRemaining <= 0 ? 'not-allowed' : 'pointer',
            marginTop: '8px',
          }}
        >
          💡 Indice ({hintsRemaining})
        </button>
      )}

      <Numpad
        ref={numpadRef}
        team={team}
        onSubmit={handleSubmit}
        disabled={disabled}
        hasDecimal={true}
        hasNegative={false}
      />
    </div>
  );
});

export default QuestionPanel;
