import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useNavigation } from '../contexts/NavigationContext.jsx';

export default function AboutScreen() {
  const { t } = useI18n();
  const sound = useSound();
  const { pop, push } = useNavigation();

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
        {/* Section Créateur */}
        <div className="creator-section card">
          <div className="creator-photo-container">
            <img 
              src="/creator.jpeg" 
              alt="Léopold Minko - Créateur de Mathlaclasse" 
              className="creator-photo"
            />
          </div>
          <div className="creator-info">
            <h2 className="creator-name">{t('about.creatorName')}</h2>
            <p className="creator-title">{t('about.creatorTitle')}</p>
            <p className="creator-bio">{t('about.creatorBio')}</p>
            
            {/* Liens de contact */}
            <div className="creator-contact">
              <a 
                href="https://www.instagram.com/math.laclasse?igsh=MTQ0OHBleG9lYTFwaQ%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/share/1XJa7cU25h/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                Messenger
              </a>
              <a 
                href="tel:+32488434262" 
                className="contact-link phone"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {t('about.phone')}
              </a>
            </div>
          </div>
        </div>

        {/* Section À propos */}
        <div className="about-card card">
          <h1 className="title" style={{ marginBottom: '24px' }}>{t('about.title')}</h1>

          <div className="about-list">
            <AboutItem label={t('about.project')} value={t('about.projectName')} />
            <AboutItem label={t('about.year')} value={t('about.yearValue')} />
            <AboutItem label={t('about.version')} value={t('about.versionValue')} />
          </div>

          <p className="about-description">{t('about.description')}</p>
        </div>

        {/* Section Informations légales */}
        <div className="about-card card">
          <h2 className="title" style={{ marginBottom: '24px', fontSize: '1.5rem' }}>{t('legal.title')}</h2>

          <div className="about-list">
            <AboutItem label={t('legal.responsible')} value="Léopold Minko" />
            <AboutItem label={t('legal.contact')} value="Instagram / Messenger" />
            <AboutItem label={t('legal.hosting')} value={t('legal.hostingValue')} />
          </div>

          <div style={{ marginTop: '16px' }}>
            <div style={{ fontWeight: 700, marginBottom: '8px' }}>{t('legal.gdpr')}</div>
            <p className="about-description" style={{ marginBottom: '12px' }}>{t('legal.gdprText')}</p>
            <button
              className="btn btn-outline"
              style={{ width: '100%' }}
              onClick={() => { sound.buttonClick(); push('Settings'); }}
            >
              {t('legal.deleteLink')}
            </button>
          </div>
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
