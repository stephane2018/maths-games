import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useStorage } from '../contexts/StorageContext.jsx';
import { useNavigation } from '../contexts/NavigationContext.jsx';
import { getLevelInfo } from '../systems/XPSystem.js';
import { getDailyChallenge, getTodayStr, getCurrentStreak } from '../systems/DailyChallengeSystem.js';

function Logo() {
  return (
    <svg viewBox="0 0 120 120" className="home-logo">
      <circle cx="35" cy="60" r="28" fill="#3B82F6" opacity="0.9" />
      <circle cx="85" cy="60" r="28" fill="#EF4444" opacity="0.9" />
      <line x1="20" y1="60" x2="100" y2="60" stroke="#92400E" strokeWidth="5" strokeLinecap="round" />
      <circle cx="60" cy="60" r="6" fill="#FCD34D" />
      <text x="35" y="67" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="system-ui">+</text>
      <text x="85" y="67" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="system-ui">{'\u00d7'}</text>
    </svg>
  );
}

export default function HomeScreen() {
  const { t, lang, setLang } = useI18n();
  const sound = useSound();
  const storage = useStorage();
  const { push } = useNavigation();

  const profile = storage.getProfile();
  const levelInfo = getLevelInfo(profile.xp);
  const today = getTodayStr();
  const dailyChallenge = getDailyChallenge(today);
  const streak = getCurrentStreak(profile);
  const dailyCompleted = profile.dailyChallenge?.lastCompleted === today;

  return (
    <div className="screen home-screen">
      <div className="screen-content stagger-children">
        <Logo />
        <h1 className="home-title">{t('app.title')}</h1>
        <p className="subtitle">{t('app.subtitle')}</p>
        <p className="home-brand">{t('app.brand')}</p>

        {profile.xp > 0 && (
          <div className="xp-bar-container" style={{ marginTop: '8px' }}>
            <div className="xp-bar-fill" style={{ width: `${levelInfo.progress * 100}%` }} />
            <span className="xp-bar-text">{t('profile.level', { n: levelInfo.level })}</span>
          </div>
        )}

        <div
          className={`daily-challenge-card ${dailyCompleted ? 'completed' : ''}`}
          style={{ borderLeftColor: dailyChallenge.themeColor }}
          onClick={() => {
            if (!dailyCompleted) {
              sound.buttonClick();
              push('Game', {
                mode: 'solo',
                categories: dailyChallenge.categories,
                difficulty: dailyChallenge.difficulty,
                numRounds: dailyChallenge.numRounds,
                blueName: t('game.blue'),
                redName: 'AI',
                isDaily: true,
              }, true);
            }
          }}
        >
          {streak > 0 && (
            <div className="streak-badge">
              <span>{'\uD83D\uDD25'}</span> {streak} {t('home.streakDays')}
            </div>
          )}
          <div className="daily-title">{dailyChallenge.themeIcon} {t('home.dailyChallenge')}</div>
          <div className="daily-theme">{t(`themes.${dailyChallenge.theme}`)} — +{dailyChallenge.bonusXP} XP</div>
          {dailyCompleted && <div className="daily-done">{'\u2705'} {t('home.dailyDone')}</div>}
        </div>

        <div className="home-buttons">
          <button
            className="btn btn-blue btn-lg"
            onClick={() => { sound.buttonClick(); push('ModeSelect'); }}
          >
            {t('home.play')}
          </button>

          <button
            className="btn btn-outline btn-lg"
            onClick={() => { sound.buttonClick(); push('Profile'); }}
          >
            {t('home.profile')}
          </button>

          <button
            className="btn btn-outline btn-lg"
            onClick={() => { sound.buttonClick(); push('Leaderboard'); }}
          >
            {t('home.leaderboard')}
          </button>

          <button
            className="btn btn-outline btn-lg"
            onClick={() => { sound.buttonClick(); push('Settings'); }}
          >
            {t('home.settings')}
          </button>
        </div>

        <div className="home-bottom-row">
          <div className="lang-switcher">
            {['fr', 'en', 'nl'].map(l => (
              <button
                key={l}
                className={`lang-btn ${lang === l ? 'active' : ''}`}
                onClick={() => { sound.buttonClick(); setLang(l); }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className="about-btn"
            onClick={() => { sound.buttonClick(); push('About'); }}
            dangerouslySetInnerHTML={{ __html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>' }}
          />
        </div>
      </div>
    </div>
  );
}
