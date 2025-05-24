import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Profiles from './components/Profiles';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';

const App = () => {
  return (
    // Main container for the entire portfolio.
    // Set a dark background for the whole app to ensure the transparent navbar is visible.
    // Added pt-20 to the main content area to prevent it from being hidden behind the fixed navbar.
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar component remains fixed at the top */}
      <Navbar />

      {/* Main content area, pushed down by the navbar's height */}
      <main className="pt-20">
        <Home />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Profiles />
        <Projects />
        <Interests />
        <Contact />
      </main>
    </div>
  );
};

export default App;
