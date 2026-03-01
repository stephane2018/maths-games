import { useState, useRef } from 'react';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useNavigation } from '../contexts/NavigationContext.jsx';
import { CE1D_THEMES, getCategoriesToLoad } from '../data/ce1dThemes.js';
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
import {
  GlassButton,
  GlassCard,
  StepIndicator,
  GlassCheckbox,
  GlassBadge,
  ProgressDots,
} from '../components/GlassUI.jsx';

export default function CategoryScreen() {
  const { t } = useI18n();
  const sound = useSound();
  const { push, pop, sharedState } = useNavigation();
  const mode = sharedState.mode || 'solo';

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedThemes, setSelectedThemes] = useState(new Set(['numbers']));
  const [selectedSubcategories, setSelectedSubcategories] = useState(new Set(['A2'])); // Au moins une par défaut (PEMDAS)

  function toggleSelectAll() {
    sound.buttonClick();
    const playableSelected = ALL_PLAYABLE_CODES.filter(c => selectedSubcategories.has(c));
    if (playableSelected.length === ALL_PLAYABLE_CODES.length) {
      // Tout est coché → ne garder que A2 (PEMDAS)
      setSelectedSubcategories(new Set(['A2']));
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
      isDaily: sharedState.isDaily || false,
    }, true);
  }

  const animClass = slideDirection === 'right' ? 'wizard-slide-in-right' : 'wizard-slide-in-left';

  return (
    <div className="screen category-fullpage" style={{
      backgroundImage: 'url(/background.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      position: 'relative',
    }}>
      {/* Gradient overlay - top and bottom */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, transparent 20%, transparent 80%, rgba(0, 0, 0, 0.4) 100%)',
        pointerEvents: 'none',
      }} />
      {/* Decorative math background - désactivé pour utiliser background.png */}
      {/* <MathBackground /> */}

      <div className="category-content">
        <div className="wizard-body">
          {/* Step indicator with glassmorphism */}
          <StepIndicator
            currentStep={currentStep}
            steps={[
              { label: t('wizard.step1') },
              { label: t('wizard.step2') },
              { label: t('wizard.step3') },
            ]}
          />

          {/* Step 1: Subcategory selection - Tailwind version */}
          {currentStep === 1 && (
            <div className={`text-center  flex-none flex flex-col items-center w-full ${animClass}`} key="step1">
              <h3 className="text-4xl font-black text-slate-800 mb-3">Thèmes mathématiques</h3>
              <p className="text-slate-600 mb-6 text-base">Sélectionne les thèmes que tu souhaites étudier.</p>

              {/* Toggle all + counter */}
              <div className="flex items-center justify-between w-full max-w-[900px] mb-4 px-2">
                <GlassButton
                  className='!p-2'
                  variant="glass"
                  size="md"
                
                  onClick={toggleSelectAll}
                  icon={<span className="text-lg">{ALL_PLAYABLE_CODES.filter(c => selectedSubcategories.has(c)).length === ALL_PLAYABLE_CODES.length ? '☑' : '☐'}</span>}
                >
                  {ALL_PLAYABLE_CODES.filter(c => selectedSubcategories.has(c)).length === ALL_PLAYABLE_CODES.length
                    ? 'Tout désélectionner'
                    : 'Tout sélectionner'}
                </GlassButton>
                <GlassButton
                  variant="gradient"
                  size="md"
                  className='!p-2'
                  onClick={goNext}
                  icon={<span>→</span>}
                >
                  Suivant
                </GlassButton>
              </div>

              {/* Counter */}
              <div className="text-center mb- !py-2">
                <span className="text-lg font-bold text-slate-600">
                  {ALL_PLAYABLE_CODES.filter(c => selectedSubcategories.has(c)).length}/{ALL_PLAYABLE_CODES.length} sélectionnés
                </span>
              </div>

              {/* Grid de cards avec icônes - Glassmorphism version */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-[900px] p-1 box-border">
                {[...BLUE_SUBCATS, ...RED_SUBCATS].map(subcat => {
                  const isSelected = selectedSubcategories.has(subcat.code);
                  return (
                    <GlassCard
                      key={subcat.code}
                      selected={isSelected}
                      onClick={() => toggleSubcategory(subcat.code)}
                      borderColor={subcat.color}
                    >
                      {/* Checkbox */}
                      <GlassCheckbox
                        checked={isSelected}
                        color={subcat.color}
                      />

                      {/* Code Badge */}
                      <GlassBadge color={subcat.color}>
                        {subcat.code}
                      </GlassBadge>

                      {/* Math Illustration */}
                      <div className="w-full h-20 mb-1 flex items-center justify-center">
                        <div className="text-4xl md:text-5xl" style={{
                          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                        }}>
                          {subcat.icon}
                        </div>
                      </div>

                      {/* Name */}
                      <div className="text-sm md:text-base text-center leading-tight font-bold text-slate-800 transition-all duration-200 px-1">
                        {subcat.name}
                      </div>

                      {/* Progress dots */}
                      <ProgressDots
                        total={6}
                        active={isSelected ? 6 : 0}
                        color={subcat.color}
                      />
                    </GlassCard>
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

          {/* Buttons - Glassmorphism style */}
          <div className="flex items-center justify-center gap-4 mt-8 mb-8">
            <GlassButton
              variant="glass"
              size="lg"
              className='!p-2'
              onClick={goBack}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"/>
                  <polyline points="12 19 5 12 12 5"/>
                </svg>
              }
            >
              {t('wizard.back')}
            </GlassButton>

            {currentStep < 3 ? (
              <GlassButton
                variant="gradient"
                className='!p-2'
                size="lg"
                onClick={goNext}
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                }
              >
                {t('wizard.next')}
              </GlassButton>
            ) : (
              <GlassButton
                variant="gradient"
                className='!p-2'
                size="lg"
                onClick={startGame}
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                }
              >
                {t('wizard.startGame')}
              </GlassButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
