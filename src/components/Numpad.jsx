import { useState, useRef, useImperativeHandle, forwardRef, useCallback } from 'react';
import { useSound } from '../contexts/SoundContext.jsx';

const Numpad = forwardRef(function Numpad({ team = 'blue', onSubmit, disabled = false, hasDecimal = false, hasNegative = false, hasAlphabet = false, hasFraction = false }, ref) {
  const sound = useSound();
  const [value, setValue] = useState('');
  const [feedbackClass, setFeedbackClass] = useState('');
  const [mode, setMode] = useState('numeric'); // 'numeric' or 'alphabet'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const displayRef = useRef(null);

  const handleKey = useCallback((key) => {
    if (disabled) return;

    if (key === 'backspace') {
      sound.buttonClick();
      setValue(prev => prev.slice(0, -1));
      return;
    }

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

    if (key === 'fraction') {
      setValue(prev => {
        if (prev.includes('/')) return prev;
        if (prev === '' || prev === '-') return prev;
        sound.buttonClick();
        return prev + '/';
      });
      return;
    }

    if (key === 'negative') {
      sound.buttonClick();
      setValue(prev => prev.startsWith('-') ? prev.slice(1) : '-' + prev);
      return;
    }

    if (key === 'switch') {
      sound.buttonClick();
      setIsTransitioning(true);
      setTimeout(() => {
        setMode(prev => prev === 'numeric' ? 'alphabet' : 'numeric');
        setIsTransitioning(false);
      }, 150);
      return;
    }

    // Letter or special character key
    if (typeof key === 'string' && key.length === 1 && isNaN(key)) {
      sound.buttonClick();
      setValue(prev => {
        if (prev.length >= 20) return prev;
        return prev + key;
      });
      return;
    }

    // Number key
    sound.buttonClick();
    setValue(prev => {
      if (prev.replace('-', '').replace('.', '').length >= 20) return prev;
      if (prev === '0' && key !== '0') return key;
      if (prev === '0' && key === '0') return prev;
      return prev + key;
    });
  }, [disabled, onSubmit, sound]);

  const handleKeyboard = useCallback((key) => {
    if (disabled) return;
    if (key >= '0' && key <= '9') handleKey(key);
    else if (key === 'Backspace') handleKey('backspace');
    else if (key === 'Delete') handleKey('clear');
    else if (key === 'Enter') handleKey('submit');
    else if (key === '.' || key === ',') handleKey('dot');
    else if (key === '/') handleKey('fraction');
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

  const showValue = useCallback((val) => setValue(String(val)), []);

  useImperativeHandle(ref, () => ({
    handleKeyboard,
    clear,
    showCorrect,
    showWrong,
    showValue,
  }));

  // Layout optimisé pour les fractions : intégrer / dans la grille
  const numericButtons = hasFraction ? [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['/', '0', 'backspace'],
  ] : [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['clear', '0', 'backspace'],
  ];

  const alphabetButtons = [
    ['a', 'b', 'c', 'd'],
    ['a²', 'b²', 'c²', 'd²'],
    ['x', 'y', 'x²', 'y²'],
    ['+', '-', '²', 'backspace'],
  ];

  const buttons = mode === 'numeric' ? numericButtons : alphabetButtons;

  return (
    <div
      className="numpad-container"
      style={{ opacity: disabled ? '0.5' : '1', pointerEvents: disabled ? 'none' : 'auto' }}
    >
      <div ref={displayRef} className={`answer-display ${feedbackClass}`}>
        {value && value.includes('/') ? (() => {
          const [num, den] = value.split('/');
          return (
            <span className="fraction fraction-input">
              <span className="fraction-num">{num || '\u00A0'}</span>
              <span className="fraction-bar" />
              <span className="fraction-den">{den || '\u00A0'}</span>
            </span>
          );
        })() : (value || '\u00A0')}
      </div>

      <div
        className="numpad-grid"
        style={{
          gridTemplateColumns: mode === 'alphabet' ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)',
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
          transition: 'opacity 0.15s ease, transform 0.15s ease'
        }}
      >
        {buttons.map((row) =>
          row.map((key, idx) => {
            // Si un bouton est seul sur sa ligne, le faire prendre toute la largeur
            const isFullWidthButton = row.length === 1 && (key === 'submit' || key === 'clear');
            const fullWidthStyle = isFullWidthButton ? { gridColumn: '1 / -1' } : {};

            let btnClass = 'numpad-btn';
            let label = key;
            if (key === 'clear') { btnClass += ' clear'; label = '\u2715'; }
            else if (key === 'backspace') { btnClass += ' backspace'; label = '\u232B'; }
            else if (key === 'submit') { btnClass += ' submit'; label = '\u2713'; }
            else if (key === '/') { btnClass += ' fraction'; label = '/'; }

            return (
              <button
                key={key + idx}
                className={btnClass}
                data-key={key}
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleKey(key === '/' ? 'fraction' : key); 
                }}
                onPointerDown={(e) => {
                  e.currentTarget.style.transform = 'scale(0.95)';
                  e.currentTarget.style.transition = 'transform 0.1s ease';
                }}
                onPointerUp={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.transition = '';
                }}
                onPointerLeave={(e) => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.transition = '';
                }}
                style={{ touchAction: 'manipulation', ...fullWidthStyle }}
              >
                {label}
              </button>
            );
          })
        )}
      </div>

      {hasAlphabet && (
        <div style={{ marginTop: '4px', display: 'flex', gap: '4px' }}>
          <button
            className="numpad-btn clear"
            onClick={() => handleKey('clear')}
            style={{ touchAction: 'manipulation', flex: 0.4 }}
          >
            ✕
          </button>
          <button
            className="numpad-btn submit"
            onClick={() => handleKey('submit')}
            style={{ touchAction: 'manipulation', flex: 1 }}
          >
            ✓
          </button>
          <button
            className="numpad-btn numpad-btn-switch"
            onClick={() => handleKey('switch')}
            style={{
              touchAction: 'manipulation',
              flex: 0.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
              fontSize: '0.85em'
            }}
          >
            <span style={{ fontWeight: 'bold' }}>{mode === 'numeric' ? 'ABC' : '123'}</span>
          </button>
        </div>
      )}

      {!hasAlphabet && (
        <div style={{ marginTop: '6px', display: 'flex', gap: '6px' }}>
          {hasFraction && (
            <button
              className="numpad-btn clear"
              onClick={() => handleKey('clear')}
              onPointerDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)';
                e.currentTarget.style.transition = 'transform 0.1s ease';
              }}
              onPointerUp={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.transition = '';
              }}
              onPointerLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.transition = '';
              }}
              style={{ touchAction: 'manipulation', flex: 0.6 }}
            >
              ✕
            </button>
          )}
          <button
            className="numpad-btn submit"
            onClick={() => handleKey('submit')}
            onPointerDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.95)';
              e.currentTarget.style.transition = 'transform 0.1s ease';
            }}
            onPointerUp={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.transition = '';
            }}
            onPointerLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.transition = '';
            }}
            style={{ touchAction: 'manipulation', flex: 1 }}
          >
            ✓
          </button>
        </div>
      )}

      {!hasAlphabet && (hasDecimal || hasNegative) && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: (() => {
            const count = [hasNegative, hasDecimal].filter(Boolean).length;
            return count > 1 ? `repeat(${count}, 1fr)` : '1fr';
          })(),
          gap: '6px',
          marginTop: '6px',
        }}>
          {hasNegative && (
            <button
              className="numpad-btn"
              onClick={() => handleKey('negative')}
              onPointerDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)';
                e.currentTarget.style.transition = 'transform 0.1s ease';
              }}
              onPointerUp={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.transition = '';
              }}
              onPointerLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.transition = '';
              }}
              style={{ touchAction: 'manipulation' }}
            >
              +/-
            </button>
          )}
          {hasDecimal && (
            <button
              className="numpad-btn"
              onClick={() => handleKey('dot')}
              onPointerDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)';
                e.currentTarget.style.transition = 'transform 0.1s ease';
              }}
              onPointerUp={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.transition = '';
              }}
              onPointerLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.transition = '';
              }}
              style={{ touchAction: 'manipulation' }}
            >
              ,
            </button>
          )}
        </div>
      )}
    </div>
  );
});

export default Numpad;
