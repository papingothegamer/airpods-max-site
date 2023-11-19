import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h2>Explore</h2>
          <a href="#">Mac</a>
          <a href="#">iPad</a>
          <a href="#">iPhone</a>
          <a href="#">Watch</a>
          <a href="#">TV</a>
          <a href="#">Music</a>
        </div>
        <div className={styles.column}>
          <h2>Services</h2>
          <a href="#">Apple Music</a>
          <a href="#">Apple TV+</a>
          <a href="#">Apple Fitness+</a>
          <a href="#">Apple News+</a>
        </div>
        <div className={styles.column}>
          <h2>Apple Store</h2>
          <a href="#">Find a Store</a>
          <a href="#">Today at Apple</a>
          <a href="#">Genius Bar</a>
          <a href="#">Apple Trade In</a>
          <a href="#">Order Status</a>
          <a href="#">Shopping Help</a>
        </div>
        <div className={styles.column}>
          <h2>For Business</h2>
          <a href="#">Apple and Business</a>
          <a href="#">Shop for Business</a>
        </div>
      </div>
      <div className={styles.bottomText}>
        <p>&copy; 2023 @papingothegamer. Prototype only.</p>
      </div>
    </footer>
  );
};

export default Footer;