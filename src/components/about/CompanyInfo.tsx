import React from 'react';
import { useTranslation } from 'react-i18next';
import './CompanyInfo.css';
import cityImage from '../../assets/city.jpg'; // 假设城市图片存放在assets文件夹
import officeImage from '../../assets/office.jpg'; // 假设办公室图片存放在assets文件夹

const CompanyInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="company-info">
      <div className="company-intro">
        <div className="city-image">
          <img src={cityImage} alt="City" />
        </div>
        <div className="intro-text">
          <p>{t('about.companyInfo.text1')}</p>
          <p>{t('about.companyInfo.text2')}</p>
        </div>
      </div>

      <div className="product-intro">
        <div className="product-text">
          <p>{t('about.productInfo.text1')}</p>
        </div>
        <div className="office-image">
          <img src={officeImage} alt="Office" />
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo; 