// src/components/Hero.tsx
import React from 'react';
import benjaminImg from '../assets/benjamin.jpg';

const Hero: React.FC = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startDate = new Date('2021-02-01');
  const currentDate = new Date();
  const yearsOfExperience = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25));

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      padding: '7rem 5% 2rem',
      alignItems: 'center',
      position: 'relative',
      gap: '4rem',
      flexDirection: windowWidth <= 1024 ? 'column' : 'row',
    }}>
      <div style={{ 
        flex: 1, 
        maxWidth: '600px',
        width: '100%',
        padding: windowWidth <= 768 ? '0 1rem' : '0',
      }}>
        <h1 style={{
          fontSize: windowWidth <= 768 ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)',
          margin: '0 0 1.5rem 0',
          lineHeight: 1.2,
          color: '#fff',
        }}>
          Building Reliable and Scalable Backend Solutions
        </h1>
        <p style={{
          fontSize: windowWidth <= 768 ? '1rem' : '1.1rem',
          maxWidth: '600px',
          marginBottom: '2rem',
          opacity: 0.8,
          color: '#fff',
          lineHeight: 1.6,
        }}>
          I specialize in building robust and scalable backend systems. I thrive on solving complex technical challenges and delivering solutions that are both efficient and user-friendly.

          Currently, I'm applying my expertise as a consultant at NNIT, where I'm engaged in a variety of projects with various clients, contributing to the development of their critical backend infrastructure.
        </p>
      </div>
      
      <div style={{ 
        flex: 1, 
        position: 'relative',
        width: '100%',
        marginTop: windowWidth <= 1024 ? '2rem' : '0',
      }}>
        <div style={{
          width: '100%',
          maxWidth: windowWidth <= 1024 ? '400px' : '500px',
          aspectRatio: '1',
          borderRadius: '50%',
          overflow: 'hidden',
          margin: windowWidth <= 1024 ? '0 auto' : '0 0 0 auto',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        }}>
          <img 
            src={benjaminImg}
            alt="Benjamin Kakar - Fullstack Developer Consultant"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        <div style={{
          position: 'absolute',
          bottom: windowWidth <= 768 ? '1rem' : '2rem',
          right: windowWidth <= 768 ? '1rem' : '2rem',
          background: 'rgba(22, 24, 28, 0.95)',
          padding: windowWidth <= 768 ? '1rem' : '1.5rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(10px)',
          maxWidth: windowWidth <= 768 ? 'calc(100% - 2rem)' : 'auto',
        }}>
          <h3 style={{ 
            margin: '0 0 0.5rem 0',
            color: '#fff',
            fontSize: '1.2rem',
          }}>
            Benjamin Kakar
          </h3>
          <div style={{ marginTop: '0.5rem' }}>
            <span style={{ color: '#FFB800', fontSize: '1.5rem' }}>{yearsOfExperience}+</span>
            <span style={{ marginLeft: '0.5rem', color: '#fff' }}>Years of Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const primaryButtonStyle = {
  background: '#FFB800',
  color: '#000',
  border: 'none',
  padding: '1rem 2rem',
  borderRadius: '0.5rem',
  fontSize: '1rem',
  cursor: 'pointer',
  fontWeight: 500,
  transition: 'transform 0.2s',
  ':hover': {
    transform: 'translateY(-2px)',
  }
};

const secondaryButtonStyle = {
  background: 'transparent',
  color: '#fff',
  border: '1px solid rgba(255,255,255,0.2)',
  padding: '1rem 2rem',
  borderRadius: '0.5rem',
  fontSize: '1rem',
  cursor: 'pointer',
  fontWeight: 500,
  transition: 'all 0.2s',
  ':hover': {
    borderColor: '#fff',
  }
};

export default Hero;
