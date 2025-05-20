import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './TeamMembers.css';
import ceoImage from '../../assets/ceo.jpg'; // 假设团队成员图片存放在assets文件夹
import ctoImage from '../../assets/cto.jpg';

const TeamMembers: React.FC = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const teamMembers = t('about.teamMembers', { returnObjects: true }) as any[];
  
  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? teamMembers.length - 1 : activeIndex - 1);
  };
  
  const handleNext = () => {
    setActiveIndex(activeIndex === teamMembers.length - 1 ? 0 : activeIndex + 1);
  };
  
  const getMemberImage = (index: number) => {
    switch(index) {
      case 0:
        return ceoImage;
      case 1:
        return ctoImage;
      default:
        return ceoImage;
    }
  };

  return (
    <section className="team-members">
      <div className="team-content">
        <div className="team-slider">
          <button className="slider-nav prev" onClick={handlePrev}>
            <span>&#10094;</span>
          </button>
          
          <div className="member-container">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`member-slide ${index === activeIndex ? 'active' : ''}`}
              >
                <div className="member-image">
                  <img src={getMemberImage(index)} alt={member.name} />
                </div>
                <div className="member-info">
                  <h2 className="member-name">{member.name}</h2>
                  <h3 className="member-position">{member.position}</h3>
                  <div className="member-details">
                    <p>{member.education}</p>
                    <p>{member.experience1}</p>
                    <p>{member.experience2}</p>
                    <p>{member.experience3}</p>
                  </div>
                  <div className="member-achievement">
                    <p>{member.achievement}</p>
                  </div>
                  <div className="member-expertise">
                    <p>{member.expertise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="slider-nav next" onClick={handleNext}>
            <span>&#10095;</span>
          </button>
        </div>
        
        <div className="slider-dots">
          {teamMembers.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers; 