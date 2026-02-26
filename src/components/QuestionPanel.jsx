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

  const showAiAnswer = useCallback((val) => {
    numpadRef.current?.showValue(String(val));
  }, []);

  useImperativeHandle(ref, () => ({
    setQuestion,
    showCorrectFeedback,
    showWrongFeedback,
    updateScore,
    showStreak,
    showHint,
    showAiAnswer,
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

  // Render fractions as vertical stacked display and keep math expressions on one line
  const renderMathText = (text) => {
    // Split "Résous : 3x = 27" into label + math expression
    const colonIdx = text.indexOf(' : ');
    if (colonIdx !== -1) {
      const label = text.slice(0, colonIdx + 3);
      const expr = text.slice(colonIdx + 3);
      return (
        <>
          {label}
          <span className="math-expr">{renderMathParts(expr)}</span>
        </>
      );
    }
    return renderMathParts(text);
  };

  // Render fraction notation as vertical stacked display
  // Matches: 3/4, 15/20, x/35, 2x/5, -3/4, (2x+1)/3 etc.
  const fractionRegex = /(\([^)]+\)\/\d+|-?[a-zA-Z\d]+\/\d+)/;
  const parenFractionMatch = /^\(([^)]+)\)\/(\d+)$/;
  const simpleFractionMatch = /^(-?[a-zA-Z\d]+)\/(\d+)$/;

  // Render superscript notation: a^2 → a², 2^3 → 2³, 10^4 → 10⁴
  const renderTextWithSuperscripts = (text) => {
    const superscriptRegex = /(\w+)\^(\d+)/g;
    const parts = [];
    let lastIndex = 0;
    let m;
    while ((m = superscriptRegex.exec(text)) !== null) {
      if (m.index > lastIndex) parts.push(text.slice(lastIndex, m.index));
      parts.push(
        <span key={`sup-${m.index}`}>
          {m[1]}<sup>{m[2]}</sup>
        </span>
      );
      lastIndex = m.index + m[0].length;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return parts.length > 1 ? parts : text;
  };

  const renderMathParts = (text) => {
    const parts = text.split(fractionRegex);
    if (parts.length === 1) return renderTextWithSuperscripts(text);
    return parts.map((part, i) => {
      const parenMatch = part.match(parenFractionMatch);
      if (parenMatch) {
        return (
          <span key={i} className="fraction">
            <span className="fraction-num">{renderTextWithSuperscripts(parenMatch[1])}</span>
            <span className="fraction-bar" />
            <span className="fraction-den">{parenMatch[2]}</span>
          </span>
        );
      }
      const simpleMatch = part.match(simpleFractionMatch);
      if (simpleMatch) {
        return (
          <span key={i} className="fraction">
            <span className="fraction-num">{renderTextWithSuperscripts(simpleMatch[1])}</span>
            <span className="fraction-bar" />
            <span className="fraction-den">{simpleMatch[2]}</span>
          </span>
        );
      }
      return renderTextWithSuperscripts(part);
    });
  };

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
        
        {showHintButton && onHintRequest && (
          <button
            className="hint-btn"
            onClick={() => onHintRequest(team)}
            disabled={disabled || hintsRemaining <= 0}
            style={{
              opacity: hintsRemaining <= 0 ? 0.5 : 1,
              cursor: hintsRemaining <= 0 ? 'not-allowed' : 'pointer',
            }}
          >
            💡 {hintsRemaining}
          </button>
        )}
        <span className="player-score">{score}</span>
      </div>

      <div
        className={`question-display ${team === 'blue' ? 'blue-bg' : 'red-bg'} ${questionAnim ? 'anim-scale-in' : ''}`}
        style={feedbackStyle}
      >
        {renderMathText(questionText)}
      </div>

      {hintText && (
        <div className="hint-display">{renderMathText(hintText)}</div>
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
