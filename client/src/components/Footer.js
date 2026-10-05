// client/src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm py-0.5 mt-10 border-t border-gray-200">
      <div className="w-full px-4 flex justify-end items-end text-right">

        {/* Developer credit */}
        <div>
          Web Developer:{' '}
          <a
            href="https://github.com/connorb0531"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:underline"
          >
            Connor Buckley
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
