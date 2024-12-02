import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 pt-32">
        <h1 className="text-5xl font-bold text-[#FF1654] mb-6">
          Advanced imaging for compassionate care
        </h1>
        <p className="text-gray-700 max-w-2xl">
          Cervical cancer is highly preventable through regular screening, yet women avoid screening due to fear, pain, embarrassment, or trauma. The outdated tools currently used in the procedure are a major barrier for screening.
        </p>
      </div>
    </section>
  );
};

export default Hero;