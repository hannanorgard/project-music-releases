import React from 'react';
import styles from './Icons.module.css';

import dots from './icons-img/dots.svg';
import play from './icons-img/play.svg';
import heart from './icons-img/heart.svg';

const Icons = () => {
  return (
    <div className={styles.iconContainer}>
      <img className={styles.icon} src={dots} alt="icon" />
      <img className={styles.icon} id={styles.playIcon} src={play} alt="icon" />
      <img className={styles.icon} src={heart} alt="icon" />
    </div>
  );
};

export default Icons;
