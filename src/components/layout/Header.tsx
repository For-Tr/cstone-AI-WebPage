import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { isI18nInitialized } from '../../i18n';
import './Header.css';
import logo from '../../assets/logo.svg'; // 假设logo存放在assets文件夹

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkI18n = () => {
      if (isI18nInitialized()) {
        setIsReady(true);
      } else {
        setTimeout(checkI18n, 100);
      }
    };
    checkI18n();
  }, []);

  const changeLanguage = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng);
      localStorage.setItem('i18nextLng', lng);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (!isReady) {
    return null;
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="/">
              <img src={logo} alt={t('company.name')} />
              <span>{t('company.name')}</span>
            </a>
          </div>

          <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="/">{t('header.home')}</a></li>
              <li><a href="/about">{t('header.about')}</a></li>
              <li><a href="/products">{t('header.products')}</a></li>
              <li><a href="/news">{t('header.news')}</a></li>
              <li><a href="/contact">{t('header.contact')}</a></li>
            </ul>
          </nav>

          <div className="language-switcher">
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('zh')}>简</button>
            <button onClick={() => changeLanguage('zh-TW')}>繁</button>
          </div>

          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 