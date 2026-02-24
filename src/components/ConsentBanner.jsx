import { useState } from 'react';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useStorage } from '../contexts/StorageContext.jsx';

const CONSENT_KEY = 'math-tow-consent';

export default function ConsentBanner() {
  const { t } = useI18n();
  const storage = useStorage();
  const [visible, setVisible] = useState(() => !localStorage.getItem(CONSENT_KEY));

  if (!visible) return null;

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'true');
    setVisible(false);
  };

  const handleSchoolMode = () => {
    localStorage.setItem(CONSENT_KEY, 'school');
    storage.setSchoolMode(true);
    setVisible(false);
  };

  return (
    <div className="consent-banner">
      <p className="consent-text">{t('consent.text')}</p>
      <div className="consent-buttons">
        <button className="btn btn-blue" onClick={handleAccept}>
          {t('consent.accept')}
        </button>
        <button className="btn btn-outline" onClick={handleSchoolMode}>
          {t('consent.schoolMode')}
        </button>
      </div>
    </div>
  );
}
