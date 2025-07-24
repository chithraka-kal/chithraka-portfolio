import React, { useEffect, useRef } from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { useLayeredScroll } from './hooks/useLayeredScroll';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import SectionIndicator from './components/SectionIndicator';
import HeroSection from './components/HeroSection';
import AboutMe from './components/aboutMe';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Certification from './components/Certification';
import Footer from './components/Footer';

function AppContent() {
  useLayeredScroll(); // Re-enabled with very conservative settings

  return (
    <div className="app-container">
      <ParticlesBackground />
      <Navbar />
      <SectionIndicator />
      <HeroSection />
      <div className="sections-container">
        <section id="about" className="section-layer" data-section="about">
          <AboutMe />
        </section>
        <section id="skills" className="section-layer" data-section="skills">
          <Skills />
        </section>
        <section id="projects" className="section-layer" data-section="projects">
          <Projects />
        </section>
        <section id="education" className="section-layer" data-section="education">
          <Education />
        </section>
        <section id="certification" className="section-layer" data-section="certification">
          <Certification />
        </section>
        <section id="footer" className="section-layer" data-section="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
