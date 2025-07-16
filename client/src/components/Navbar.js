// client/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 text-xl font-inter bg-gradient-to-r from-cyan-600 to-blue-500 bg-white shadow-md text-white">
      <div className="flex justify-between items-center h-16 px-4 sm:px-8 lg:px-14">
        {/* Logo / Site Name */}
        <Link to="/" className="flex items-center gap-2 font-bold">
          <img src="/img/logo_placeholder.png" className="w-10 h-10 object-contain" alt="Your Image" />
          <p className="px-2">Construction Company</p>
        </Link>


        {/* Nav Links */}
        <div className="space-x-8">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/projects" className="hover:text-gray-300">Projects</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;