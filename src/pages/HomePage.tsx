import React from 'react';
import Hero from '../components/Hero';
import Technologies from '../components/Technologies';
import ParticleBackground from '../components/ParticleBackground';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';

const HomePage: React.FC = () => {
  return (
    <>
      <ParticleBackground />
      <main style={{ 
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }}>
        <Hero />
        <Technologies />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;

