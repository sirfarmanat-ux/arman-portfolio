import React, { useState } from 'react';
import { Code, Layout, Globe, Palette, Zap } from 'lucide-react';
import companyimage from "../images/company.png";
import mustang from "../images/Mustang.png";
import drawing from "../images/drawing.jpg";
import fashion from "../images/fashions.png";
import gun from "../images/gun.jpg";
import fyneshit from "../images/fynesihit.jpg";
import oceaneye from "../images/oceaneye.jpg";
import shadow from "../images/shadow.jpg";
import realMustang from "../images/realMustang.jpg";
import chup from "../images/chup.jpg";
import drawing1 from "../images/drawing1.jpg";
import drawing2 from "../images/drawing2.jpg";
import drawing3 from "../images/drawing3.jpg";
import drawing4 from "../images/drawing4.jpg";
import drawing5 from "../images/drawing5.jpg";
import drawing6 from "../images/drawing6.jpg";

interface Artwork {
  id: number;
  title: string;
  price: string;
  image: string;
  description: string;
}

const artworks: Artwork[] = [
  { id: 1, title: "Forgotten Corners.", price: "₹1000.00", description: "Every crack and crevice whispers memories of the past.", image: drawing2},
  { id: 2, title: "Through Her Eyes.", price: "₹-Priceless", description: "Her eyes whisper the secrets that words could never convey.", image: drawing6},
  { id: 3, title: "Motivational Pack.", price: "₹1L", description: "Inspiring quotes with artistic typography", image: drawing1},
  { id: 4, title: "A Shoulder to Lean On.", price: "₹1500.00", description: "A gentle embrace to ease a heavy heart", image: drawing3 },
  { id: 5, title: "Everyday Hero", price: "₹2500.00", description: "Love is in the little things we do for those we cherish", image:drawing4 },
  { id: 6, title: "Fated Path.", price: "₹25k.00", description: "A glimpse into the world of curses and sorcery.", image: drawing5},
];

const ProjectsSection: React.FC = () => {
  // 👇 Default set to "graphic"
  const [activeCategory, setActiveCategory] = useState<string>('graphic');

  const categories = [
    { id: 'graphic', label: 'Graphic Design' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'video', label: 'Edited Videos' }
  ];

  const topRowGraphic = [
    { title: "PORSCHE", image: companyimage, description: "When luxury meets the Linework." },
    { title: "THORNS", image: gun, description: "Born to bleed Program to rule." },
    { title: "MUSTANG", image: realMustang, description: "This ain’t just a Mustang — it’s a statement on wheels, reimagined through design." },
    { title: "FYNESHIT", image: fyneshit, description: "Bury a friend." }
  ];

  const bottomRowGraphic = [
    { title: "SHADOW", image: shadow, description: "shadowS don’t need faces to rule." },
    { title: "OCEAN EYE", image: oceaneye, description: "Galaxy of Grief." },
    { title: "Shhh...", image: chup, description: "I hear the walls breathe at night." }
  ];

  const tools = [
    { name: 'HTML', icon: <Code className="w-5 h-5" />, color: 'text-orange-600' },
    { name: 'CSS', icon: <Palette className="w-5 h-5" />, color: 'text-blue-600' },
    { name: 'JavaScript', icon: <Zap className="w-5 h-5" />, color: 'text-yellow-600' },
    { name: 'React', icon: <Globe className="w-5 h-5" />, color: 'text-cyan-600' }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-stone-50 to-amber-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">MY PROJECTS</h2>
          <p className="text-2xl font-serif italic text-rose-800">Creative Portfolio</p>
          <div className="w-24 h-1 bg-rose-800 mx-auto mt-4"></div>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id ? 'bg-rose-800 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-rose-100 hover:text-rose-800 shadow-md'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Graphic Design Section */}
        {activeCategory === 'graphic' && (
          <div>
            <div className="py-16 text-center">
              <h1 className="font-cursive text-pink-500 text-4xl mb-4">Graphic Design</h1>
              <h2 className="font-bold text-black text-5xl">Projects Showcase</h2>
              <div className="w-24 h-1 bg-pink-500 mx-auto mt-8"></div>
            </div>

            <div className="py-16 flex gap-2 justify-center flex-wrap mb-12">
              {topRowGraphic.map((proj, idx) => (
                <div key={idx} className="flex-1 max-w-xs">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-md mb-4">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-black text-lg mb-1">{proj.title}</h3>
                  <p className="text-gray-700 text-sm">{proj.description}</p>
                </div>
              ))}
            </div>

            <div className="py-16 flex gap-2 justify-center flex-wrap">
              {bottomRowGraphic.map((proj, idx) => (
                <div key={idx} className="flex-1 max-w-sm">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-md mb-4">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-black text-xl mb-2">{proj.title}</h3>
                  <p className="text-gray-700 text-base leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* UI/UX Design Section */}
        {activeCategory === 'uiux' && (
          <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-20 px-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">
                  Frontend <span className="font-serif italic text-rose-800 bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-rose-600">Developer</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-400 mx-auto rounded-full"></div>
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
                <aside className="flex-1 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 w-full">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Layout className="w-8 h-8 text-blue-600" /> What I Do
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      I craft beautiful, responsive websites that bring digital experiences to life.
                    </p>
                  </div>
                </aside>

                <aside className="flex-1 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 w-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Code className="w-7 h-7 text-pink-500" /> Tools & Technologies
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {tools.map((tool, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-white rounded-2xl transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md">
                        <div className={`${tool.color} group-hover:scale-110 transition-transform duration-300`}>{tool.icon}</div>
                        <span className="font-semibold text-gray-800">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Tailwind CSS', 'Next.js', 'Figma', 'Git', 'Responsive Design'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 rounded-full text-sm font-medium border border-pink-200">{skill}</span>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>

              <div className="mt-20 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h3>
                <h1 className="text-5xl text-rose-800 italic" style={{ fontFamily: "Pacifico, 'Brush Script MT', cursive" }}>Coming Soon...</h1>
              </div>
            </div>
          </div>
        )}

        {/* Hobbies Section */}
        {activeCategory === 'hobbies' && (
          <div className="relative min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-4 tracking-wide">Creative Works</h2>
                <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
                  A collection of artistic endeavors, sketches, and digital creations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {artworks.map((artwork) => (
                  <div key={artwork.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-sm shadow-md group-hover:shadow-xl transition-all duration-500 ease-out mb-6">
                      <img src={artwork.image} alt={artwork.title} className="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium text-stone-800 group-hover:text-stone-900 transition-colors duration-300">{artwork.title}</h3>
                      <p className="text-stone-600 text-sm leading-relaxed">{artwork.description}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-2xl font-light text-amber-700">{artwork.price}</span>
                        <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">Digital Art</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-20">
                <a href="/just-kidding">
                  <button className="px-8 py-3 bg-stone-800 text-white font-medium tracking-wide hover:bg-stone-700 transition-colors duration-300 rounded-sm shadow-lg hover:shadow-xl">
                    BUY HERE
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Edited Videos Section */}
        {activeCategory === 'video' && (
          <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 py-40">
            <h1 className="text-6xl text-rose-800 italic" style={{ fontFamily: "Pacifico, 'Brush Script MT', cursive" }}>Coming Soon...</h1>
            <p className="text-gray-700 mt-6 text-lg text-center max-w-xl">Exciting video projects will be showcased here shortly. Stay tuned!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
