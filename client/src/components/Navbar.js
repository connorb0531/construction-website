// client/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-cyan-600 to-blue-500 py-3">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 sm:px-8 lg:px-16">

        {/* Logo + Site Name */}
        <div className="flex justify-center sm:justify-start items-center gap-2 mb-2 sm:mb-0">
          <img src="/img/official_logo.png" alt="Logo" className="w-8 h-8 object-contain" />
          <span className="font-semibold text-white text-base sm:text-lg whitespace-nowrap">
            T. Buckley Developments
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex justify-center space-x-4 text-md font-medium text-white">
          <Link to="/" className="hover:opacity-80">Home</Link>
          <Link to="/projects" className="hover:opacity-80">Projects</Link>
          <Link to="/about" className="hover:opacity-80">About</Link>
          <Link to="/contact" className="hover:opacity-80">Contact</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
