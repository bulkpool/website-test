import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
 

const StatsCard = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const controls = useAnimation();

  const stats = [
    { number: 660000, text: "Cervical cancer is the 4th most common cancer in women" },
    { number: 4000, text: "People die from cervical cancer every year in the US" },
    { number: 40, text: "% of people stated anxiety as a barrier to screening" }
  ];

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
    const timer1 = setInterval(() => setCount1(prev => Math.min(prev + 10000, 660000)), 20);
    const timer2 = setInterval(() => setCount2(prev => Math.min(prev + 100, 4000)), 20);
    const timer3 = setInterval(() => setCount3(prev => Math.min(prev + 1, 40)), 50);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, [controls]);

  return (
    <div className="bg-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Introduction Section */}
        <div className="md:w-1/2 flex items-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            Cervical cancer is highly preventable through regular screening, yet women avoid screening due to fear, pain, embarrassment, or trauma. The outdated tools currently used in the procedure are a major barrier for screening.
          </p>
        </div>

        {/* Stats Section */}
        <div className="md:w-1/2 space-y-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="font-sourceSans text-4xl font-bold text-[#FF1654]">
                {stat.number}
              </div>
              <p className="font-montserrat text-gray-700 mt-2">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// components/stats/statsCard.jsx

export default StatsCard;
