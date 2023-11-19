import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/Info.module.css';

const Info: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      const triggerOffset = 400;

      if (yOffset > triggerOffset) {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      className={`${styles['info-container']} ${styles['info-container-scroll']}`}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <div className={styles['info-text']}>
        <h2>Airpods Max</h2>
        <p>
          Immerse yourself in a world of superior sound quality with our latest collection of premium headphones.
        </p>
        <p>
          Experience crystal-clear audio and unmatched comfort, making every moment a pleasure for your ears.
        </p>
        <p>
          Whether you're a music enthusiast, gamer, or someone who appreciates top-notch audio, our headphones deliver an exceptional listening experience.
        </p>
      </div>
      <div className={styles['image-container']}>
        <Image
          className={styles['image']}
          src="/images/AirPods-Max-head-005.jpeg"
          alt="AirPods Max in use"
          width={650}
          height={400}
        />
      </div>
    </motion.div>
  );
};

export default Info;