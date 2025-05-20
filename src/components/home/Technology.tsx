import React from 'react';
import { useTranslation } from 'react-i18next';
import './Technology.css';
import traditionalIcon from '../../assets/traditional-data.svg';
import deepLearningIcon from '../../assets/deep-learning.svg';
import timeModelIcon from '../../assets/time-model.svg';

const Technology: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="technology">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('technology.title')}</h2>
          <p className="section-subtitle">{t('technology.subtitle')}</p>
        </div>

        <div className="tech-cards">
          <div className="tech-card">
            <div className="tech-icon">
              <img src={traditionalIcon} alt="Traditional Data Model" />
            </div>
            <h3 className="tech-title">{t('technology.traditional.title')}</h3>
            <p className="tech-subtitle">{t('technology.traditional.subtitle')}</p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">
              <img src={deepLearningIcon} alt="Deep Learning" />
            </div>
            <h3 className="tech-title">{t('technology.deepLearning.title')}</h3>
            <p className="tech-subtitle">{t('technology.deepLearning.subtitle')}</p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">
              <img src={timeModelIcon} alt="Time Series Model" />
            </div>
            <h3 className="tech-title">{t('technology.timeModel.title')}</h3>
            <p className="tech-subtitle">{t('technology.timeModel.subtitle')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology; 