import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M10,50 Q30,10 50,50 Q70,90 90,50"
            stroke="#8B1538"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-10 right-10 w-16 h-16 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M20,20 L80,80 M80,20 L20,80"
            stroke="#8B1538"
            strokeWidth="3"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Corner brush strokes */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M0,0 Q20,15 40,10 Q60,5 80,20 Q85,40 70,60 Q50,75 30,70 Q10,65 5,45 Q0,25 15,15 Z"
            fill="#D2B48C"
          />
        </svg>
      </div>

      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-black mb-6 tracking-tight">
          PORTFOLIO
        </h1>
        
        <div className="relative inline-block">
          <p className="text-2xl md:text-3xl font-light text-rose-800 italic font-serif">
            2024 — 2028
          </p>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
        </div>

        <div className="mt-12">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 bg-rose-800 text-white font-medium rounded-full hover:bg-rose-900 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            About Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;