import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative X patterns */}
        <div className="flex justify-center space-x-8 mb-8">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-4 h-4 opacity-30">
              <svg viewBox="0 0 20 20" className="w-full h-full">
                <path d="M5,5 L15,15 M15,5 L5,15" stroke="#8B1538" strokeWidth="2" />
              </svg>
            </div>
          ))}
        </div>

        {/* Brush stroke decoration */}
        <div className="flex justify-center mb-8">
          <div className="w-64 h-6 opacity-40">
            <svg viewBox="0 0 300 30" className="w-full h-full">
              <path
                d="M10,15 Q75,5 150,15 Q225,25 290,15"
                stroke="#8B1538"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-black text-black mb-2">
            THANK YOU
          </h3>
          <p className="text-lg font-serif italic text-rose-800 mb-8">
            Creative Portfolio by Arman Ahmed
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#home" className="text-gray-600 hover:text-rose-800 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-rose-800 transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-600 hover:text-rose-800 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 hover:text-rose-800 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-rose-800 transition-colors">
              Contact
            </a>
          </div>

          <div className="border-t border-stone-300 pt-6">
            <p className="text-sm text-gray-500">
              © 2025 Arman Ahmed. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Designed with passion and creativity
            </p>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute bottom-4 left-4 w-8 h-8 opacity-20">
          <svg viewBox="0 0 30 30" className="w-full h-full">
            <circle cx="15" cy="15" r="3" fill="#8B1538" />
            <circle cx="5" cy="5" r="2" fill="#8B1538" />
            <circle cx="25" cy="5" r="2" fill="#8B1538" />
            <circle cx="5" cy="25" r="2" fill="#8B1538" />
            <circle cx="25" cy="25" r="2" fill="#8B1538" />
          </svg>
        </div>

        <div className="absolute bottom-4 right-4 w-8 h-8 opacity-20">
          <svg viewBox="0 0 30 30" className="w-full h-full">
            <path d="M5,5 L25,25 M25,5 L5,25" stroke="#8B1538" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;