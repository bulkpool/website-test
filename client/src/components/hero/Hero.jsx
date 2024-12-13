import React from 'react';
import './Hero.css';

// components/hero/Hero.jsx
const Hero = () => {
  return (
    <section className="min-h-screen bg-[#E6E6E6] relative flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('/src/assets/images/uterus.webp')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center mt-16">
        <h1 className="text-5xl font-bold text-[#FF1654] mb-6">
          Advanced imaging for compassionate care
        </h1>
        <p className="text-gray-700 max-w-2xl">
          Cervical cancer is highly preventable through regular screening, yet women avoid screening due to fear, pain, embarrassment, or trauma.
        </p>
      </div>
    </section>
  );
};

export default Hero;