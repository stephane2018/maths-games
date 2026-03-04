import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useNavigation } from '../contexts/NavigationContext.jsx';
import { GlassButton } from '../components/GlassUI.jsx';

function SoloIcon() {
  return (
    <svg viewBox="0 0 80 80" className="mode-card-icon">
      <circle cx="30" cy="24" r="10" fill="#3B82F6" />
      <path d="M18 42 a12 12 0 0 1 24 0v10H18z" fill="#3B82F6" />
      <rect x="50" y="16" width="20" height="18" rx="4" fill="#94A3B8" />
      <circle cx="56" cy="25" r="2" fill="#1E293B" />
      <circle cx="64" cy="25" r="2" fill="#1E293B" />
      <rect x="48" y="38" width="24" height="14" rx="4" fill="#94A3B8" />
      <text x="40" y="64" textAnchor="middle" fill="#F59E0B" fontSize="14" fontWeight="bold" fontFamily="system-ui">VS</text>
    </svg>
  );
}

function VersusIcon() {
  return (
    <svg viewBox="0 0 80 80" className="mode-card-icon">
      <circle cx="22" cy="24" r="10" fill="#3B82F6" />
      <path d="M10 42 a12 12 0 0 1 24 0v10H10z" fill="#3B82F6" />
      <circle cx="58" cy="24" r="10" fill="#EF4444" />
      <path d="M46 42 a12 12 0 0 1 24 0v10H46z" fill="#EF4444" />
      <text x="40" y="64" textAnchor="middle" fill="#F59E0B" fontSize="14" fontWeight="bold" fontFamily="system-ui">VS</text>
    </svg>
  );
}

export default function ModeSelectScreen() {
  const { t } = useI18n();
  const sound = useSound();
  const { push, pop } = useNavigation();

  return (
    <div className="screen" style={{
      backgroundImage: 'url(/background.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'auto',
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

      <div className="screen-content" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="title anim-slide-down">{t('mode.title')}</h1>

        <div className="mode-cards">
          <div
            className="mode-card anim-slide-up"
            onClick={() => {
              sound.buttonClick();
              push('Category', { mode: 'solo' }, true);
            }}
          >
            <SoloIcon />
            <h2 className="mode-card-title">{t('mode.solo')}</h2>
            <p className="mode-card-desc">{t('mode.soloDesc')}</p>
          </div>

          <div
            className="mode-card anim-slide-up"
            style={{ animationDelay: '100ms' }}
            onClick={() => {
              sound.buttonClick();
              push('Category', { mode: 'versus' }, true);
            }}
          >
            <VersusIcon />
            <h2 className="mode-card-title">{t('mode.versus')}</h2>
            <p className="mode-card-desc">{t('mode.versusDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
