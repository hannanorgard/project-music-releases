import React from 'react';
import styles from './Icons.module.css';

import dots from './icons-img/dots.svg';
import play from './icons-img/play.svg';
import heart from './icons-img/heart.svg';

const Icons = (props) => {
  // console.log(props);
  return (
    <div className={styles.iconContainer}>
      <img className={styles.icon} src={dots} alt="icon" />
      <a href={props.url} target="_blank" rel="noreferrer">
        <img
          className={styles.icon}
          id={styles.playIcon}
          src={play}
          alt="icon"
        />
      </a>
      <img className={styles.icon} src={heart} alt="icon" />
    </div>
  );
};

export default Icons;
