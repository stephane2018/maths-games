import { useState } from 'react';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useStorage } from '../contexts/StorageContext.jsx';
import { useNavigation } from '../contexts/NavigationContext.jsx';
import { getRoundTime, setRoundTime, ROUND_TIME_OPTIONS } from '../engine/GameConfig.js';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import { GlassButton } from '../components/GlassUI.jsx';

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
  const { pop } = useNavigation();
  const [currentRoundTime, setCurrentRoundTime] = useState(getRoundTime());
  const [currentDifficulty, setCurrentDifficulty] = useState(
    localStorage.getItem('math-tow-difficulty') || 'medium'
  );
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  return (
    <div className="screen" style={{
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
      <div className="top-bar" style={{ position: 'relative', zIndex: 1 }}>
        <div className="top-bar-left">
          <GlassButton
            variant="glass"
            size="sm"
            className='p-2!'
            onClick={() => { sound.buttonClick(); pop(); }}
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

      <div className="screen-content stagger-children" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="title">{t('settings.title')}</h1>

        <div className="card settings-card">
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
            <div className="settings-label">{t('settings.roundTime')}</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {ROUND_TIME_OPTIONS.map(sec => {
                const label = sec < 60 ? `${sec}s` : `${sec / 60}min`;
                return (
                  <GlassButton
                    key={sec}
                    variant={currentRoundTime === sec ? 'gradient' : 'outline'}
                    size="md"
                    className="flex-1"
                    style={{ minWidth: '60px' }}
                    onClick={() => {
                      sound.buttonClick();
                      setRoundTime(sec);
                      setCurrentRoundTime(sec);
                    }}
                  >
                    {label}
                  </GlassButton>
                );
              })}
            </div>
          </div>

          <div style={{ width: '100%' }}>
            <div className="settings-label">{t('settings.language')}</div>
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
            <div className="settings-label">{t('settings.difficulty')}</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['easy', 'medium', 'hard'].map(diff => (
                <GlassButton
                  key={diff}
                  variant={currentDifficulty === diff ? 'gradient' : 'outline'}
                  size="md"
                  className="flex-1"
                  onClick={() => {
                    sound.buttonClick();
                    localStorage.setItem('math-tow-difficulty', diff);
                    setCurrentDifficulty(diff);
                  }}
                >
                  {t(`difficulty.${diff}`)}
                </GlassButton>
              ))}
            </div>
          </div>

          <div className="settings-danger-zone">
            <GlassButton
              variant="glass"
              size="md"
              className="w-full"
              style={{
                background: 'rgba(239, 68, 68, 0.9)',
                borderColor: 'rgba(220, 38, 38, 0.8)',
                color: 'white',
                fontWeight: '700',
              }}
              onClick={() => { sound.buttonClick(); setShowDeleteConfirm(true); }}
            >
              {t('settings.deleteAll')}
            </GlassButton>
            {deleteSuccess && (
              <div style={{ textAlign: 'center', color: 'var(--green)', fontWeight: 700, marginTop: '8px' }}>
                {t('settings.deleteSuccess')}
              </div>
            )}
          </div>
        </div>
      </div>

      <ConfirmDialog
        open={showDeleteConfirm}
        message={t('settings.deleteConfirm')}
        confirmText={t('game.yes')}
        cancelText={t('game.no')}
        onConfirm={() => {
          storage.clearAll();
          setShowDeleteConfirm(false);
          setDeleteSuccess(true);
          setCurrentDifficulty('medium');
          setCurrentRoundTime(getRoundTime());
          setTimeout(() => setDeleteSuccess(false), 3000);
        }}
        onCancel={() => setShowDeleteConfirm(false)}
      />
    </div>
  );
}
