import React, { useState, useEffect, useRef } from 'react';
import './stats.css';

const StatsCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const stats = [
    {
      id: 1,
      title: "Cervical cancer is the",
      number: "4th",
      description: " most common cancer in women with 600,000 new cases and 350,000 deaths every year globally"
    },
    {
      id: 2,
      title: "In the US",
      number: "4,000",
      description: "people die from cervical cancer every year and screening rates are declining by 4.3% annually"
    },
    {
      id: 3,
      title: "Over",
      number: "40%",
      description: "of people stated anxiety as a barrier to being screened for cervical cancer"
    }
  ];

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div 
            key={stat.id}
            className={`stat-card ${isVisible ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3>{stat.title}</h3>
            <div className="stat-number">{stat.number}</div>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
      <div className={`stats-intro ${isVisible ? 'visible' : ''}`}>
        <h2>The Current Challenge</h2>
        <p>Cervical cancer is highly preventable through regular screening, yet women avoid screening due to fear, pain, embarrassment, or trauma. The outdated tools currently used in the procedure are a major barrier for screening.</p>
      </div>
    </section>
  );
};

export default StatsCard;
