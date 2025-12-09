import React, { useState } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import SpaceshipScene from './components/SpaceshipScene';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import GitHubErrorBoundary from './components/GitHubErrorBoundary'; // Add this import

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    setTimeout(() => setLoading(false), 1000);
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="spaceship">🚀</div>
          <h2>Launching Portfolio...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* 3D Canvas Background */}
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <SpaceshipScene />
      </Canvas>

      {/* Content Sections */}
      <div className="content">
        <HeroSection />
        <About />
        <Skills />
        
        {/* WRAP THE PROJECTS COMPONENT HERE */}
        <GitHubErrorBoundary>
          <Projects />
        </GitHubErrorBoundary>
        
        <Experience />
        <Education />
        <Contact />
      </div>

      {/* Navigation Dots */}
      <nav className="nav-dots">
        <a href="#hero" className="nav-dot" aria-label="Go to hero section" />
        <a href="#about" className="nav-dot" aria-label="Go to about section" />
        <a href="#skills" className="nav-dot" aria-label="Go to skills section" />
        <a href="#projects" className="nav-dot" aria-label="Go to projects section" />
        <a href="#experience" className="nav-dot" aria-label="Go to experience section" />
        <a href="#education" className="nav-dot" aria-label="Go to education section" />
        <a href="#contact" className="nav-dot" aria-label="Go to contact section" />
      </nav>
    </div>
  );
}

export default App;