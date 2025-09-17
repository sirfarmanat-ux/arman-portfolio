import React from 'react';
import armanImage from "../images/arman.jpg";


import { Phone, Mail, Instagram } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-amber-50 to-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            ABOUT ME — ARMAN AHMED
          </h2>
          <div className="w-24 h-1 bg-rose-800 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo with Browser Mockup */}
          <div className="relative">
            <div className="bg-gray-200 rounded-lg p-4 shadow-lg">
              {/* Browser header */}
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500">
                  portfolio
                </div>
              </div>
              
              {/* Profile Image */}
              <div className="bg-white rounded overflow-hidden">
                <img
                  src={armanImage}
                  alt="Arman Ahmed"
                  className="max-h-screen w-auto mx-auto rounded-lg object-contain"
                />
              </div>
            </div>

            {/* Decorative X pattern */}
            <div className="absolute -top-4 -right-4 w-8 h-8 opacity-30">
              <svg viewBox="0 0 20 20" className="w-full h-full">
                <path d="M5,5 L15,15 M15,5 L5,15" stroke="#8B1538" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* Bio and Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Creative Designer & AI/ML Practitioner
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hello everyone,I’m Arman Ahmed, a B.Tech student in Computer Science and Engineering with a specialization in Data Science and Artificial Intelligence at Integral University. I have interest in technology, problem-solving, and building innovative solutions using modern tools and frameworks. Along with my academic journey, I’m continuously learning and exploring new areas in software development, data science, and AI to prepare myself for impactful contributions in the tech industry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With expertise in graphic design, video editing, and social media content creation, 
                I help brands and individuals tell their stories through compelling visual narratives.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-rose-800 font-serif italic">
                Get in touch
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700 hover:text-rose-800 transition-colors">
                  <Phone size={20} className="text-rose-800" />
                  <span>+91 9555151199</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-700 hover:text-rose-800 transition-colors">
                  <Mail size={20} className="text-rose-800" />
                  <span>sirfarman.at@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-3 text-gray-700 hover:text-rose-800 transition-colors">
                  <Instagram size={20} className="text-rose-800" />
                  <span>offooweirdo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;