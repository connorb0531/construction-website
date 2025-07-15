// client/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-800 text-white">
      <div className="flex justify-between items-center h-16 px-4 sm:px-8 lg:px-10">
        {/* Logo / Site Name */}
        <div className="text-lg font-bold">
          <Link to="/">Construction Company</Link>
        </div>

        {/* Nav Links */}
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/projects" className="hover:text-gray-300">Projects</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;