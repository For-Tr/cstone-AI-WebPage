import React from 'react';
import Layout from '../components/layout/Layout';
import { useTranslation } from 'react-i18next';
import './NewsPage.css';

const NewsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="news-page">
        <section className="news-hero">
          <div className="container">
            <div className="news-hero-content">
              <h1 className="news-title">{t('news.title')}</h1>
              <p className="news-subtitle">{t('news.subtitle')}</p>
            </div>
          </div>
        </section>

        <section className="news-list">
          <div className="container">
            <article className="news-item">
              <div className="news-image">
                <img src="/images/news/deepseek-logo.png" alt="DeepSeek" />
              </div>
              <div className="news-content">
                <h2 className="news-item-title">{t('news.items.deepseek.title')}</h2>
                <p className="news-item-description">{t('news.items.deepseek.description')}</p>
                <div className="news-meta">
                  <span className="news-date">2023-04-21</span>
                  <span className="news-views">12</span>
                </div>
              </div>
            </article>

            <article className="news-item">
              <div className="news-image">
                <img src="/images/news/ai-safety.png" alt="AI Safety" />
              </div>
              <div className="news-content">
                <h2 className="news-item-title">{t('news.items.safety.title')}</h2>
                <p className="news-item-description">{t('news.items.safety.description')}</p>
                <div className="news-meta">
                  <span className="news-date">2023-04-21</span>
                  <span className="news-views">8</span>
                </div>
              </div>
            </article>

            <article className="news-item">
              <div className="news-image">
                <img src="/images/news/smart-management.png" alt="Smart Management" />
              </div>
              <div className="news-content">
                <h2 className="news-item-title">{t('news.items.management.title')}</h2>
                <p className="news-item-description">{t('news.items.management.description')}</p>
                <div className="news-meta">
                  <span className="news-date">2023-04-21</span>
                  <span className="news-views">4</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="news-pagination">
          <div className="container">
            <div className="pagination">
              <a href="#" className="pagination-prev">{t('news.pagination.prev')}</a>
              <span className="pagination-page current">1</span>
              <a href="#" className="pagination-next">{t('news.pagination.next')}</a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NewsPage; 