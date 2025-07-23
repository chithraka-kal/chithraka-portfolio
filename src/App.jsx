import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <ParticlesBackground />
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Education />
      <Skills />
      <Certification />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}



export default App;
