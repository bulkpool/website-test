// components/partners/partners.jsx
import React from 'react';
import './partners.css';

import illinoisLogo from '../../assets/images/media.jpg';
import iMadeLogo from '../../assets/images/media.png';
import consultingLogo from '../../assets/images/media (1).jpg';
import sonyCorpsLogo from '../../assets/images/media (2).jpg';
import illinoisVenture from '../../assets/images/Illinois-Ventures.png';
import chicagoBooth from '../../assets/images/3Hp5BbMf_400x400.jpg';
import nucleateChicago from '../../assets/images/nucleateChicago.png';

// components/partners/partners.jsx
const Partners = () => {
  const partners = [
    { id: 1, name: "Illinois", logo: illinoisLogo },
    { id: 2, name: "I-MADE", logo: iMadeLogo },
    { id: 3, name: "SonyCorps", logo: sonyCorpsLogo },
    { id: 4, name: "Consulting", logo: consultingLogo },
    { id: 5, name: "illinoisVenture", logo: illinoisVenture},
    { id: 6, name: "chicagoBooth", logo: chicagoBooth },
    { id: 7, name: "nucleateChicago", logo: nucleateChicago}
  ];

  return (
    <section className="partners-section">
      <h2 className="partners-title">Partnered with</h2>
      <div className="partners-container">
        {partners.map((partner) => (
          <img
            key={partner.id}
            src={partner.logo}
            alt={partner.name}
            className="partner-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default Partners;
