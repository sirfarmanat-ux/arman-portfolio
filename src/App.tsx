import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import JustKidding from './components/JustKidding';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Arman Ahmed - Creative Portfolio';
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <Router>
      <Routes>
        {/* Main Portfolio Route */}
        <Route
          path="/"
          element={
            <div className="relative bg-amber-50 min-h-screen">
              {/* Background texture overlay */}
              <div className="fixed inset-0 bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100 opacity-50 pointer-events-none"></div>
              
              <div className="relative z-10">
                <Navbar />
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection /> {/* This contains all the modified sections */}
                <ContactSection />
                <Footer />
              </div>
            </div>
          }
        />

        {/* "Just Kidding" Page for BUY HERE button */}
        <Route path="/just-kidding" element={<JustKidding />} />
      </Routes>
    </Router>
  );
}

export default App;
