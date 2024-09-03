import React from "react";
import styles from "./module-css/OurServices.module.css";

const OurServices: React.FC = () => {
  return (
    <section className={styles.ourServicesSection}>
      <h2 className={styles.sectionTitle}>Co oferuję?</h2>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <div className={styles.serviceIcon}>📝</div>
          <h3 className={styles.serviceTitle}>Stworzenie kontentu</h3>
          <p className={styles.serviceDescription}>
            Tworzymy profesjonalny, dopasowany kontent, który w pełni odda
            charakter Twojej firmy i przyciągnie klientów.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.serviceIcon}>📱</div>
          <h3 className={styles.serviceTitle}>Responsywny design</h3>
          <p className={styles.serviceDescription}>
            Twoja strona internetowa będzie doskonale wyglądać i działać na
            każdym urządzeniu – komputerze, tablecie i smartfonie.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.serviceIcon}>🌐</div>
          <h3 className={styles.serviceTitle}>Wdrożenie strony do internetu</h3>
          <p className={styles.serviceDescription}>
            W pełni obsługujemy wdrożenie strony na serwer, aby była szybko
            dostępna dla Twoich klientów w sieci.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.serviceIcon}>🔍</div>
          <h3 className={styles.serviceTitle}>
            Podstawowa analiza słów kluczowych
          </h3>
          <p className={styles.serviceDescription}>
            Przeprowadzamy wstępną analizę słów kluczowych, aby Twoja strona
            była lepiej widoczna w wyszukiwarkach.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.serviceIcon}>⚙️</div>
          <h3 className={styles.serviceTitle}>Techniczne SEO</h3>
          <p className={styles.serviceDescription}>
            Optymalizujemy techniczne aspekty strony, aby poprawić jej
            widoczność w wynikach wyszukiwania.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
