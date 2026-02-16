import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';

const OP_ICONS = {
  addition: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  subtraction: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  multiplication: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',
  division: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="17" r="1.5" fill="currentColor" stroke="none"/></svg>',
};

const DIFF_ICONS = {
  easy: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/><line x1="9" y1="21" x2="15" y2="21"/></svg>',
  medium: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>',
  hard: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="14" width="4" height="6" rx="1"/><rect x="10" y="8" width="4" height="12" rx="1"/><rect x="16" y="4" width="4" height="16" rx="1"/></svg>',
};

const TEAM_ICONS = {
  blue: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
  red: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
};

const OP_TO_CATEGORIES = {
  addition: ['N1', 'N2'],
  subtraction: ['N1', 'N2'],
  multiplication: ['N2', 'N3'],
  division: ['N2', 'N3'],
};

const OPERATIONS = ['addition', 'subtraction', 'multiplication', 'division'];
const DIFFICULTIES = ['easy', 'medium', 'hard'];
const ROUND_OPTIONS = [1, 3, 5];

export default function CategoryScreen() {
  const { t } = useI18n();
  const sound = useSound();
  const navigate = useNavigate();
  const location = useLocation();
  const mode = location.state?.mode || 'solo';

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOps, setSelectedOps] = useState(new Set(['addition']));
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const [selectedRounds, setSelectedRounds] = useState(3);
  const [slideDirection, setSlideDirection] = useState('right');

  const blueNameRef = useRef(null);
  const redNameRef = useRef(null);

  function getCategories() {
    const cats = new Set();
    for (const op of selectedOps) {
      const mapped = OP_TO_CATEGORIES[op];
      if (mapped) mapped.forEach(c => cats.add(c));
    }
    return [...cats];
  }

  function toggleOp(op) {
    sound.buttonClick();
    setSelectedOps(prev => {
      const next = new Set(prev);
      if (next.has(op)) {
        if (next.size > 1) next.delete(op);
      } else {
        next.add(op);
      }
      return next;
    });
  }

  function goNext() {
    sound.buttonClick();
    setSlideDirection('right');
    setCurrentStep(s => s + 1);
  }

  function goBack() {
    sound.buttonClick();
    setSlideDirection('left');
    setCurrentStep(s => s - 1);
  }

  function startGame() {
    sound.buttonClick();
    const blueName = blueNameRef.current?.value.trim() || '';
    const redName = redNameRef.current?.value.trim() || '';
    navigate('/game', {
      state: {
        mode,
        categories: getCategories(),
        operations: [...selectedOps],
        difficulty: selectedDifficulty,
        numRounds: selectedRounds,
        blueName: blueName || t('game.blue'),
        redName: mode === 'versus' ? (redName || t('game.red')) : 'AI',
      },
    });
  }

  const animClass = slideDirection === 'right' ? 'wizard-slide-in-right' : 'wizard-slide-in-left';

  return (
    <div className="screen wizard-screen">
      <div className="wizard-bg" />
      <div className="wizard-overlay">
        <div className="wizard-modal">
          <h2 className="wizard-title">{t('wizard.title')}</h2>
          <div className="wizard-body">
            {/* Step indicator */}
            <div className="wizard-steps">
              {[1, 2, 3].map((step, idx) => (
                <div key={step} style={{ display: 'contents' }}>
                  {idx > 0 && (
                    <div className={`wizard-step-line ${step <= currentStep ? 'active' : ''}`} />
                  )}
                  <div className="wizard-step-group">
                    <div className={`wizard-step-circle ${step <= currentStep ? 'active' : ''}`}>{step}</div>
                    <div className={`wizard-step-label ${step === currentStep ? 'active' : ''}`}>
                      {t(`wizard.step${step}`)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Step content */}
            {currentStep === 1 && (
              <div className={`wizard-step-content ${animClass}`} key="step1">
                <h3 className="wizard-section-title">{t('wizard.operationsTitle')}</h3>
                <p className="wizard-section-desc">{t('wizard.operationsDesc')}</p>
                <div className="wizard-operations-grid">
                  {OPERATIONS.map(op => (
                    <div
                      key={op}
                      className={`wizard-op-card ${selectedOps.has(op) ? 'selected' : ''}`}
                      onClick={() => toggleOp(op)}
                    >
                      <span className="wizard-op-icon" dangerouslySetInnerHTML={{ __html: OP_ICONS[op] }} />
                      <span className="wizard-op-label">{t(`wizard.${op}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className={`wizard-step-content ${animClass}`} key="step2">
                <h3 className="wizard-section-title">{t('wizard.difficultyTitle')}</h3>
                <div className="wizard-difficulty-grid">
                  {DIFFICULTIES.map(diff => (
                    <div
                      key={diff}
                      className={`wizard-diff-card ${selectedDifficulty === diff ? 'selected' : ''}`}
                      onClick={() => { sound.buttonClick(); setSelectedDifficulty(diff); }}
                    >
                      <div className="wizard-diff-icon" dangerouslySetInnerHTML={{ __html: DIFF_ICONS[diff] }} />
                      <div className="wizard-diff-label">{t(`wizard.${diff}`)}</div>
                    </div>
                  ))}
                </div>
                <h3 className="wizard-section-title" style={{ marginTop: '20px' }}>{t('wizard.roundsTitle')}</h3>
                <div className="wizard-rounds-grid">
                  {ROUND_OPTIONS.map(n => (
                    <div
                      key={n}
                      className={`wizard-round-card ${selectedRounds === n ? 'selected' : ''}`}
                      onClick={() => { sound.buttonClick(); setSelectedRounds(n); }}
                    >
                      <div className="wizard-round-label">
                        {n === 1 ? t('wizard.roundLabel1') : t('wizard.roundLabel', { n })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className={`wizard-step-content ${animClass}`} key="step3">
                <div className="wizard-teams-row">
                  <div className="wizard-team-card blue">
                    <div className="wizard-team-icon blue" dangerouslySetInnerHTML={{ __html: TEAM_ICONS.blue }} />
                    <div className="wizard-team-label">{t('wizard.team1')}</div>
                    <input
                      ref={blueNameRef}
                      className="wizard-team-input"
                      type="text"
                      placeholder={t('wizard.teamName')}
                      maxLength="15"
                    />
                  </div>
                  <div className="wizard-vs">{t('wizard.vs')}</div>
                  <div className="wizard-team-card red">
                    <div className="wizard-team-icon red" dangerouslySetInnerHTML={{ __html: TEAM_ICONS.red }} />
                    <div className="wizard-team-label">{t('wizard.team2')}</div>
                    <input
                      ref={redNameRef}
                      className="wizard-team-input"
                      type="text"
                      placeholder={t('wizard.teamName')}
                      maxLength="15"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="wizard-buttons">
              {currentStep > 1 && (
                <button className="btn btn-outline wizard-btn-back" onClick={goBack}
                  dangerouslySetInnerHTML={{ __html: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> ${t('wizard.back')}` }}
                />
              )}

              {currentStep < 3 ? (
                <button className="btn btn-blue wizard-btn-next" onClick={goNext}
                  dangerouslySetInnerHTML={{ __html: `${t('wizard.next')} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-left:6px"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>` }}
                />
              ) : (
                <button className="btn btn-blue wizard-btn-next" onClick={startGame}
                  dangerouslySetInnerHTML={{ __html: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px"><polygon points="5 3 19 12 5 21 5 3"/></svg> ${t('wizard.startGame')}` }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
