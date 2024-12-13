import './navbar.css';
import React, { useState } from 'react'; 
import logo from '../../assets/images/logo_w.svg';

const Navbar = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <nav className="bg-[#FF1654] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <img src={logo} alt="Sakura" className="h-8" />
          <div className="hidden md:flex space-x-8">
            <a 
              href="/" 
              className={`text-white px-4 py-2 rounded-full transition-all ${
                activePage === 'home' ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
              onClick={() => setActivePage('home')}
            >
              Home
            </a>
            <a 
              href="/news" 
              className={`text-white px-4 py-2 rounded-full transition-all ${
                activePage === 'news' ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
              onClick={() => setActivePage('news')}
            >
              News
            </a>
            <a 
              href="/story" 
              className={`text-white px-4 py-2 rounded-full transition-all ${
                activePage === 'story' ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
              onClick={() => setActivePage('story')}
            >
              Story
            </a>
            <a 
              href="/contact" 
              className={`text-white px-4 py-2 rounded-full transition-all ${
                activePage === 'contact' ? 'bg-white/20' : 'hover:bg-white/10'
              }`}
              onClick={() => setActivePage('contact')}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;