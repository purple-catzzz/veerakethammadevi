"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>

      <div className={styles.announcementStrip}>
        <div className="container" style={{ textAlign: 'center', fontSize: '1rem', letterSpacing: '1px' }}>
          <p>
            శ్రీ మాత్రే నమః | Sri Matre Namaha
          </p>
        </div>
      </div>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logo}>
            <Link href="/">
              <span className={styles.templeName}>ॐ Sri Veerakethamma Temple</span>
            </Link>
          </div>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/events" onClick={() => setIsMenuOpen(false)}>Events</Link>
            <Link href="/sevas" onClick={() => setIsMenuOpen(false)}>Sevas</Link>
            <Link href="/visit" onClick={() => setIsMenuOpen(false)}>Visit</Link>
            <Link href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>

          <div className={styles.headerActions}>
            <Link href="/donations" className="btn btn-saffron" style={{display: 'none'}}>Donate</Link>
            <button className={styles.menuBtn} onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
