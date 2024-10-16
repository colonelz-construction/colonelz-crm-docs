import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './styles.module.css'; // Ensure this path is correct

const HomePage: React.FC = () => {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src='./img/colonelz.png' alt="Colonelz Logo" className={styles.logo} />
        <h1 className={styles.title}>Colonelz CRM Documentation</h1>
        <p className={styles.subtitle}>Streamline Your Construction Management</p>
        <button
          className={styles.themeToggle}
          onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
        >
          Switch to {colorMode === 'dark' ? 'Light' : 'Dark'} Theme
        </button>
      </header>

      <main className={styles.main}>
        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <img src='./img/colonelz.png' alt="Construction Management" className={styles.featureImage} />
              <h3>Comprehensive Project Management</h3>
              <p>Manage your projects from inception to completion with intuitive tools.</p>
            </div>
            <div className={styles.featureItem}>
              <img src='./img/colonelz.png' alt="Team Collaboration" className={styles.featureImage} />
              <h3>Team Collaboration</h3>
              <p>Enhance teamwork with real-time communication and file sharing.</p>
            </div>
            <div className={styles.featureItem}>
              <img src='./img/colonelz.png' alt="Advanced Reporting" className={styles.featureImage} />
              <h3>Advanced Reporting</h3>
              <p>Gain insights with robust reporting features and analytics.</p>
            </div>
          </div>
        </section>

        <section className={styles.getStarted}>
          <h2 className={styles.sectionTitle}>Get Started</h2>
          <p>To learn more about how Colonelz CRM can transform your construction business, explore the documentation below or contact us for a demo!</p>
          <a href="/docs/intro" className={styles.button}>View Documentation</a>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
