import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { useTranslation } from 'react-i18next';
import './ContactPage.css';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [captchaText, setCaptchaText] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(captcha);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaptchaInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput.toUpperCase() === captchaText) {
      // Form submission logic here
      alert(t('contact.form.successMessage'));
      // Reset form and captcha
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: ''
      });
      setCaptchaInput('');
      generateCaptcha();
    } else {
      alert(t('contact.form.captchaError'));
    }
  };

  const CaptchaDisplay = () => {
    return (
      <div className="captcha-display">
        {captchaText.split('').map((char, index) => (
          <span 
            key={index} 
            className="captcha-char"
            style={{ 
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
              color: `rgb(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)})`
            }}
          >
            {char}
          </span>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <div className="contact-page">
        <section className="contact-hero">
          <div className="container">
            <div className="contact-hero-content">
              <h1 className="contact-title">{t('contact.title')}</h1>
              <p className="contact-subtitle">{t('contact.subtitle')}</p>
            </div>
          </div>
        </section>

        <section className="contact-info">
          <div className="container">
            <h2 className="contact-section-title">{t('contact.findUs')}</h2>
            <div className="contact-content">
              <div className="contact-details">
                <div className="contact-block">
                  <h3 className="contact-block-title">{t('contact.businessInquiry')}</h3>
                  <p>{t('contact.business.name')}</p>
                  <p>{t('contact.business.phone')}: 13928781874</p>
                  <p>{t('contact.business.email')}: Tianyu.Ouyang@cstoneai.com</p>
                </div>

                <div className="contact-block">
                  <h3 className="contact-block-title">{t('contact.technicalSupport')}</h3>
                  <p>{t('contact.technical.name')}</p>
                  <p>{t('contact.technical.phone')}: 13880203388</p>
                  <p>{t('contact.technical.email')}: Yaozhong.Zhang@cstoneai.com</p>
                </div>

                <div className="contact-block">
                  <h3 className="contact-block-title">OVERSEAS</h3>
                  <p>Cheng Li</p>
                  <p>{t('contact.phone')}: +86 17512058716</p>
                  <p>{t('contact.email')}: Cheng.Li@cstoneai.com</p>
                </div>
              </div>
              <div className="contact-map">
                <img 
                  src="/images/map-static.png" 
                  alt={t('contact.address')} 
                  className="static-map"
                />
                <p className="map-address">{t('contact.address')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form">
          <div className="container">
            <h2 className="contact-section-title">{t('contact.submitRequirements')}</h2>
            <form className="requirements-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder={t('contact.form.namePlaceholder')} 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">{t('contact.form.company')}</label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder={t('contact.form.companyPlaceholder')} 
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">{t('contact.form.phone')}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder={t('contact.form.phonePlaceholder')} 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder={t('contact.form.emailPlaceholder')} 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')}</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder={t('contact.form.messagePlaceholder')}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <div className="form-group captcha">
                <div className="captcha-container">
                  <div className="captcha-image">
                    <CaptchaDisplay />
                  </div>
                  <button 
                    type="button" 
                    className="refresh-captcha" 
                    onClick={generateCaptcha}
                    aria-label="Refresh Captcha"
                  >
                    🔄
                  </button>
                  <div className="captcha-input-container">
                    <input
                      type="text"
                      placeholder={t('contact.form.captchaPlaceholder')}
                      value={captchaInput}
                      onChange={handleCaptchaChange}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="submit-btn">{t('contact.form.submit')}</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage; 