import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useStorage } from '../contexts/StorageContext.jsx';
import { getRoundTime, setRoundTime, ROUND_TIME_OPTIONS } from '../engine/GameConfig.js';

function Toggle({ label, description, isActive, onChange }) {
  const [active, setActive] = useState(isActive);

  const handleClick = () => {
    const newState = !active;
    setActive(newState);
    onChange(newState);
  };

  return (
    <div className="toggle-container" style={{ justifyContent: 'space-between', width: '100%', maxWidth: '400px' }}>
      <div>
        <div style={{ fontWeight: '700' }}>{label}</div>
        {description && <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{description}</div>}
      </div>
      <button className={`toggle ${active ? 'active' : ''}`} onClick={handleClick} />
    </div>
  );
}

export default function SettingsScreen() {
  const { t, lang, setLang } = useI18n();
  const sound = useSound();
  const storage = useStorage();
  const navigate = useNavigate();
  const [currentRoundTime, setCurrentRoundTime] = useState(getRoundTime());
  const [currentDifficulty, setCurrentDifficulty] = useState(
    localStorage.getItem('math-tow-difficulty') || 'medium'
  );

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
        <h1 className="title">{t('settings.title')}</h1>

        <div className="card" style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Toggle
            label={t('settings.sound')}
            description={null}
            isActive={sound.isEnabled()}
            onChange={(enabled) => {
              sound.setEnabled(enabled);
              if (enabled) sound.buttonClick();
            }}
          />

          <Toggle
            label={t('settings.schoolMode')}
            description={t('settings.schoolModeDesc')}
            isActive={storage.isSchoolMode()}
            onChange={(enabled) => {
              storage.setSchoolMode(enabled);
              sound.buttonClick();
            }}
          />

          <div style={{ width: '100%' }}>
            <div style={{ fontWeight: '700', marginBottom: '8px' }}>{t('settings.roundTime')}</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {ROUND_TIME_OPTIONS.map(sec => {
                const label = sec < 60 ? `${sec}s` : `${sec / 60}min`;
                return (
                  <button
                    key={sec}
                    className={`btn ${currentRoundTime === sec ? 'btn-blue' : 'btn-outline'}`}
                    style={{ flex: '1', padding: '10px', minWidth: '60px' }}
                    onClick={() => {
                      sound.buttonClick();
                      setRoundTime(sec);
                      setCurrentRoundTime(sec);
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ width: '100%' }}>
            <div style={{ fontWeight: '700', marginBottom: '8px' }}>{t('settings.language')}</div>
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
          </div>

          <div style={{ width: '100%' }}>
            <div style={{ fontWeight: '700', marginBottom: '8px' }}>{t('settings.difficulty')}</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['easy', 'medium', 'hard'].map(diff => (
                <button
                  key={diff}
                  className={`btn ${currentDifficulty === diff ? 'btn-blue' : 'btn-outline'}`}
                  style={{ flex: '1', padding: '10px' }}
                  onClick={() => {
                    sound.buttonClick();
                    localStorage.setItem('math-tow-difficulty', diff);
                    setCurrentDifficulty(diff);
                  }}
                >
                  {t(`difficulty.${diff}`)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
