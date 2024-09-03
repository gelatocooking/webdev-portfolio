import React from 'react';
import styles from '../module-css/AboutMe.module.css';
import Footer from '../Footer';

const About: React.FC = () => {
  return (
    <section className={styles.aboutContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>O mnie</h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.subheading}>
          <span className={styles.icon}>💼</span> Moje Doświadczenie
        </h2>
        <p className={styles.text}>
          Mam roczne doświadczenie w tworzeniu prostych, ale funkcjonalnych stron wizytówkowych. Skoncentrowany na potrzebach małych firm, pomagam w budowaniu ich tożsamości marki. Mimo ograniczonego doświadczenia, moje strony przynoszą realne efekty – jeden z klientów pozyskał pierwsze telefony dzięki mojej pracy.
        </p>
      </section>

      <section className={styles.sectionAlt}>
        <h2 className={styles.subheading}>
          <span className={styles.icon}>🤝</span> Moje Podejście
        </h2>
        <p className={styles.text}>
          Zawsze podchodzę do każdego klienta indywidualnie. Rozumiem, że każdy projekt jest inny i wymaga unikalnego podejścia. Skupiam się na dostarczaniu wartościowych rozwiązań, które są przemyślane, estetyczne i funkcjonalne. Współpracuję z klientami, aby tworzyć strony, które pomagają im osiągnąć ich cele.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subheading}>
          <span className={styles.icon}>💻</span> Technologie
        </h2>
        <p className={styles.text}>
          Specjalizuję się w tworzeniu stron przy użyciu React, TypeScript oraz Serverless na platformie Vercel. Te technologie pozwalają na szybkie wdrażanie aplikacji, zapewniając jednocześnie stabilność i wydajność. Skupiam się na używaniu narzędzi, które umożliwiają szybkie dostarczanie jakościowych produktów.
        </p>
      </section>

      <section className={styles.sectionAlt}>
        <h2 className={styles.subheading}>
          <span className={styles.icon}>✍️</span> Krótka Notka Osobista
        </h2>
        <p className={styles.text}>
          Jestem pasjonatem tworzenia prostych, ale skutecznych stron internetowych. Lubię wyzwania i stale rozwijam swoje umiejętności, aby dostarczać coraz lepsze produkty moim klientom. Każdy projekt traktuję jako okazję do nauki i doskonalenia swojego warsztatu. Moje zainteresowania obejmują nie tylko programowanie, ale także design i SEO, co pozwala mi tworzyć kompleksowe rozwiązania.
        </p>
      </section>

      <Footer />
    </section>
  );
};

export default About;
