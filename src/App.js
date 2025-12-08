import React, { useState } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import SpaceshipScene from './components/SpaceshipScene';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onLoaded={() => setLoading(false)} />
      ) : (
        <div className="app">
          {/* 3D Canvas Background */}
          <div className="canvas-container">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <SpaceshipScene />
            </Canvas>
          </div>

          {/* Main Content */}
          <div className="content">
            <HeroSection />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Contact />
          </div>

          {/* Navigation */}
          <nav className="nav-dots" aria-label="Main navigation">
            {['hero', 'about', 'skills', 'experience', 'education', 'contact'].map((section, i) => (
              <a
                key={section}
                href={`#${section}`}
                className="nav-dot"
                aria-label={`Go to ${section} section`}
                title={section.charAt(0).toUpperCase() + section.slice(1)}
              >
                <span className="sr-only">{section}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

export default App;