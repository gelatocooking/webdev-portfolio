import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './module-css/Navbar.module.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <header>

    <nav className={styles.navbar} aria-label="Main Navigation">
      <div className={styles.logo}>
        <Link to="/" aria-label="Home">Bednarski.dev</Link>
      </div>
      <div id="main-menu" className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`} role="menu">
        <Link to="/o-mnie" onClick={() => setMenuOpen(false)} role="menuitem" aria-label="About Us">O mnie</Link>
        <Link to="/kontakt" onClick={() => setMenuOpen(false)} role="menuitem" aria-label="Contact Us">Kontakt</Link>
        <Link to="/uslugi" onClick={() => setMenuOpen(false)} role="menuitem" aria-label="Services">Usługi</Link>
        <Link to="/blog" onClick={() => setMenuOpen(false)} role="menuitem" aria-label="Blog">Blog</Link>
      </div>
      <button
        className={styles.burger}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-controls="main-menu"
        aria-label="Toggle navigation"
        >
        ☰
      </button>
    </nav>
      </header>
  );
};

export default Navbar;
