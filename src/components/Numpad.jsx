import { useState, useRef, useImperativeHandle, forwardRef, useCallback } from 'react';
import { useSound } from '../contexts/SoundContext.jsx';

const Numpad = forwardRef(function Numpad({ team = 'blue', onSubmit, disabled = false, hasDecimal = false, hasNegative = false }, ref) {
  const sound = useSound();
  const [value, setValue] = useState('');
  const [feedbackClass, setFeedbackClass] = useState('');
  const displayRef = useRef(null);

  const handleKey = useCallback((key) => {
    if (disabled) return;

    if (key === 'clear') {
      sound.buttonClick();
      setValue('');
      return;
    }

    if (key === 'submit') {
      setValue(prev => {
        if (prev === '' || prev === '-') return prev;
        sound.buttonClick();
        onSubmit?.(prev);
        return prev;
      });
      return;
    }

    if (key === 'dot') {
      setValue(prev => {
        if (prev.includes('.')) return prev;
        sound.buttonClick();
        return prev === '' ? '0.' : prev + '.';
      });
      return;
    }

    if (key === 'negative') {
      sound.buttonClick();
      setValue(prev => prev.startsWith('-') ? prev.slice(1) : '-' + prev);
      return;
    }

    // Number key
    sound.buttonClick();
    setValue(prev => {
      if (prev.replace('-', '').replace('.', '').length >= 8) return prev;
      if (prev === '0' && key !== '0') return key;
      if (prev === '0' && key === '0') return prev;
      return prev + key;
    });
  }, [disabled, onSubmit, sound]);

  const handleKeyboard = useCallback((key) => {
    if (disabled) return;
    if (key >= '0' && key <= '9') handleKey(key);
    else if (key === 'Backspace' || key === 'Delete') handleKey('clear');
    else if (key === 'Enter') handleKey('submit');
    else if (key === '.' || key === ',') handleKey('dot');
    else if (key === '-') handleKey('negative');
  }, [disabled, handleKey]);

  const clear = useCallback(() => setValue(''), []);

  const showCorrect = useCallback(() => {
    setFeedbackClass('correct');
    setTimeout(() => setFeedbackClass(''), 800);
  }, []);

  const showWrong = useCallback(() => {
    setFeedbackClass('wrong anim-shake');
    setTimeout(() => setFeedbackClass(''), 600);
  }, []);

  useImperativeHandle(ref, () => ({
    handleKeyboard,
    clear,
    showCorrect,
    showWrong,
  }));

  const buttons = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['clear', '0', 'submit'],
  ];

  return (
    <div
      className="numpad-container"
      style={{ opacity: disabled ? '0.5' : '1', pointerEvents: disabled ? 'none' : 'auto' }}
    >
      <div ref={displayRef} className={`answer-display ${feedbackClass}`}>
        {value || '0'}
      </div>

      <div className="numpad-grid">
        {buttons.flat().map((key) => {
          let btnClass = 'numpad-btn';
          let label = key;
          if (key === 'clear') { btnClass += ' clear'; label = '\u2715'; }
          else if (key === 'submit') { btnClass += ' submit'; label = '\u2713'; }

          return (
            <button
              key={key}
              className={btnClass}
              data-key={key}
              onClick={(e) => { e.preventDefault(); handleKey(key); }}
              onTouchStart={(e) => { e.target.style.transform = 'scale(0.93)'; }}
              onTouchEnd={(e) => { e.target.style.transform = ''; }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {(hasDecimal || hasNegative) && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: hasNegative && hasDecimal ? '1fr 1fr' : '1fr',
          gap: '6px',
          marginTop: '6px',
        }}>
          {hasNegative && (
            <button className="numpad-btn" onClick={() => handleKey('negative')}>+/-</button>
          )}
          {hasDecimal && (
            <button className="numpad-btn" onClick={() => handleKey('dot')}>,</button>
          )}
        </div>
      )}
    </div>
  );
});

export default Numpad;
