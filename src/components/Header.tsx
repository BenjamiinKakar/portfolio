import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={styles.header}>
      <Link 
        to="/" 
        className={styles.logo}
      >
        Benjamin Kakar
      </Link>

      <div className={styles.nav}>
      </div>
    </header>
  );
};

export default Header;
 