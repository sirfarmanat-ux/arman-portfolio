import React from "react";
import company from "../images/company.png";
import gun from "../images/gun.jpg";
import fyneshit from "../images/fynesihit.jpg";
import oceaneye from "../images/oceaneye.jpg";
import shadow from "../images/shadow.jpg";
import mustang from "../images/realMustang.jpg";
import chup from "../images/chup.jpg";

interface Project {
  title: string;
  image: string;
  description: string;
}

const GraphicDesignSection: React.FC = () => {
  const topRowProjects: Project[] = [
    { title: "PORSCHE", image: company, description: "When luxury meets the Linework." },
    { title: "THORNS", image: gun, description: "Born to bleed Program to rule." },
    { title: "MUSTANG", image: mustang, description: "This ain’t just a Mustang — it’s a statement on wheels, reimagined through design." },
    { title: "FYNESHIT", image: fyneshit, description: "Bury a friend." },
  ];

  const bottomRowProjects: Project[] = [
    { title: "SHADOW", image: shadow, description: "shadows don’t need faces to rule." },
    { title: "OCEAN EYE", image: oceaneye, description: "Galaxy of Grief." },
    { title: "Shhh...", image: chup, description: "I hear the walls breathe at night." },
  ];

  return (
    <div className="bg-amber-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="py-12 text-center">
          <h1 className="font-cursive text-pink-500 text-3xl mb-2">Graphic Design</h1>
          <h2 className="font-bold text-black text-4xl">Projects Showcase</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-6"></div>
        </div>

        {/* Top Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {topRowProjects.map((project, index) => (
            <div key={index} className="w-64">
              <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-md mb-3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-black text-lg">{project.title}</h3>
              <p className="text-gray-700 text-sm">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex justify-center py-4">
          <div className="w-32 h-px bg-gray-300"></div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {bottomRowProjects.map((project, index) => (
            <div key={index} className="w-72">
              <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-md mb-3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-black text-xl">{project.title}</h3>
              <p className="text-gray-700 text-base">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignSection;
