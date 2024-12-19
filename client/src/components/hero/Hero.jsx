import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToStats = () => {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      statsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <section className="hero-section">
      <div className="hero-image"></div>
      <div className="hero-content">
        <h1>Advanced imaging for compassionate care</h1>
        <p>Cervical cancer is highly preventable through regular screening, yet women avoid screening due to fear, pain, embarrassment, or trauma.</p>
        <button className="learn-more" onClick={scrollToStats}>Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
