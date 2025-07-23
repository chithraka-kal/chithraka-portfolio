import React from 'react';
import './App.css';
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
    <>      
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Education />
      <Skills />
      <Projects />
      <Certification />
      <Contact />
      <Footer />
    </>
  );
}



export default App;
