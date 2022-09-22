import React from 'react';
import styles from './Icons.module.css';

import dots from './icons-img/dots.svg';
import heart from './icons-img/heart.svg';
import play from './icons-img/play.svg';

const Icons = () => {
  return (
    <div className={styles.iconContainer}>
      <img className={styles.icons} src={dots} alt="icon" />
      <img className={styles.icons} src={heart} alt="icon" />
      <img className={styles.icons} src={play} alt="icon" />
    </div>
  );
};

export default Icons;
