import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header style={{
      padding: '1.5rem 5%',
      display: 'flex',
      alignItems: 'center',
      background: '#16181C',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 10,
      boxSizing: 'border-box',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      <Link 
        to="/" 
        style={{
          textDecoration: 'none',
          color: '#fff',
          fontSize: '1.1rem',
          fontWeight: 400,
          letterSpacing: '0.5px',
          opacity: 0.9,
          transition: 'opacity 0.2s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0.9'}
      >
        Benjamin Kakar
      </Link>

      <div style={{
        marginLeft: 'auto',
        display: 'flex',
        gap: '3rem',
      }}>
      </div>
    </header>
  );
};

const linkStyle = {
  textDecoration: 'none',
  fontSize: '0.9rem',
  transition: 'color 0.2s ease',
  fontWeight: 400,
  letterSpacing: '0.5px',
  padding: '4px 0',
};

export default Header; 