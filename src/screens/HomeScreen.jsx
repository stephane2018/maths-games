import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useStorage } from '../contexts/StorageContext.jsx';
import { useNavigation } from '../contexts/NavigationContext.jsx';
import { getLevelInfo } from '../systems/XPSystem.js';
import { getDailyChallenge, getTodayStr, getCurrentStreak } from '../systems/DailyChallengeSystem.js';
import { GlassButton } from '../components/GlassUI.jsx';

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
    <div className="screen home-screen" style={{
      backgroundImage: 'url(/background.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, transparent 20%, transparent 80%, rgba(0, 0, 0, 0.4) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Top bar with back button */}
      <div className="top-bar" style={{ position: 'relative', zIndex: 1 }}>
        <div className="top-bar-left">
          <GlassButton
            variant="glass"
            size="sm"
            onClick={() => {
              sound.buttonClick();
              if (window.history.length > 1) {
                window.history.back();
              }
            }}
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
              </svg>
            }
          >
            {t('mode.back')}
          </GlassButton>
        </div>
        <div className="top-bar-right" />
      </div>

      <div className="screen-content stagger-children" style={{ 
        position: 'relative', 
        zIndex: 1,
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
      }}>
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
              push('Category', {
                mode: 'solo',
                isDaily: true,
                dailyBonusXP: dailyChallenge.bonusXP,
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
          <div className="daily-theme"> +{dailyChallenge.bonusXP} XP</div>
          {dailyCompleted && <div className="daily-done">{'\u2705'} {t('home.dailyDone')}</div>}
        </div>

        <div className="home-buttons">
          <GlassButton
            variant="gradient"
            size="lg"
            className='!p-3'
            onClick={() => { sound.buttonClick(); push('ModeSelect'); }}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            }
          >
            {t('home.play')}
          </GlassButton>

          <GlassButton
            variant="glass"
            size="lg"
            className='!p-3'
            onClick={() => { sound.buttonClick(); push('Profile'); }}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            }
          >
            {t('home.profile')}
          </GlassButton>

          <GlassButton
            variant="glass"
            size="lg"
            className='!p-3'
            onClick={() => { sound.buttonClick(); push('Leaderboard'); }}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 16v6m-8-6v6m4-10v10M3 3h18v18H3z"/>
              </svg>
            }
          >
            {t('home.leaderboard')}
          </GlassButton>

          <GlassButton
            variant="glass"
            size="lg"
            className='!p-3'
            onClick={() => { sound.buttonClick(); push('Settings'); }}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6m4.2-15l-1.2 2.1m-6 10.4L7.8 23M23 12h-6m-6 0H1m15-4.2l-2.1 1.2m-10.4 6L1 7.8M23 16.2l-5.1-3m-10.4-6L1 16.2"/>
              </svg>
            }
          >
            {t('home.settings')}
          </GlassButton>
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
