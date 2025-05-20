import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutHero.css';

const AboutHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="about-hero">
      <div className="about-hero-wrapper">
        <div className="about-hero-content">
          <h1 className="about-title">{t('about.title')}</h1>
          <p className="about-subtitle">{t('about.subtitle')}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero; 