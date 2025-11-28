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
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          About Me
        </h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', color: 'rgba(0, 255, 70, 0.6)', fontSize: '1.2rem', lineHeight: 1.6 }}>
          <p style={{ marginBottom: '1.5rem' }}>
            I'm a passionate and results-oriented backend developer with a knack for solving complex problems. With a foundation of {new Date().getFullYear() - 2020} years in the industry, I've had the opportunity to work on a variety of projects, from large-scale system integrations to bespoke B2B solutions.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            My professional journey has led me to my current role as a consultant at NNIT, where I'm engaged in a variety of projects with various clients, contributing to the development of their critical backend infrastructure.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            I'm a firm believer in the power of collaboration and enjoy working in teams where knowledge-sharing and a positive, supportive atmosphere are valued. I'm always eager to learn new things and take on new challenges.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <h2 style={{ color: 'rgba(0, 255, 70, 0.8)', marginBottom: '1rem', fontSize: '1.5rem' }}>Education</h2>
            <p>
              I hold a degree in Computer Science from Roskilde University, completed in January 2020.
            </p>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h2 style={{ color: 'rgba(0, 255, 70, 0.8)', marginBottom: '1rem', fontSize: '1.5rem' }}>Languages</h2>
            <p>
              I am fluent in both written and spoken Danish and English, and fluent in spoken Persian and Dari.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
