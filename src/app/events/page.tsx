import React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaClock, FaShareAlt } from 'react-icons/fa';
import styles from './Events.module.css';

// Mock data for events
const upcomingEvents = [
  {
    id: 'brahmotsavam',
    title: 'Annual Brahmotsavam',
    date: 'Oct 20 - Oct 25, 2026',
    time: '6:00 AM onwards',
    location: 'Temple Premises',
    description: 'The grand annual festival celebrating the divine presence. Includes special alankarana, rathotsavam, and cultural programs every evening.',
    image: 'https://images.unsplash.com/photo-1590393967824-7622d99723bd?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'navaratri',
    title: 'Navaratri Celebrations',
    date: 'Oct 10 - Oct 19, 2026',
    time: '5:30 PM Daily',
    location: 'Main Sanctum',
    description: 'Nine nights of devotion. The Goddess will be adorned in nine different avatars. Special kumkumarchana available for booking.',
    image: 'https://images.unsplash.com/photo-1610486518179-c5c7ce1a545c?q=80&w=600&auto=format&fit=crop'
  }
];

export default function EventsPage() {
  return (
    <div className={styles.eventsPage}>
      <div className={styles.heroSection}>
        <div className={`container ${styles.heroContent}`}>
          <h1>Events & Festivals</h1>
          <p>Join us in celebrating the divine traditions and joyous festivals.</p>
        </div>
      </div>

      <div className={`container ${styles.mainContent}`}>
        <div className={styles.tabs}>
          <button className={`${styles.tabBtn} ${styles.active}`}>Upcoming</button>
        </div>

        <div className={styles.eventsList}>
          {upcomingEvents.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.eventImage} style={{ backgroundImage: `url(${event.image})` }}></div>
              <div className={styles.eventDetails}>
                <div className={styles.eventDateBadge}>{event.date.split(' - ')[0]}</div>
                <h2>{event.title}</h2>
                <div className={styles.eventMeta}>
                  <span><FaClock /> {event.time}</span>
                  <span><FaMapMarkerAlt /> {event.location}</span>
                </div>
                <p>{event.description}</p>
                <div className={styles.eventActions}>
                  <Link href={`/events/${event.id}`} className="btn btn-primary">View Schedule</Link>
                  <button className={styles.shareBtn}><FaShareAlt /> Share</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
