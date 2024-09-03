import React from 'react';
import styles from '../module-css/Contact.module.css';
import Footer from '../Footer';
const Contact: React.FC = () => {
  return (
    <section className={styles.contactContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Kontakt</h1>
      </header>

      <section className={styles.formSection}>
        <h2 className={styles.subheading}>Formularz Kontaktowy</h2>
        <form className={styles.contactForm}>
          <label htmlFor="name" className={styles.label}>Imię i nazwisko</label>
          <input type="text" id="name" name="name" className={styles.input} required />

          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" className={styles.input} required />

          <label htmlFor="message" className={styles.label}>Treść wiadomości</label>
          <textarea id="message" name="message" className={styles.textarea} required></textarea>

          <button type="submit" className={styles.submitButton}>Wyślij</button>
        </form>
      </section>

      <section className={styles.infoSection}>
        <h2 className={styles.subheading}>Dane Kontaktowe</h2>
        <p className={styles.contactInfo}>
          Telefon: <a href="tel:+48693858260" className={styles.contactLink}>+48 693 858 260</a><br />
          Email: <a href="mailto:bednarkacp1506@gmail.com" className={styles.contactLink}>bednarkacp1506@gmail.com</a><br />
        </p>
        <p className={styles.availability}>Odpowiadam w ciągu 24 godzin.</p>
      </section>

      <section className={styles.mapSection}>
        <h2 className={styles.subheading}>Nasza Lokalizacja</h2>
        <div className={styles.mapContainer}>
          {/* Placeholder for map iframe */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.59614162375!2d21.0122298!3d52.2296756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669182ce59%3A0x9f94ef1e32514ff8!2sWarszawa!5e0!3m2!1spl!2spl!4v1611608725684!5m2!1spl!2spl" 
            width="100%" 
            height="400px" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            title="Lokalizacja firmy">
          </iframe>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Contact;
