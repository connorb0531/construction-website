// client/src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm py-0.5 mt-10 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-0.5 sm:space-y-0">

        {/* Copyright */}
        <div>
          © {new Date().getFullYear()} T. Buckley Developments. All rights reserved.
        </div>

        {/* Developer credit */}
        <div>
          Web Developer:{' '}
          <a
            href="https://github.com/connorb0531"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Connor Buckley
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
