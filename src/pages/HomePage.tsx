import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Technology from '../components/home/Technology';
import Innovation from '../components/home/Innovation';
import CustomerCentric from '../components/home/CustomerCentric';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="home-page">
        <Hero />
        <Technology />
        <Innovation />
        <CustomerCentric />
      </div>
    </Layout>
  );
};

export default HomePage; 