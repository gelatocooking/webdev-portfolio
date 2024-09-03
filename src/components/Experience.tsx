import React from 'react';
import styles from './module-css/Experience.module.css';

const Experience: React.FC = () => {
  return (
    <section className={styles.experience}>
      <h2 className={styles.subheading}>Moje Doświadczenie</h2>
      <p className={styles.text}>
        Mam roczne doświadczenie w tworzeniu prostych, ale funkcjonalnych stron wizytówkowych. Skoncentrowany na potrzebach małych firm, pomagam w budowaniu ich tożsamości marki. Mimo ograniczonego doświadczenia, moje strony przynoszą realne efekty – jeden z klientów pozyskał pierwsze telefony dzięki mojej pracy.
      </p>
    </section>
  );
};

export default Experience;
