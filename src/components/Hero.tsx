// src/components/Hero.tsx
import React from 'react';
import benjaminImg from '../assets/benjamin.jpg';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const startDate = new Date('2021-02-01');
  const currentDate = new Date();
  const yearsOfExperience = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25));

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Building Reliable and Scalable Backend Solutions
        </h1>
        <p className={styles.heroText}>
          I specialize in building robust and scalable backend systems. I thrive on solving complex technical challenges and delivering solutions that are both efficient and user-friendly.

          Currently, I'm applying my expertise as a consultant at NNIT, where I'm engaged in a variety of projects with various clients, contributing to the development of their critical backend infrastructure.
        </p>
      </div>
      
      <div className={styles.heroImageContainer}>
        <div className={styles.heroImageWrapper}>
          <img 
            src={benjaminImg}
            alt="Benjamin Kakar - Fullstack Developer Consultant"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroCard}>
          <h3 className={styles.heroCardTitle}>
            Benjamin Kakar
          </h3>
          <div className={styles.heroCardExperience}>
            <span className={styles.heroCardYears}>{yearsOfExperience}+</span>
            <span className={styles.heroCardText}>Years of Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
