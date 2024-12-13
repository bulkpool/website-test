// components/partners/partners.jsx
import illinoisLogo from '../../assets/images/media.jpg';
import iMadeLogo from '../../assets/images/media.png';
import consultingLogo from '../../assets/images/media (1).jpg';
import sonyCorpsLogo from '../../assets/images/media (2).jpg';

// components/partners/partners.jsx
const Partners = () => {
  const partners = [
    { id: 1, name: "Illinois", logo: illinoisLogo },
    { id: 2, name: "I-MADE", logo: iMadeLogo },
    { id: 3, name: "SonyCorps", logo: sonyCorpsLogo },
    { id: 4, name: "Consulting", logo: consultingLogo }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-full mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Partnered with</h2>
        <div className="flex justify-center items-center gap-16 flex-wrap">
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.logo}
              alt={partner.name}
              className="h-20 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
