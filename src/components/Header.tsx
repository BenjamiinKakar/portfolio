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
        {[
          { path: '/', label: 'Home' },
          { path: '/services', label: 'Services' },
          { path: '/profile', label: 'Profile' }
        ].map(({ path, label }) => (
          <Link 
            key={path}
            to={path} 
            style={{
              ...linkStyle,
              color: isActive(path) ? '#fff' : 'rgba(255, 255, 255, 0.6)',
              position: 'relative',
            }}
            onMouseEnter={e => {
              if (!isActive(path)) {
                e.currentTarget.style.color = '#fff';
              }
            }}
            onMouseLeave={e => {
              if (!isActive(path)) {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
              }
            }}
          >
            {label}
            <span style={{
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              width: isActive(path) ? '100%' : '0',
              height: '1px',
              background: '#fff',
              transition: 'width 0.2s ease',
              opacity: isActive(path) ? 1 : 0,
            }} />
            <span style={{
              position: 'absolute',
              bottom: '-4px',
              left: 0,
              width: '0',
              height: '1px',
              background: '#fff',
              transition: 'width 0.2s ease',
              opacity: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.width = '100%';
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.width = '0';
              e.currentTarget.style.opacity = '0';
            }}
            />
          </Link>
        ))}
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