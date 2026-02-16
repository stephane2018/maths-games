import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useNavigation } from '../contexts/NavigationContext.jsx';

export default function AboutScreen() {
  const { t } = useI18n();
  const sound = useSound();
  const { pop } = useNavigation();

  return (
    <div className="screen">
      <div className="top-bar">
        <div className="top-bar-left">
          <button
            className="back-btn"
            onClick={() => { sound.buttonClick(); pop(); }}
          >
            {t('mode.back')}
          </button>
        </div>
        <div className="top-bar-right" />
      </div>

      <div className="screen-content">
        <div className="about-card card">
          <h1 className="title" style={{ marginBottom: '24px' }}>{t('about.title')}</h1>

          <div className="about-list">
            <AboutItem label={t('about.creator')} value={t('about.creatorName')} />
            <AboutItem label={t('about.project')} value={t('about.projectName')} />
            <AboutItem label={t('about.year')} value={t('about.yearValue')} />
            <AboutItem label={t('about.version')} value={t('about.versionValue')} />
          </div>

          <p className="about-description">{t('about.description')}</p>
        </div>
      </div>
    </div>
  );
}

function AboutItem({ label, value }) {
  return (
    <div className="about-item">
      <span className="about-item-label">{label}</span>
      <span className="about-item-value">{value}</span>
    </div>
  );
}
