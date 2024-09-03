import React from 'react';
import styles from './module-css/Hero.module.css'
import heroImage from '../assets/hero.webp'
const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <img src={heroImage}alt="Twórca stron internetowych dla biznesu" className={styles.backgroundImage} />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.heading}>Twórca strony internetowej dla Twojego biznesu</h1>
        <p className={styles.subheading}>
          Zwiększ swoją widoczność w internecie, dzięki taniej stronie internetowej, którą wykonam dla Ciebie w kilka dni.
        </p>
        <button className={styles.ctaButton}>Zacznij teraz!</button>
      </div>
    </section>
  );
};

export default Hero;
