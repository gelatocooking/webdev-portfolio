import React from 'react';
import { Link } from 'react-router-dom';  // Assuming you are using react-router for navigation
import styles from '../module-css/Services.module.css';

const Services: React.FC = () => {
  return (
    <section className={styles.servicesContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Nasze Usługi</h1>
      </header>

      <div className={styles.servicesList}>
        <div className={styles.serviceItem}>
          <div className={`${styles.serviceOverlay} ${styles.pulseAnimation}`}>
            Stworzenie Kontentu
          </div>
          <div className={styles.serviceContent}>
            <h2 className={styles.subheading}>Stworzenie Kontentu</h2>
            <p className={styles.text}>
              Oferuję pomoc w tworzeniu treści, które mogą pomóc w skutecznej komunikacji online. Staram się tworzyć teksty, które są atrakcyjne i mogą wspierać SEO, co może zwiększyć widoczność Twojej firmy w internecie. Jako osoba rozwijająca się w tej dziedzinie, chętnie uczę się nowych metod i technik, aby dostarczać coraz lepsze rezultaty.
            </p>
          </div>
        </div>

        <div className={styles.serviceItem}>
          <div className={`${styles.serviceOverlay} ${styles.pulseAnimation}`}>
            Responsywny Design
          </div>
          <div className={styles.serviceContent}>
            <h2 className={styles.subheading}>Responsywny Design</h2>
            <p className={styles.text}>
              Tworzę proste, responsywne strony internetowe, które powinny dobrze wyglądać i działać na różnych urządzeniach – komputerze, tablecie czy smartfonie. Moim celem jest, aby Twoja strona była zarówno estetyczna, jak i funkcjonalna. Stale poszerzam swoją wiedzę, aby tworzyć strony, które oferują przyjemne doświadczenie użytkownikom.
            </p>
          </div>
        </div>

        <div className={styles.serviceItem}>
          <div className={`${styles.serviceOverlay} ${styles.pulseAnimation}`}>
            Wdrożenie Strony do Internetu
          </div>
          <div className={styles.serviceContent}>
            <h2 className={styles.subheading}>Wdrożenie Strony do Internetu</h2>
            <p className={styles.text}>
              Pomagam we wdrożeniu strony do internetu, aby była dostępna dla Twoich klientów. Korzystam z narzędzi takich jak Vercel, które ułatwiają ten proces i zapewniają, że strona będzie działać stabilnie. Jako osoba rozwijająca się w tej branży, stawiam na naukę i doskonalenie swoich umiejętności, aby zapewnić solidne podstawy każdemu projektowi.
            </p>
          </div>
        </div>

        <div className={styles.serviceItem}>
          <div className={`${styles.serviceOverlay} ${styles.pulseAnimation}`}>
            Podstawowa Analiza Słów Kluczowych
          </div>
          <div className={styles.serviceContent}>
            <h2 className={styles.subheading}>Podstawowa Analiza Słów Kluczowych</h2>
            <p className={styles.text}>
              Przeprowadzam wstępną analizę słów kluczowych, co może pomóc Twojej stronie być lepiej widoczną w wynikach wyszukiwania. Jest to ważny krok w kierunku lepszej optymalizacji SEO. Jako osoba ucząca się, nieustannie poszukuję nowych sposobów na poprawę widoczności stron i staram się dostarczać wartościowe wyniki, które mogą wspierać Twoją firmę.
            </p>
          </div>
        </div>

        <div className={styles.serviceItem}>
          <div className={`${styles.serviceOverlay} ${styles.pulseAnimation}`}>
            Techniczne SEO
          </div>
          <div className={styles.serviceContent}>
            <h2 className={styles.subheading}>Techniczne SEO</h2>
            <p className={styles.text}>
              Oferuję podstawowe usługi związane z technicznym SEO, które mogą pomóc w poprawie widoczności Twojej strony w wynikach wyszukiwania. Zajmuję się optymalizacją technicznych aspektów strony, takich jak struktura kodu czy szybkość ładowania. Jako osoba na początku swojej kariery, nieustannie doskonalę swoje umiejętności w tej dziedzinie, aby dostarczać coraz lepsze rezultaty.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.contactSection}>
        <Link to="/kontakt" className={styles.contactLink}>
          Skontaktuj się ze mną
        </Link>
      </div>
    </section>
  );
};

export default Services;
