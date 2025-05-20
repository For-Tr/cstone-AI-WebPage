import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-prefix">{t('hero.title')}</span>
            <span className="title-suffix">{t('hero.subtitle')}</span>
          </h1>
          
          <div className="ai-core-info">
            <p className="ai-core-title">{t('aiCore.title')}</p>
            <p className="ai-core-desc">{t('aiCore.description1')}</p>
            <p className="ai-core-desc">{t('aiCore.description2')}</p>
          </div>
          
          <div className="platform-button">
            <a href="http://120.24.63.167/fms" className="btn-platform">
              {t('platform.button')} <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 