import React from 'react';
import styles from './module-css/Technologies.module.css';

const Technologies: React.FC = () => {
  return (
    <section className={styles.technologies}>
      <h2 className={styles.subheading}>Technologie</h2>
      <p className={styles.text}>
        Specjalizuję się w tworzeniu stron przy użyciu React, TypeScript oraz Serverless na platformie Vercel. Te technologie pozwalają na szybkie wdrażanie aplikacji, zapewniając jednocześnie stabilność i wydajność. Skupiam się na używaniu narzędzi, które umożliwiają szybkie dostarczanie jakościowych produktów.
      </p>
    </section>
  );
};

export default Technologies;
