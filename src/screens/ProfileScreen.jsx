import { useState } from 'react';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useStorage } from '../contexts/StorageContext.jsx';
import { useNavigation } from '../contexts/NavigationContext.jsx';
import { getLevelInfo, getAchievementDefs, getAchievementIcons, getAchievementProgress } from '../systems/XPSystem.js';
import { CE1D_THEMES } from '../data/ce1dThemes.js';

export default function ProfileScreen() {
  const { t } = useI18n();
  const sound = useSound();
  const storage = useStorage();
  const { pop } = useNavigation();
  const [, forceUpdate] = useState(0);

  const profile = storage.getProfile();
  const levelInfo = getLevelInfo(profile.xp);
  const achievementDefs = getAchievementDefs();
  const icons = getAchievementIcons();
  const progress = getAchievementProgress(profile);

  const themeStats = CE1D_THEMES.map(theme => {
    let correct = 0, total = 0;
    for (const cat of theme.categories) {
      const s = profile.categoryStats[cat];
      if (s) { correct += s.correct; total += s.total; }
    }
    return {
      id: theme.id,
      color: theme.color,
      icon: theme.icon,
      correct,
      total,
      accuracy: total > 0 ? Math.round((correct / total) * 100) : null,
    };
  }).filter(s => s.total > 0);

  return (
    <div className="screen">
      <div className="top-bar">
        <div className="top-bar-left">
          <button
            className="back-btn"
            onClick={() => { sound.buttonClick(); pop(); }}
            dangerouslySetInnerHTML={{ __html: '&#8592; ' + t('mode.back') }}
          />
        </div>
        <div className="top-bar-right" />
      </div>

      <div className="screen-content stagger-children">
        <div className="profile-avatar">{String(levelInfo.level)}</div>

        <h1 className="title">{t('profile.level', { n: levelInfo.level })}</h1>
        <div className="xp-bar-container">
          <div className="xp-bar-fill" style={{ width: `${levelInfo.progress * 100}%` }} />
          <span className="xp-bar-text">{`${levelInfo.currentXP} / ${levelInfo.neededXP} XP`}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', width: '100%', maxWidth: '400px' }}>
          <div className="card" style={{ textAlign: 'center', padding: '16px' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--blue)' }}>{String(profile.xp)}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{t('profile.totalXP')}</div>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '16px' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--green)' }}>{String(profile.gamesPlayed)}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{t('profile.gamesPlayed')}</div>
          </div>
        </div>

        {themeStats.length > 0 && (
          <>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '900', marginTop: '8px' }}>{t('profile.themeStats')}</h2>
            <div className="theme-stats-container">
              {themeStats.map(stat => (
                <div key={stat.id} className="theme-stat-row">
                  <div className="theme-stat-label">
                    <span>{stat.icon}</span> {t(`themes.${stat.id}`)}
                  </div>
                  <div className="theme-stat-bar-bg">
                    <div className="theme-stat-bar-fill" style={{ width: `${stat.accuracy}%`, background: stat.color }} />
                  </div>
                  <div className="theme-stat-pct">{`${stat.accuracy}%`}</div>
                </div>
              ))}
            </div>
          </>
        )}

        <h2 style={{ fontSize: '1.3rem', fontWeight: '900', marginTop: '8px' }}>{t('profile.achievements')}</h2>
        <div className="achievements-grid">
          {achievementDefs.map(def => {
            const unlocked = profile.achievements.includes(def.id);
            const prog = progress[def.id];
            return (
              <div key={def.id} className={`achievement ${unlocked ? 'unlocked' : ''}`}>
                <div className="achievement-icon" style={{ opacity: unlocked ? '1' : '0.3' }}>{icons[def.id] || ''}</div>
                <div className="achievement-name">{t(`achievements.${def.id}`)}</div>
                {!unlocked && prog && !prog.isBinary && (
                  <div className="achievement-progress">
                    <div className="achievement-progress-bar">
                      <div className="achievement-progress-fill" style={{ width: `${(prog.current / prog.target) * 100}%` }} />
                    </div>
                    <div className="achievement-progress-text">{`${prog.current}/${prog.target}`}</div>
                  </div>
                )}
                {!unlocked && prog && prog.isBinary && (
                  <div className="achievement-progress-text">{prog.label}</div>
                )}
              </div>
            );
          })}
        </div>

        <button
          className="btn btn-outline"
          style={{ marginTop: '16px', color: 'var(--red)' }}
          onClick={() => {
            if (confirm(t('profile.resetConfirm'))) {
              storage.resetProfile();
              forceUpdate(n => n + 1);
            }
          }}
        >
          {t('profile.reset')}
        </button>
      </div>
    </div>
  );
}
