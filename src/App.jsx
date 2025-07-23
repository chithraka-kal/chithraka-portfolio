import React from 'react';
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
  useLayeredScroll();

  return (
    <div className="app-container">
      <ParticlesBackground />
      <Navbar />
      <SectionIndicator />
      <div className="sections-container">
        <section className="section-layer" data-section="hero">
          <HeroSection />
        </section>
        <section className="section-layer" data-section="about">
          <AboutMe />
        </section>
        <section className="section-layer" data-section="skills">
          <Skills />
        </section>
        <section className="section-layer" data-section="projects">
          <Projects />
        </section>
        <section className="section-layer" data-section="education">
          <Education />
        </section>
        <section className="section-layer" data-section="certification">
          <Certification />
        </section>
        <section className="section-layer" data-section="footer">
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
