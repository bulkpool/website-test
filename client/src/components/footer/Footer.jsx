// components/footer/Footer.jsx
import React, { useState } from 'react';
import './Footer.css';
import logo from '../../assets/images/SakuraMed 2024 Logo.png';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Sakura MedTech Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a 
                href="/apply"
                onClick={ 
                  () => {
                    setActivePage('Apply');
                    window.open('https://forms.gle/Suteamkf2XTyiHVP7', '_blank');
                  }
                }
                > Apply
              </a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a 
            href=" https://www.linkedin.com/company/sakuramedtech/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:hello@sakuramedtech.com"
          >
            <MdEmail />
          </a>
          <a 
            href="https://www.instagram.com/sakuramedtech/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 Sakura MedTech Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
