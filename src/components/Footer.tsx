import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        
        <div className={styles.footerSection}>
          <h3>Sri Veerakethamma Temple</h3>
          <p>Kallumarri Village, Anantapur District, Andhra Pradesh, India</p>
          <p>Email: info@sriveerakethamma.org</p>
          <p>Phone: +91 98765 43210</p>
        </div>

        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/events">Events & Festivals</Link></li>
            <li><Link href="/sevas">Book a Seva</Link></li>
            <li><Link href="/donations">Donate Online</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Sri Veerakethamma Temple Trust. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
