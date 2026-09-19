"use client";

import React, { useState } from 'react';
import { FaOm, FaCalendarAlt, FaUser, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';
import styles from './Sevas.module.css';

const sevasList = [
  {
    id: 'abhishekam',
    name: 'Panchamrutha Abhishekam',
    timings: 'Daily 5:30 AM',
    description: 'The sacred bathing of the deity with five divine items: Milk, Curd, Ghee, Honey, and Sugar. A highly auspicious seva performed early morning.'
  },
  {
    id: 'kumkumarchana',
    name: 'Sri Chakra Kumkumarchana',
    timings: 'Fridays & Festival Days',
    description: 'Archana performed with sacred kumkum while chanting the Lalitha Sahasranamam, invoking the blessings of the Mother Goddess for prosperity and peace.'
  },
  {
    id: 'kalyanotsavam',
    name: 'Nitya Kalyanotsavam',
    timings: 'Daily 10:30 AM',
    description: 'The celestial wedding ceremony of the divine deities. Devotees can participate as kartas to receive immense spiritual merit.'
  },
  {
    id: 'vahanaseva',
    name: 'Pallaki Utsavam',
    timings: 'Tuesdays 6:00 PM',
    description: 'The processional deity is taken around the temple courtyard in a beautifully decorated palanquin amidst Vedic chanting and music.'
  }
];

export default function SevasPage() {
  const [selectedSeva, setSelectedSeva] = useState(sevasList[0]);
  const [isBooking, setIsBooking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleBookClick = (seva: any) => {
    setSelectedSeva(seva);
    setIsBooking(true);
    setIsSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsBooking(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <div className={styles.sevasPage}>
      <div className={styles.heroSection}>
        <div className={`container ${styles.heroContent}`}>
          <h1>e-Darshan & Seva Portal</h1>
          <div className={styles.heroDivider}>ॐ</div>
          <p>Book your divine participation online for a hassle-free spiritual experience.</p>
        </div>
      </div>

      <div className={`container ${styles.mainContent}`}>
        
        {isBooking ? (
          <div className={styles.successMessage}>
            <h2>Online Bookings Closed</h2>
            <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              Online bookings for <strong>{selectedSeva.name}</strong> are not yet open. 
            </p>
            <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--primary-maroon)', fontWeight: '600' }}>
              Please contact the temple authorities directly to make a booking.
            </p>
            <button className="btn btn-primary" onClick={() => setIsBooking(false)}>Go Back</button>
          </div>
        ) : (
          <div className={styles.sevasLayout}>
            <div className={styles.portalHeader}>
              <h2>Available Sevas</h2>
              <p>Select a seva from the list below to proceed with online booking. Advance booking is highly recommended for festival days.</p>
            </div>

            <div className={styles.sevasList}>
              {sevasList.map((seva) => (
                <div key={seva.id} className={styles.sevaCard}>
                  <div className={styles.sevaInfo}>
                    <div className={styles.sevaIcon}><FaOm /></div>
                    <div className={styles.sevaDetails}>
                      <h3>{seva.name}</h3>
                      <span className={styles.sevaTimings}>{seva.timings}</span>
                      <p>{seva.description}</p>
                    </div>
                  </div>
                  <div className={styles.sevaAction}>
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleBookClick(seva)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
