import React from 'react';
import { Monitor, Palette, Film, Image, Type, Sparkles } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    'Graphic Design',
    'Video Editor', 
    'Sketch',
    'Picsart',
    'Lightroom'
  ];

  const floatingIcons = [
    { Icon: Image, delay: '0s', position: 'top-8 right-16' },
    { Icon: Film, delay: '0.5s', position: 'top-20 right-8' },
    { Icon: Palette, delay: '1s', position: 'top-32 right-20' },
    { Icon: Type, delay: '1.5s', position: 'top-44 right-12' },
    { Icon: Sparkles, delay: '2s', position: 'top-56 right-24' }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-6 py-16">

      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-stone-100 to-amber-100 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 p-12">
            
            {/* Left Side - Skills Content */}
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-pink-500 text-2xl font-script italic transform -rotate-2">
                  Jo mujhe aati h....
                </p>
                <h2 className="text-6xl font-bold text-gray-900 tracking-tight">
                  SKILLS
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  I have developed knowledge and hands-on experience in these skills, which I also enjoy practicing as part of my hobbies and creative interests.
                </p>
                
                <ul className="space-y-4 pt-4">
                  {skills.map((skill, index) => (
                    <li 
                      key={index}
                      className="flex items-center space-x-4 group transition-all duration-300 hover:transform hover:translate-x-2"
                    >
                      <div className="w-2 h-2 bg-pink-400 rounded-full group-hover:bg-pink-500 transition-colors duration-300"></div>
                      <span className="text-gray-800 text-lg font-medium group-hover:text-gray-900 transition-colors duration-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
             
              </div>
            

            {/* Right Side - Illustration */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                
                {/* Main Character Illustration */}
                <div className="relative bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl p-8 shadow-2xl">
                  <div className="w-64 h-64 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    
                    {/* Person Working */}
                    <div className="relative z-10">
                      {/* Head */}
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full mx-auto mb-4 relative">
                        <div className="absolute inset-2 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full"></div>
                        {/* Hair */}
                        <div className="absolute -top-2 -left-1 w-18 h-12 bg-gradient-to-r from-amber-800 to-amber-700 rounded-full"></div>
                      </div>
                      
                      {/* Body */}
                      <div className="w-12 h-20 bg-gradient-to-b from-pink-400 to-pink-500 rounded-t-2xl mx-auto mb-2"></div>
                      
                      {/* Arms */}
                      <div className="flex justify-center space-x-6 -mt-16 relative z-20">
                        <div className="w-3 h-12 bg-gradient-to-b from-amber-300 to-amber-400 rounded-full transform -rotate-12"></div>
                        <div className="w-3 h-12 bg-gradient-to-b from-amber-300 to-amber-400 rounded-full transform rotate-12"></div>
                      </div>
                      
                    
                      
                        </div>
                      </div>
                    </div>
                  

                {/* Floating Software Icons */}
                {floatingIcons.map(({ Icon, delay, position }, index) => (
                  <div
                    key={index}
                    className={`absolute ${position} animate-bounce`}
                    style={{ 
                      animationDelay: delay,
                      animationDuration: '3s'
                    }}
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 cursor-pointer group">
                      <Icon 
                        className="w-6 h-6 text-pink-500 group-hover:text-pink-600 transition-colors duration-300" 
                      />
                    </div>
                  </div>
                ))}

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-300 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-orange-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -left-8 w-6 h-6 bg-yellow-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;