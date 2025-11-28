// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: '#0f172a',
      color: '#fff',
      padding: '4rem 5% 2rem',
      textAlign: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        marginBottom: '2rem',
      }}>
        <a 
          href="https://www.linkedin.com/in/benjamin-kakar-922982190/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: '#64ffda',
            textDecoration: 'none',
            fontSize: '1rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = '#64ffda'}
        >
          LinkedIn
        </a>
        <span style={{ opacity: 0.5 }}>|</span>
        <p style={{
          margin: 0,
          fontSize: '1rem',
          opacity: 0.8,
        }}>
          Copenhagen, Denmark
        </p>
      </div>
      <p style={{
        margin: 0,
        opacity: 0.6,
        fontSize: '0.9rem',
      }}>
        © {new Date().getFullYear()} Benjamin Kakar. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
