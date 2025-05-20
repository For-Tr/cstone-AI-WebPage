import React from 'react';
import { useTranslation } from 'react-i18next';
import './CustomerCentric.css';

const CustomerCentric: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="customer-centric">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('customerCentric.title')}</h2>
          <p className="section-subtitle">{t('customerCentric.subtitle')}</p>
        </div>

        <div className="customer-content">
          <div className="customer-description">
            <p>{t('customerCentric.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerCentric; 