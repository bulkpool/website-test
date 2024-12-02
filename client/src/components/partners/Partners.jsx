import React from 'react';
import './partners.css';

const Partners = () => {
  const partners = [
    { id: 1, name: 'Illinois', logo: '/illinois-logo.png' },
    { id: 2, name: 'I-MADE', logo: '/i-made-logo.png' },
    { id: 3, name: 'Consulting', logo: '/consulting-logo.png' }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Partnered with</h2>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.logo}
              alt={partner.name}
              className="h-16 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;