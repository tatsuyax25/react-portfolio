import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section>
      <div>
        <h1>Hi, I&apos;m Miguel</h1>
        <p>I&apos;m a Software Engineer from Anaheim, California!</p>
        <a href="mailto:urena_miguel@outlook.com">Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.jpg")} alt="Hero image of me" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}