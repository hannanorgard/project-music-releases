import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className="headTitle">New Album and Singles</h1>
    </div>
  );
};

export default Header;
