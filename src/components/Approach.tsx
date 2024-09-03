import React from 'react';
import styles from './module-css/Approach.module.css';

const Approach: React.FC = () => {
  return (
    <section className={styles.approach}>
      <h2 className={styles.subheading}>Moje Podejście</h2>
      <p className={styles.text}>
        Zawsze podchodzę do każdego klienta indywidualnie. Rozumiem, że każdy projekt jest inny i wymaga unikalnego podejścia. Skupiam się na dostarczaniu wartościowych rozwiązań, które są przemyślane, estetyczne i funkcjonalne. Współpracuję z klientami, aby tworzyć strony, które pomagają im osiągnąć ich cele.
      </p>
    </section>
  );
};

export default Approach;
