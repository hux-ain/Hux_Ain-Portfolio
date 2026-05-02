import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ThreeBackground from './components/ThreeBackground';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Custom Smooth Scroll or Parallax logic can go here
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section.children,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-primary text-white selection:bg-accent selection:text-primary">
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Scroll to Top Hint */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* You can add a scroll to top button here if needed */}
      </div>
    </div>
  );
}

export default App;
