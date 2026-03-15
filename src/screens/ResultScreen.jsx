import { useEffect, useRef } from 'react';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useStorage } from '../contexts/StorageContext.jsx';
import { useNavigation } from '../contexts/NavigationContext.jsx';
import { calculateMatchXP, addXP, getLevelInfo, checkAchievements, updateProfileAfterMatch, getAchievementIcons } from '../systems/XPSystem.js';
import { updateStreak, getTodayStr } from '../systems/DailyChallengeSystem.js';
import { createConfetti } from '../utils/confetti.js';
import { GlassButton } from '../components/GlassUI.jsx';

export default function ResultScreen() {
  const { t } = useI18n();
  const sound = useSound();
  const storage = useStorage();
  const { push, goHome, sharedState } = useNavigation();
  const containerRef = useRef(null);
  const processedRef = useRef(false);

  const { winner, blueScore, redScore, mode, blueName, redName, blueStats, redStats, categories, difficulty, numRounds, fromTeacher, classroomId, blueStudentId, redStudentId } = sharedState || {};

  const isPlayerWin = winner === 'blue';
  const playerStats = blueStats || {};
  const matchStats = {
    won: isPlayerWin,
    correctAnswers: playerStats.totalCorrect || 0,
    totalAnswered: playerStats.totalAnswered || 0,
    accuracy: playerStats.accuracy || 0,
    bestStreak: playerStats.bestStreak || 0,
    streakBonuses: Math.floor((playerStats.bestStreak || 0) / 3),
    fastestAnswer: playerStats.fastestAnswer,
    categoryBreakdown: playerStats.categoryBreakdown || {},
  };

  const isDaily = sharedState?.isDaily || false;
  const baseXP = calculateMatchXP(matchStats);
  let dailyBonusXP = 0;

  // Process XP and achievements once
  let newAchievements = [];
  let levelInfo = { level: '-', leveledUp: false };

  if (!processedRef.current) {
    processedRef.current = true;
    if (!storage.isSchoolMode()) {
      updateProfileAfterMatch(matchStats);

      // Daily challenge bonus
      if (isDaily) {
        const profile = storage.getProfile();
        const today = getTodayStr();
        if (profile.dailyChallenge?.lastCompleted !== today) {
          dailyBonusXP = 25;
          const streakResult = updateStreak(profile);
          profile.dailyChallenge = {
            lastCompleted: streakResult.lastCompleted,
            streak: streakResult.streak,
          };
          storage.saveProfile(profile);
        }
      }

      levelInfo = addXP(baseXP + dailyBonusXP);
      newAchievements = checkAchievements(matchStats);

      // Save match to leaderboard
      storage.addMatchRecord({
        id: Date.now(),
        date: new Date().toISOString(),
        mode,
        blueName, redName,
        winner,
        blueScore, redScore,
        blueStats: {
          correct: blueStats?.totalCorrect || 0,
          total: blueStats?.totalAnswered || 0,
          accuracy: blueStats?.accuracy || 0,
          bestStreak: blueStats?.bestStreak || 0,
          categoryBreakdown: blueStats?.categoryBreakdown || {},
        },
        redStats: {
          correct: redStats?.totalCorrect || 0,
          total: redStats?.totalAnswered || 0,
          accuracy: redStats?.accuracy || 0,
          bestStreak: redStats?.bestStreak || 0,
          categoryBreakdown: redStats?.categoryBreakdown || {},
        },
        difficulty: difficulty || 'medium',
        categories: categories || [],
      });

      // Save teacher match history
      if (fromTeacher && classroomId) {
        storage.addTeacherMatch({
          id: Date.now(),
          date: new Date().toISOString(),
          classroomId,
          blueStudentId,
          redStudentId,
          blueName,
          redName,
          winner,
          blueScore,
          redScore,
          blueStats: {
            correct: blueStats?.totalCorrect || 0,
            total: blueStats?.totalAnswered || 0,
            accuracy: blueStats?.accuracy || 0,
            bestStreak: blueStats?.bestStreak || 0,
            categoryBreakdown: blueStats?.categoryBreakdown || {},
          },
          redStats: {
            correct: redStats?.totalCorrect || 0,
            total: redStats?.totalAnswered || 0,
            accuracy: redStats?.accuracy || 0,
            bestStreak: redStats?.bestStreak || 0,
            categoryBreakdown: redStats?.categoryBreakdown || {},
          },
          difficulty: difficulty || 'medium',
          categories: categories || [],
        });
      }
    }
  }

  const xpEarned = baseXP + dailyBonusXP;

  // Sound + confetti
  useEffect(() => {
    if (isPlayerWin) {
      sound.win();
    } else if (winner === 'red') {
      sound.lose();
    }

    if (isPlayerWin && containerRef.current) {
      const timeout = setTimeout(() => createConfetti(containerRef.current), 300);
      return () => clearTimeout(timeout);
    }
  }, []);

  let winnerText, winnerClass;
  if (winner === 'blue') {
    winnerText = t('result.blueWins');
    winnerClass = 'blue';
  } else if (winner === 'red') {
    winnerText = t('result.redWins');
    winnerClass = 'red';
  } else {
    winnerText = t('result.draw');
    winnerClass = 'draw';
  }

  const accuracy = playerStats.totalAnswered > 0
    ? Math.round(playerStats.accuracy * 100) : 0;

  const icons = getAchievementIcons();

  return (
    <div className="screen" style={{
      backgroundImage: 'url(/background.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      position: 'relative',
    }} ref={containerRef}>
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
      <div className="screen-content stagger-children" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className={`result-winner ${winnerClass} anim-bounce-in`}>{winnerText}</h1>

        <div className="card result-card">
          {/* Score */}
          <div className="result-score-display">
            <div className="result-score-team">
              <div className="result-score-value result-score-value--blue">{String(blueScore)}</div>
              <div className="result-score-label">{t('game.blue')}</div>
            </div>
            <div className="result-score-separator">-</div>
            <div className="result-score-team">
              <div className="result-score-value result-score-value--red">{String(redScore)}</div>
              <div className="result-score-label">{mode === 'solo' ? 'AI' : t('game.red')}</div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="result-stats">
            <div className="result-stat result-stat--green">
              <div className="result-stat-value">{String(playerStats.totalCorrect || 0)}</div>
              <div className="result-stat-label">{t('result.correct')}</div>
            </div>
            <div className="result-stat result-stat--blue">
              <div className="result-stat-value">{`${accuracy}%`}</div>
              <div className="result-stat-label">{t('result.accuracy')}</div>
            </div>
            <div className="result-stat result-stat--yellow">
              <div className="result-stat-value">{String(playerStats.bestStreak || 0)}</div>
              <div className="result-stat-label">{t('result.bestStreak')}</div>
            </div>
            <div className="result-stat result-stat--purple">
              <div className="result-stat-value">{`+${xpEarned}`}</div>
              <div className="result-stat-label">{t('result.xpEarned')}{dailyBonusXP > 0 ? ` (+${dailyBonusXP} bonus)` : ''}</div>
            </div>
          </div>

          {/* Level up */}
          {levelInfo.leveledUp && (
            <div className="result-level-up anim-bounce-in">
              {`LEVEL UP! ${t('profile.level', { n: levelInfo.newLevel })}`}
            </div>
          )}

          {/* New achievements */}
          {newAchievements.length > 0 && (
            <div className="result-achievements">
              {newAchievements.map(id => (
                <div key={id} className="result-achievement-badge anim-bounce-in">
                  <span className="result-achievement-icon">{icons[id] || ''}</span>
                  <span className="result-achievement-name">{t(`achievements.${id}`)}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '400px' }}>
          <GlassButton
            variant="gradient"
            size="lg"
            className="w-full"
            onClick={() => {
              sound.buttonClick();
              push('Game', { mode, categories, difficulty: difficulty || 'medium', numRounds: numRounds || 3, blueName, redName, fromTeacher, classroomId, blueStudentId, redStudentId }, true);
            }}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
              </svg>
            }
          >
            {t('result.quickReplay')}
          </GlassButton>
          <div style={{ display: 'flex', gap: '12px' }}>
            <GlassButton
              variant="glass"
              size="lg"
              className="flex-1"
              onClick={() => {
                sound.buttonClick();
                push('Category', { mode }, true);
              }}
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              }
            >
              {t('result.playAgain')}
            </GlassButton>

            <GlassButton
              variant="outline"
              size="lg"
              className="flex-1"
              onClick={() => { sound.buttonClick(); goHome(); }}
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              }
            >
              {t('result.home')}
            </GlassButton>
          </div>
          {fromTeacher && (
            <GlassButton
              variant="glass"
              size="lg"
              className="w-full"
              onClick={() => { sound.buttonClick(); push('Teacher', {}, true); }}
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              }
            >
              {t('result.backToTeacher')}
            </GlassButton>
          )}
        </div>
      </div>
    </div>
  );
}
