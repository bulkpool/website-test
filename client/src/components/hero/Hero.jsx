import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="video-background">
        <iframe 
          src="https://www.youtube.com/embed/dlJ3__dUpss?autoplay=1&mute=1&loop=1&playlist=dlJ3__dUpss&controls=0&start=43" 
          title="Sakura MedTech Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Advanced imaging for compassionate care</h1>
        <p>Cervical cancer is highly preventable through regular screening, yet women avoid screening due to fear, pain, embarrassment, or trauma.</p>
        <button className="learn-more">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
