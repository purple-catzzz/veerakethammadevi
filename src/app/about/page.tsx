import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={`container ${styles.heroContent}`}>
          <h1>About the Temple</h1>
          <p>Discover the ancient history and divine grace of Sri Veerakethamma</p>
        </div>
      </div>

      <div className={`container ${styles.mainContent}`}>

        {/* History and Legend */}
        <section className={styles.section}>
          <div className={styles.textContent}>
            <h2>History & Legend</h2>
            <p>
              Sri Veerakethamma Temple, located in the serene village of Kallumarri, is a powerful kshetra known for its immense spiritual energy. For generations, devotees have flocked to this sacred space seeking the blessings of the Mother Goddess, who is revered as the fierce protector and compassionate mother.
            </p>
            <p>
              According to local legends, the self-manifested (Swayambhu) idol of the Goddess was discovered by pious villagers centuries ago. Recognizing the divine aura of the place, they established a humble shrine, which over the years, through the continuous devotion and support of the community, evolved into the magnificent temple we see today. The Goddess Veerakethamma is believed to ward off evil, grant boons to the righteous, and bring peace and prosperity to the entire region.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img src="/devi.png" alt="Devi Alankarana" className={styles.sideImage} />
          </div>
        </section>

        {/* Architecture & Kshetra */}
        <section className={`${styles.section} ${styles.reverseLayout}`}>
          <div className={styles.textContent}>
            <h2>Architecture & Sacred Features</h2>
            <p>
              The temple's architecture is a beautiful blend of traditional South Indian styles, featuring intricate carvings that narrate tales from ancient scriptures. The main sanctum sanctorum (Garbhagriha) houses the majestic idol of Sri Veerakethamma, exuding a powerful yet calming presence.
            </p>
            <p>
              The temple complex also includes a spacious Mandapam for conducting grand rituals, a dedicated space for Navagrahas, and a holy temple pond (Kalyani) where devotees cleanse themselves before darshan. The atmosphere is always resonating with Vedic chants, filling the air with divine vibrations.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <img src="/architecture.png" alt="Temple Architecture" className={styles.sideImage} />
          </div>
        </section>

        {/* Trust and Committee */}
        <section className={styles.section}>
          <div className={styles.textContent}>
            <h2>The Temple Trust & Committee</h2>
            <p>
              The administration and daily operations of the temple are managed by the Sri Veerakethamma Temple Trust. The committee is comprised of dedicated community leaders, spiritual guides, and lifelong devotees who volunteer their time to ensure the temple is maintained to the highest standards.
            </p>
            <p>
              Our trust is committed not only to conducting daily poojas and annual festivals flawlessly but also to engaging in various charitable activities. From regular Annadana (free meals) to educational support for the underprivileged in Kallumarri, the trust acts as a pillar of support for the village.
            </p>

            <div className={styles.committeeList}>
              <h3>Key Members</h3>
              <ul>
                <li><strong>President:</strong> [Name to be updated]</li>
                <li><strong>Secretary:</strong> [Name to be updated]</li>
                <li><strong>Treasurer:</strong> [Name to be updated]</li>
                <li><strong>Chief Priest:</strong> [Name to be updated]</li>
              </ul>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img src="/templeimg.png" alt="Sri Veerakethamma Temple" className={styles.sideImage} />
          </div>
        </section>

      </div>
    </div>
  );
}
