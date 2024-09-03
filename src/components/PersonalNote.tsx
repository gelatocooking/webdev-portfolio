import React from 'react';
import styles from './module-css/PersonalNote.module.css';

const PersonalNote: React.FC = () => {
  return (
    <section className={styles.personalNote}>
      <h2 className={styles.subheading}>Krótka Notka Osobista</h2>
      <p className={styles.text}>
        Jestem pasjonatem tworzenia prostych, ale skutecznych stron internetowych. Lubię wyzwania i stale rozwijam swoje umiejętności, aby dostarczać coraz lepsze produkty moim klientom. Każdy projekt traktuję jako okazję do nauki i doskonalenia swojego warsztatu. Moje zainteresowania obejmują nie tylko programowanie, ale także design i SEO, co pozwala mi tworzyć kompleksowe rozwiązania.
      </p>
    </section>
  );
};

export default PersonalNote;
