import React from 'react';
import MatrixBuild from '../components/MatrixBuild';

const AboutPage: React.FC = () => {
  return (
    <div style={{ 
      width: '100%',
      minHeight: '100vh',
      background: '#000',
      position: 'relative'
    }}>
      <MatrixBuild />
      <div style={{ 
        padding: '6rem 2rem 2rem',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 style={{ 
          color: 'rgba(0, 255, 70, 0.8)',
          marginBottom: '2rem'
        }}>
          About Me
        </h1>
        <p style={{ 
          color: 'rgba(0, 255, 70, 0.6)',
          fontSize: '1.2rem',
          lineHeight: 1.6,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Here you can write information about yourself, your background,
          or the purpose of this site.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
