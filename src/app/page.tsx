import React from 'react';
import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      
      {/* Welcoming Subtitle Strip */}
      <div className={styles.panchangStrip}>
        <div className="container">
          <p style={{ textAlign: 'center', fontSize: '1.05rem', fontWeight: '500', letterSpacing: '1px' }}>
            The Divine Abode of Peace and Prosperity in Kallumarri
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div className={`container ${styles.heroContent}`}>
            <h1 className={styles.heroTitle}>Sri Veerakethamma Temple</h1>
            <div className={styles.heroDivider}>ॐ</div>
            <p className={styles.heroSubtitle}>A Divine Sanctuary of Peace and Devotion in Kallumarri</p>
          </div>
        </div>
      </section>

      {/* Traditional Action Section */}
      <section className={styles.actionSection}>
        <div className={`container ${styles.actionContainer}`}>
          
          <div className={styles.introBlock}>
            <h2 className={styles.sectionTitle}>Welcome to the Divine Kshetra</h2>
            <p className={styles.introText}>
              Sri Veerakethamma Temple stands as a beacon of spirituality and ancient heritage. We invite devotees to experience the profound tranquility, participate in sacred rituals, and seek the blessings of the Mother Goddess.
            </p>
            <div className={styles.heroActions}>
              <Link href="/sevas" className="btn btn-primary">Book a Seva</Link>
              <Link href="/visit" className="btn btn-saffron">Plan Your Visit</Link>
            </div>
          </div>

          <div className={styles.darshanImageWrapper}>
            <img src="/ammavaru.png" alt="Sri Veerakethamma Ammavaru" className={styles.darshanImage} />
          </div>

        </div>

        <div className={`container ${styles.quickLinksContainer}`}>
          <div className={styles.quickLinksGrid}>
            <Link href="/events" className={styles.quickLinkCard}>
              <div className={styles.cardBorder}>
                <h3>Festivals & Events</h3>
                <p>Join us in our grand annual celebrations.</p>
                <span className={styles.linkArrow}>Explore &rarr;</span>
              </div>
            </Link>
            
            <Link href="/donations" className={styles.quickLinkCard}>
              <div className={styles.cardBorder}>
                <h3>Hundi & Donations</h3>
                <p>Support Annadana and temple renovations.</p>
                <span className={styles.linkArrow}>Donate &rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Live Darshan & Notice Board */}
      <section className={styles.featuresSection}>
        <div className={`container ${styles.featuresGrid}`}>
          
          <div className={styles.noticeBoard}>
            <h2 className={styles.sectionTitle}>Temple Announcements</h2>
            <div className={styles.noticeList} style={{ padding: '2rem 0', fontStyle: 'italic', color: 'var(--text-muted)' }}>
              No announcements available.
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
