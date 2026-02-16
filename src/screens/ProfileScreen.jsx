import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useStorage } from '../contexts/StorageContext.jsx';
import { getLevelInfo, getAchievementDefs, getAchievementIcons } from '../systems/XPSystem.js';

export default function ProfileScreen() {
  const { t } = useI18n();
  const sound = useSound();
  const storage = useStorage();
  const navigate = useNavigate();
  const [, forceUpdate] = useState(0);

  const profile = storage.getProfile();
  const levelInfo = getLevelInfo(profile.xp);
  const achievementDefs = getAchievementDefs();
  const icons = getAchievementIcons();

  return (
    <div className="screen">
      <div className="top-bar">
        <div className="top-bar-left">
          <button
            className="back-btn"
            onClick={() => { sound.buttonClick(); navigate(-1); }}
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

        <h2 style={{ fontSize: '1.3rem', fontWeight: '900', marginTop: '8px' }}>{t('profile.achievements')}</h2>
        <div className="achievements-grid">
          {achievementDefs.map(def => {
            const unlocked = profile.achievements.includes(def.id);
            return (
              <div key={def.id} className={`achievement ${unlocked ? 'unlocked' : ''}`}>
                <div className="achievement-icon" style={{ opacity: unlocked ? '1' : '0.3' }}>{icons[def.id] || ''}</div>
                <div className="achievement-name">{t(`achievements.${def.id}`)}</div>
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
