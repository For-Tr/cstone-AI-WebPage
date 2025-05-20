import React from 'react';
import { useTranslation } from 'react-i18next';
import './Innovation.css';

const Innovation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="innovation">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('innovation.title')}</h2>
          <p className="section-subtitle">{t('innovation.subtitle')}</p>
        </div>

        <div className="product-grid">
          <div className="product-card">
            <div className="product-icon fm-icon"></div>
            <h3 className="product-title">{t('innovation.products.fm.title')}</h3>
            <p className="product-desc">{t('innovation.products.fm.description')}</p>
          </div>

          <div className="product-card">
            <div className="product-icon maas-icon"></div>
            <h3 className="product-title">{t('innovation.products.maas.title')}</h3>
            <p className="product-desc">{t('innovation.products.maas.description')}</p>
          </div>

          <div className="product-card">
            <div className="product-icon llm-icon"></div>
            <h3 className="product-title">{t('innovation.products.llm.title')}</h3>
            <p className="product-desc">{t('innovation.products.llm.description')}</p>
          </div>

          <div className="product-card">
            <div className="product-icon tsdb-icon"></div>
            <h3 className="product-title">{t('innovation.products.tsdb.title')}</h3>
            <p className="product-desc">{t('innovation.products.tsdb.description')}</p>
          </div>

          <div className="product-card">
            <div className="product-icon lic-icon"></div>
            <h3 className="product-title">{t('innovation.products.lic.title')}</h3>
            <p className="product-desc">{t('innovation.products.lic.description')}</p>
          </div>

          <div className="product-card">
            <div className="product-icon report-icon"></div>
            <h3 className="product-title">{t('innovation.products.report.title')}</h3>
            <p className="product-desc">{t('innovation.products.report.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation; 