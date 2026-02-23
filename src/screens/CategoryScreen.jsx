import { useState, useRef } from 'react';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useNavigation } from '../contexts/NavigationContext.jsx';
import { CE1D_THEMES, getCategoriesToLoad } from '../data/ce1dThemes.js';
import { MathBackground } from '../components/CategoryWizardIcons.jsx';
import {
  DIFF_ICONS,
  TEAM_ICONS,
  DIFFICULTIES,
  ROUND_OPTIONS,
  TIME_OPTIONS,
  BLUE_SUBCATS,
  RED_SUBCATS,
  ALL_PLAYABLE_CODES,
} from '../constants/categoryWizardConstants.js';

export default function CategoryScreen() {
  const { t } = useI18n();
  const sound = useSound();
  const { push, pop, sharedState } = useNavigation();
  const mode = sharedState.mode || 'solo';

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedThemes, setSelectedThemes] = useState(new Set(['numbers']));
  const [selectedSubcategories, setSelectedSubcategories] = useState(new Set(['N1'])); // Au moins une par défaut

  function toggleSelectAll() {
    sound.buttonClick();
    const playableSelected = ALL_PLAYABLE_CODES.filter(c => selectedSubcategories.has(c));
    if (playableSelected.length === ALL_PLAYABLE_CODES.length) {
      // Tout est coché → ne garder que N1
      setSelectedSubcategories(new Set(['N1']));
    } else {
      // Tout cocher
      setSelectedSubcategories(new Set(ALL_PLAYABLE_CODES));
    }
  }
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const [selectedRounds, setSelectedRounds] = useState(3);
  const [selectedTimePerQuestion, setSelectedTimePerQuestion] = useState(30); // en secondes
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

  function toggleSubcategory(code) {
    sound.buttonClick();
    setSelectedSubcategories(prev => {
      const next = new Set(prev);
      if (next.has(code)) {
        // Vérifier qu'il reste au moins 1 sous-catégorie jouable
        const playableRemaining = [...next].filter(c => c !== code);
        if (playableRemaining.length >= 1) {
          next.delete(code);
        }
      } else {
        next.add(code);
      }
      return next;
    });
  }

  function goNext() {
    // Vérifier qu'au moins 1 catégorie jouable est sélectionnée au step 1
    if (currentStep === 1) {
      if (selectedSubcategories.size === 0) return;
    }
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
    // Utiliser directement les sous-catégories sélectionnées (N1, G1, etc.)
    const categories = Array.from(selectedSubcategories);

    if (categories.length === 0) {
      return;
    }

    push('Game', {
      mode,
      categories,
      operations: [],
      difficulty: selectedDifficulty,
      numRounds: selectedRounds,
      timePerQuestion: selectedTimePerQuestion,
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

          {/* Step 1: Subcategory selection - 2 columns blue/red + CORRIGES */}
          {currentStep === 1 && (
            <div className={`wizard-step-content ${animClass}`} key="step1">
              <h3 className="wizard-section-title">{t('wizard.themesTitle')}</h3>

              {/* Toggle all + counter */}
              <div className="wizard-subcat-toolbar">
                <button
                  className="wizard-toggle-all-btn"
                  onClick={toggleSelectAll}
                >
                  {ALL_PLAYABLE_CODES.filter(c => selectedSubcategories.has(c)).length === ALL_PLAYABLE_CODES.length
                    ? 'Tout désélectionner'
                    : 'Tout sélectionner'}
                </button>
                <span className="wizard-subcat-counter">
                  {ALL_PLAYABLE_CODES.filter(c => selectedSubcategories.has(c)).length}/{ALL_PLAYABLE_CODES.length} sélectionné{ALL_PLAYABLE_CODES.filter(c => selectedSubcategories.has(c)).length > 1 ? 's' : ''}
                </span>
              </div>

              {/* Grid de cards avec icônes */}
              <div className="wizard-subcat-cards-grid">
                {[...BLUE_SUBCATS, ...RED_SUBCATS].map(subcat => {
                  const isSelected = selectedSubcategories.has(subcat.code);
                  const color = BLUE_SUBCATS.find(s => s.code === subcat.code) ? '#3B82F6' : '#EF4444';
                  return (
                    <div
                      key={subcat.code}
                      className={`wizard-subcat-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => toggleSubcategory(subcat.code)}
                      style={{
                        '--card-color': color,
                        borderColor: isSelected ? color : '#E2E8F0',
                        backgroundColor: isSelected ? `${color}08` : 'white',
                      }}
                    >
                      <div className={`wizard-subcat-card-checkbox ${isSelected ? 'checked' : ''}`} style={{ '--cb-color': color }}>
                        {isSelected && <span>✓</span>}
                      </div>
                      <div className="wizard-subcat-card-icon" style={{ color }}>
                        {subcat.icon}
                      </div>
                      <div className="wizard-subcat-card-code" style={{ color }}>
                        {subcat.code}
                      </div>
                      <div className="wizard-subcat-card-name" style={{ color: isSelected ? color : '#64748B' }}>
                        {subcat.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Difficulty & Rounds */}
          {currentStep === 2 && (
            <div className={`wizard-step-content ${animClass}`} key="step3">
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
              <h3 className="wizard-section-title" style={{ marginTop: '20px' }}>⏱️ Temps par question</h3>
              <div className="wizard-rounds-grid">
                {TIME_OPTIONS.map(opt => (
                  <div
                    key={opt.value}
                    className={`wizard-round-card ${selectedTimePerQuestion === opt.value ? 'selected' : ''}`}
                    onClick={() => { sound.buttonClick(); setSelectedTimePerQuestion(opt.value); }}
                  >
                    <div className="wizard-round-label">{opt.label}</div>
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
