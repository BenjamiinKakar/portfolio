// src/components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a 
          href="https://www.linkedin.com/in/benjamin-kakar-922982190/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.link}
        >
          LinkedIn
        </a>
        <span className={styles.separator}>|</span>
        <p className={styles.location}>
          Copenhagen, Denmark
        </p>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Benjamin Kakar. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
