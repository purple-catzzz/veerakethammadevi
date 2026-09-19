import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';
import styles from './EventDetail.module.css';

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const eventName = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <div className={styles.detailPage}>
      <div className={`container ${styles.contentWrapper}`}>
        <Link href="/events" className={styles.backBtn}>
          <FaArrowLeft /> Back to Events
        </Link>
        
        <div className={styles.messageBox}>
          <FaCalendarAlt className={styles.icon} />
          <h1>{eventName} Schedule</h1>
          <p className={styles.statusText}>Schedule is not updated yet!</p>
          <p className={styles.subText}>The detailed hour-by-hour schedule for this event is currently being finalized by the temple committee. Please check back closer to the event date.</p>
        </div>
      </div>
    </div>
  );
}
