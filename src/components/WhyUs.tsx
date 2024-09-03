import React from 'react';
import styles from './module-css/WhyUs.module.css';

import { Link } from 'react-router-dom';
const WhyUsSection: React.FC = () => {
  return (
    <section className={styles.whyUsSection}>
      <h2 className={styles.whyUsTitle}>Dlaczego warto wybrać mnie?</h2>
      <p className={styles.whyUsDescription}>
        Moje usługi to gwarancja szybkości, efektywności i przystępnej ceny. Oferuję proste, funkcjonalne strony internetowe, które pomogą Ci wyróżnić się w sieci bez zbędnych kosztów. Moja oferta jest skierowana do małych firm oraz osób prywatnych, które potrzebują profesjonalnej, responsywnej strony internetowej, gotowej do użytku w ciągu zaledwie 7 dni.
      </p>
      <div className={styles.whyUsFeatures}>
        <div className={styles.featureItem}>
          <div className={styles.featureIcon}>⏰</div>
          <h3 className={styles.featureTitle}>Strona gotowa w 7 dni</h3>
          <p className={styles.featureDescription}>
            Otrzymasz w pełni funkcjonalną stronę internetową w ciągu tygodnia. Szybko i bezproblemowo.
          </p>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureIcon}>💰</div>
          <h3 className={styles.featureTitle}>Od 800 zł</h3>
          <p className={styles.featureDescription}>
            Profesjonalna strona internetowa za rozsądną cenę, dostosowana do Twoich potrzeb i budżetu.
          </p>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureIcon}>📱</div>
          <h3 className={styles.featureTitle}>Responsywny design</h3>
          <p className={styles.featureDescription}>
            Twoja strona będzie wyglądać świetnie na każdym urządzeniu – komputerze, tablecie czy smartfonie.
          </p>
        </div>
      </div>
      <Link to='/o-mnie'>
        <button className={styles.ctaButton}>Więcej o mnie</button>
        </Link>
    </section>
  );
};

export default WhyUsSection;
