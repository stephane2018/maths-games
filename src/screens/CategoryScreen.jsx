import { useState, useRef } from 'react';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useNavigation } from '../contexts/NavigationContext.jsx';
import { CE1D_THEMES, getCategoriesToLoad } from '../data/ce1dThemes.js';

/* ---- SVG Icons for each theme ---- */
function NumbersIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="4" y="8" width="16" height="32" rx="4" stroke={color} strokeWidth="3" />
      <text x="12" y="30" textAnchor="middle" fill={color} fontSize="18" fontWeight="bold" fontFamily="system-ui">7</text>
      <line x1="26" y1="24" x2="44" y2="24" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="35" y1="15" x2="35" y2="33" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ProportionsIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <line x1="8" y1="40" x2="24" y2="8" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="24" y1="8" x2="40" y2="40" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <line x1="14" y1="28" x2="34" y2="28" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="14" cy="28" r="3" fill={color} />
      <circle cx="34" cy="28" r="3" fill={color} />
    </svg>
  );
}

function GeometryIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <polygon points="24,6 42,42 6,42" stroke={color} strokeWidth="3" strokeLinejoin="round" fill="none" />
      <circle cx="24" cy="30" r="10" stroke={color} strokeWidth="2" strokeDasharray="4 3" />
    </svg>
  );
}

function MeasuresIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="14" width="36" height="20" rx="3" stroke={color} strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <line key={i} x1={10 + i * 5} y1="14" x2={10 + i * 5} y2={i % 2 === 0 ? 24 : 20} stroke={color} strokeWidth="2" strokeLinecap="round" />
      ))}
      <text x="24" y="31" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold" fontFamily="system-ui">cm</text>
    </svg>
  );
}

function DataIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect x="8" y="28" width="8" height="14" rx="2" fill={color} opacity="0.4" />
      <rect x="20" y="18" width="8" height="24" rx="2" fill={color} opacity="0.6" />
      <rect x="32" y="8" width="8" height="34" rx="2" fill={color} opacity="0.9" />
      <line x1="4" y1="42" x2="44" y2="42" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function ProblemsIcon({ color }) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="20" r="14" stroke={color} strokeWidth="3" />
      <text x="24" y="26" textAnchor="middle" fill={color} fontSize="18" fontWeight="bold" fontFamily="system-ui">?</text>
      <path d="M18 36 L24 42 L30 36" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const THEME_ICONS = {
  numbers: NumbersIcon,
  proportions: ProportionsIcon,
  geometry: GeometryIcon,
  measures: MeasuresIcon,
  data: DataIcon,
  problems: ProblemsIcon,
};

/* ---- Decorative math background SVG ---- */
function MathBackground() {
  return (
    <svg className="category-bg-svg" viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EEF2FF" />
          <stop offset="100%" stopColor="#F0FDF4" />
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#bgGrad)" />
      {/* Floating math symbols */}
      <g opacity="0.08" fill="#3B82F6">
        <text x="50" y="80" fontSize="60" fontWeight="bold" fontFamily="system-ui">+</text>
        <text x="480" y="120" fontSize="50" fontWeight="bold" fontFamily="system-ui">{'\u00d7'}</text>
        <text x="100" y="250" fontSize="70" fontWeight="bold" fontFamily="system-ui">{'\u00f7'}</text>
        <text x="420" y="300" fontSize="55" fontWeight="bold" fontFamily="system-ui">=</text>
        <text x="30" y="450" fontSize="45" fontWeight="bold" fontFamily="system-ui">%</text>
        <text x="500" y="500" fontSize="65" fontWeight="bold" fontFamily="system-ui">{'\u03c0'}</text>
        <text x="250" y="150" fontSize="40" fontWeight="bold" fontFamily="system-ui">{'\u221a'}</text>
        <text x="350" y="680" fontSize="50" fontWeight="bold" fontFamily="system-ui">{'\u2211'}</text>
        <text x="80" y="650" fontSize="55" fontWeight="bold" fontFamily="system-ui">{'\u0394'}</text>
        <text x="500" y="750" fontSize="60" fontWeight="bold" fontFamily="system-ui">{'\u221e'}</text>
      </g>
      <g opacity="0.06" fill="#EF4444">
        <text x="300" y="80" fontSize="50" fontWeight="bold" fontFamily="system-ui">{'\u2212'}</text>
        <text x="150" y="400" fontSize="60" fontWeight="bold" fontFamily="system-ui">{'\u2248'}</text>
        <text x="450" y="450" fontSize="45" fontWeight="bold" fontFamily="system-ui">{'\u2260'}</text>
        <text x="200" y="600" fontSize="55" fontWeight="bold" fontFamily="system-ui">{'\u2264'}</text>
        <text x="400" y="180" fontSize="50" fontWeight="bold" fontFamily="system-ui">{'\u00b2'}</text>
      </g>
      {/* Decorative shapes */}
      <g opacity="0.05" stroke="#8B5CF6" strokeWidth="2" fill="none">
        <polygon points="520,600 560,550 600,600" />
        <circle cx="70" cy="350" r="35" />
        <rect x="430" y="350" width="40" height="40" rx="6" />
      </g>
    </svg>
  );
}

/* ---- Difficulty & Team icons ---- */
const DIFF_ICONS = {
  easy: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/><line x1="9" y1="21" x2="15" y2="21"/></svg>',
  medium: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>',
  hard: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="14" width="4" height="6" rx="1"/><rect x="10" y="8" width="4" height="12" rx="1"/><rect x="16" y="4" width="4" height="16" rx="1"/></svg>',
};

const TEAM_ICONS = {
  blue: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
  red: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
};

const DIFFICULTIES = ['easy', 'medium', 'hard'];
const ROUND_OPTIONS = [1, 3, 5];

export default function CategoryScreen() {
  const { t } = useI18n();
  const sound = useSound();
  const { push, pop, sharedState } = useNavigation();
  const mode = sharedState.mode || 'solo';

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedThemes, setSelectedThemes] = useState(new Set(['numbers']));
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const [selectedRounds, setSelectedRounds] = useState(3);
  const [slideDirection, setSlideDirection] = useState('right');

  const blueNameRef = useRef(null);
  const redNameRef = useRef(null);

  function toggleTheme(id) {
    sound.buttonClick();
    setSelectedThemes(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        if (next.size > 1) next.delete(id);
      } else {
        next.add(id);
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
    if (currentStep === 1) {
      pop();
      return;
    }
    setSlideDirection('left');
    setCurrentStep(s => s - 1);
  }

  function startGame() {
    sound.buttonClick();
    const blueName = blueNameRef.current?.value.trim() || '';
    const redName = redNameRef.current?.value.trim() || '';
    const categories = getCategoriesToLoad([...selectedThemes]);
    push('Game', {
      mode,
      categories,
      operations: [],
      difficulty: selectedDifficulty,
      numRounds: selectedRounds,
      blueName: blueName || t('game.blue'),
      redName: mode === 'versus' ? (redName || t('game.red')) : 'AI',
    }, true);
  }

  const animClass = slideDirection === 'right' ? 'wizard-slide-in-right' : 'wizard-slide-in-left';

  return (
    <div className="screen category-fullpage">
      {/* Decorative math background */}
      <MathBackground />

      <div className="category-content">
        <div className="wizard-body">
          <h2 className="wizard-title">{t('wizard.title')}</h2>
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

          {/* Step 1: Theme selection with SVG icons */}
          {currentStep === 1 && (
            <div className={`wizard-step-content ${animClass}`} key="step1">
              <h3 className="wizard-section-title">{t('wizard.themesTitle')}</h3>
              <p className="wizard-section-desc">{t('wizard.themesDesc')}</p>
              <div className="wizard-themes-grid">
                {CE1D_THEMES.map(theme => {
                  const IconComponent = THEME_ICONS[theme.id];
                  const isSelected = selectedThemes.has(theme.id);
                  return (
                    <div
                      key={theme.id}
                      className={`wizard-theme-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => toggleTheme(theme.id)}
                      style={{
                        '--theme-color': theme.color,
                        borderColor: isSelected ? theme.color : undefined,
                      }}
                    >
                      <div className="wizard-theme-icon-wrap">
                        {IconComponent && <IconComponent color={isSelected ? theme.color : '#94A3B8'} />}
                      </div>
                      <span className="wizard-theme-label" style={{
                        color: isSelected ? theme.color : undefined,
                      }}>
                        {t(`themes.${theme.id}`)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Difficulty & Rounds */}
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

          {/* Step 3: Teams */}
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
            <button className="btn btn-outline wizard-btn-back" onClick={goBack}
              dangerouslySetInnerHTML={{ __html: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> ${t('wizard.back')}` }}
            />

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
  );
}
