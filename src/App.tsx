import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';
import { ParticleBackground } from './components/effects/ParticleBackground';
import { ScrollToTop } from './components/effects/ScrollToTop';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh();

    // Smooth scroll behavior
    const lenis = {
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    };

    // Add scroll-triggered animations
    gsap.utils.toArray('.animate-on-scroll').forEach((element: any) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}

export default App;