import React from 'react';
import styles from './module-css/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>O mnie</h1>
    </header>
  );
};

export default Header;
