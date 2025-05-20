import React from 'react';
import Layout from '../components/layout/Layout';
import AboutHero from '../components/about/AboutHero';
import CompanyInfo from '../components/about/CompanyInfo';
import TeamMembers from '../components/about/TeamMembers';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="about-page">
        <AboutHero />
        <CompanyInfo />
        <TeamMembers />
      </div>
    </Layout>
  );
};

export default AboutPage; 