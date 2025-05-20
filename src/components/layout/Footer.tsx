import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-contact">
            <h3>{t('footer.contact')}</h3>
            <div className="phone-number">
              <i className="phone-icon"></i>
              <a href="tel:18819280027">{t('footer.phone')}</a>
            </div>
            <p className="address">{t('footer.address')}</p>
          </div>

          <div className="footer-qrcodes">
            <div className="qrcode">
              <img src="/qrcode1.png" alt="QR Code" />
            </div>
            <div className="qrcode">
              <img src="/qrcode2.png" alt="QR Code" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">{t('footer.company')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 