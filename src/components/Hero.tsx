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
        <h2 style={{
          color: '#FFB800',
          margin: 0,
          fontSize: windowWidth <= 768 ? '1rem' : '1.2rem',
          marginBottom: '1rem',
        }}>
          Senior Fullstack Developer
        </h2>
        <h1 style={{
          fontSize: windowWidth <= 768 ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)',
          margin: '0 0 1.5rem 0',
          lineHeight: 1.2,
          color: '#fff',
        }}>
          Making Technology Work<br />
          for Your Business
        </h1>
        <p style={{
          fontSize: windowWidth <= 768 ? '1rem' : '1.1rem',
          maxWidth: '600px',
          marginBottom: '2rem',
          opacity: 0.8,
          color: '#fff',
          lineHeight: 1.6,
        }}>
          With 4 years of experience in creating user-friendly and robust systems. 
          I find great satisfaction in bringing solutions to life and enjoy diving 
          into technical challenges that simplify daily tasks for users.
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '1rem',
          flexDirection: windowWidth <= 480 ? 'column' : 'row',
          width: windowWidth <= 480 ? '100%' : 'auto',
        }}>
          <button style={{
            ...primaryButtonStyle,
            width: windowWidth <= 480 ? '100%' : 'auto',
          }}>
            Schedule Free Consultation →
          </button>
          <button style={{
            ...secondaryButtonStyle,
            width: windowWidth <= 480 ? '100%' : 'auto',
          }}>
            Explore Services →
          </button>
        </div>
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
          borderRadius: '1rem',
          overflow: 'hidden',
          margin: windowWidth <= 1024 ? '0 auto' : '0 0 0 auto',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
        }}>
          <img 
            src={benjaminImg}
            alt="Benjamin Kakar - Senior Fullstack Developer"
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
          <p style={{ 
            margin: '0',
            color: '#fff',
            opacity: 0.8,
          }}>
            Senior Software Engineer
          </p>
          <div style={{ marginTop: '0.5rem' }}>
            <span style={{ color: '#FFB800', fontSize: '1.5rem' }}>4+</span>
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
