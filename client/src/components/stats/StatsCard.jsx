import React from 'react';
import './stats.css';

const StatsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 py-16">
      {[1, 2, 3].map((item) => (
        <div key={item} className="text-center">
          <img 
            src="/uterus-icon.svg" 
            alt="Uterus Icon" 
            className="w-24 h-24 mx-auto mb-4"
          />
          <p className="text-gray-700">
            Cervical cancer is the 4th most common cancer in women
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;