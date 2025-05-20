import React from 'react';
import Layout from '../components/layout/Layout';
import { useTranslation } from 'react-i18next';
import './ProductsPage.css';

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="products-page">
        <section className="products-hero">
          <div className="container">
            <div className="products-hero-content">
              <h1 className="products-title">
                <span className="title-prefix">{t('products.maas.title')}</span>
              </h1>
              <p className="products-subtitle">{t('products.maas.subtitle')}</p>
            </div>
          </div>
        </section>

        <section className="product-item fm-s">
          <div className="container">
            <div className="product-content">
              <div className="product-image">
                <img src="/images/products/fms-dashboard.png" alt={t('products.gas.fms.title')} />
              </div>
              <div className="product-info">
                <h2 className="product-name">
                  <span className="product-icon">🔥</span>
                  {t('products.gas.fms.title')}
                </h2>
                <p className="product-subtitle">{t('products.gas.fms.subtitle')}</p>
                <div className="product-description">
                  <p>{t('products.gas.fms.description1')}</p>
                  <p>{t('products.gas.fms.description2')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="product-item fm-p">
          <div className="container">
            <div className="product-content reverse">
              <div className="product-info">
                <h2 className="product-name">
                  <span className="product-icon">🔥</span>
                  {t('products.gas.fmp.title')}
                </h2>
                <p className="product-subtitle">{t('products.gas.fmp.subtitle')}</p>
                <div className="product-description">
                  <p>{t('products.gas.fmp.description')}</p>
                </div>
              </div>
              <div className="product-image">
                <img src="/images/products/fmp-dashboard.png" alt={t('products.gas.fmp.title')} />
              </div>
            </div>
          </div>
        </section>

        <section className="product-item fm-m">
          <div className="container">
            <div className="product-content">
              <div className="product-image">
                <img src="/images/products/fmm-dashboard.png" alt={t('products.gas.fmm.title')} />
              </div>
              <div className="product-info">
                <h2 className="product-name">
                  <span className="product-icon">🔥</span>
                  {t('products.gas.fmm.title')}
                </h2>
                <p className="product-subtitle">{t('products.gas.fmm.subtitle')}</p>
                <div className="product-description">
                  <p>{t('products.gas.fmm.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="product-item fm-llm">
          <div className="container">
            <div className="product-content reverse">
              <div className="product-info">
                <h2 className="product-name">
                  <span className="product-icon">🔥</span>
                  {t('products.gas.fmllm.title')}
                </h2>
                <p className="product-subtitle">{t('products.gas.fmllm.subtitle')}</p>
                <div className="product-description">
                  <p>{t('products.gas.fmllm.description')}</p>
                </div>
              </div>
              <div className="product-image">
                <img src="/images/products/fmllm-dashboard.png" alt={t('products.gas.fmllm.title')} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductsPage; 