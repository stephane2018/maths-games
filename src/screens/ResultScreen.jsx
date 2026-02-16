import { useEffect, useRef } from 'react';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useStorage } from '../contexts/StorageContext.jsx';
import { useNavigation } from '../contexts/NavigationContext.jsx';
import { calculateMatchXP, addXP, getLevelInfo, checkAchievements, updateProfileAfterMatch, getAchievementIcons } from '../systems/XPSystem.js';
import { updateStreak, getTodayStr } from '../systems/DailyChallengeSystem.js';
import { createConfetti } from '../utils/confetti.js';

export default function ResultScreen() {
  const { t } = useI18n();
  const sound = useSound();
  const storage = useStorage();
  const { push, goHome, sharedState } = useNavigation();
  const containerRef = useRef(null);
  const processedRef = useRef(false);

  const { winner, blueScore, redScore, mode, blueName, redName, blueStats, redStats, categories, difficulty, numRounds } = sharedState || {};

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
    <div className="screen" style={{ background: 'var(--bg)' }} ref={containerRef}>
      <div className="screen-content stagger-children">
        <h1 className={`result-winner ${winnerClass} anim-bounce-in`}>{winnerText}</h1>

        <div className="card result-card">
          {/* Score */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '16px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--blue)' }}>{String(blueScore)}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{t('game.blue')}</div>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--text-light)', alignSelf: 'center' }}>-</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--red)' }}>{String(redScore)}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{mode === 'solo' ? 'AI' : t('game.red')}</div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="result-stats">
            <div className="result-stat" style={{ background: 'var(--green-light)' }}>
              <div className="result-stat-value" style={{ color: 'var(--green)' }}>{String(playerStats.totalCorrect || 0)}</div>
              <div className="result-stat-label">{t('result.correct')}</div>
            </div>
            <div className="result-stat" style={{ background: 'var(--blue-light)' }}>
              <div className="result-stat-value" style={{ color: 'var(--blue)' }}>{`${accuracy}%`}</div>
              <div className="result-stat-label">{t('result.accuracy')}</div>
            </div>
            <div className="result-stat" style={{ background: '#FEF3C7' }}>
              <div className="result-stat-value" style={{ color: 'var(--yellow-dark)' }}>{String(playerStats.bestStreak || 0)}</div>
              <div className="result-stat-label">{t('result.bestStreak')}</div>
            </div>
            <div className="result-stat" style={{ background: '#F3E8FF' }}>
              <div className="result-stat-value" style={{ color: 'var(--purple)' }}>{`+${xpEarned}`}</div>
              <div className="result-stat-label">{t('result.xpEarned')}{dailyBonusXP > 0 ? ` (+${dailyBonusXP} bonus)` : ''}</div>
            </div>
          </div>

          {/* Level up */}
          {levelInfo.leveledUp && (
            <div className="anim-bounce-in" style={{
              textAlign: 'center', padding: '12px',
              background: 'linear-gradient(135deg, #FCD34D, #F59E0B)',
              borderRadius: 'var(--radius-sm)', color: 'white',
              fontWeight: '900', fontSize: '1.2rem', marginTop: '12px',
            }}>
              {`LEVEL UP! ${t('profile.level', { n: levelInfo.newLevel })}`}
            </div>
          )}

          {/* New achievements */}
          {newAchievements.length > 0 && (
            <div style={{ marginTop: '12px', textAlign: 'center' }}>
              {newAchievements.map(id => (
                <div key={id} className="anim-bounce-in" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '8px 16px', background: '#FFFBEB',
                  borderRadius: 'var(--radius-full)', margin: '4px',
                  border: '2px solid var(--yellow)',
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{icons[id] || ''}</span>
                  <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>{t(`achievements.${id}`)}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '400px' }}>
          <button
            className="btn btn-green btn-lg"
            style={{ width: '100%' }}
            onClick={() => {
              sound.buttonClick();
              push('Game', { mode, categories, difficulty: difficulty || 'medium', numRounds: numRounds || 3, blueName, redName }, true);
            }}
          >
            {t('result.quickReplay')}
          </button>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              className="btn btn-blue btn-lg"
              style={{ flex: '1' }}
              onClick={() => {
                sound.buttonClick();
                push('Category', { mode }, true);
              }}
            >
              {t('result.playAgain')}
            </button>

            <button
              className="btn btn-outline btn-lg"
              style={{ flex: '1' }}
              onClick={() => { sound.buttonClick(); goHome(); }}
            >
              {t('result.home')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
