import React from 'react';
import styles from './module-css/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMenu}>
        <a href="/about" className={styles.footerLink}>O mnie</a>
        <a href="/services" className={styles.footerLink}>Usługi</a>
        <a href="/blog" className={styles.footerLink}>Blog</a>
        <a href="/contact" className={styles.footerLink}>Kontakt</a>
      </div>
      <div className={styles.footerContact}>
        <p>Email: <a href="mailto:kontakt@twojadomena.pl" className={styles.footerLink}>bednarkacp1506@gmail.com</a></p>
        <p>Telefon: <a href="tel:+48123456789" className={styles.footerLink}>+48 693 858 260</a></p>
      </div>
      <div className={styles.footerCopyright}>
        <p>© 2024 Bednarki.dev. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;
