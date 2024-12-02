import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="bg-[#FF1654] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <img src={logo} alt="Sakura" className="h-8" />
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-white hover:opacity-80">Home</a>
            <a href="/news" className="text-white hover:opacity-80">News</a>
            <a href="/story" className="text-white hover:opacity-80">Story</a>
            <a href="/contact" className="text-white hover:opacity-80">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;