import React from 'react';
import { FaCar, FaTrain, FaPlane, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import styles from './Visit.module.css';

export default function VisitPage() {
  return (
    <div className={styles.visitPage}>
      <div className={styles.heroSection}>
        <div className={`container ${styles.heroContent}`}>
          <h1>Plan Your Visit</h1>
          <p>Everything you need to know for a peaceful pilgrimage to Kallumarri.</p>
        </div>
      </div>

      <div className={`container ${styles.mainContent}`}>
        
        <section className={styles.infoSection}>
          <h2><FaInfoCircle className={styles.icon} /> Temple Timings</h2>
          <p className={styles.note}>Note: Timings may change during festivals or special poojas.</p>
          <div className={styles.timingGrid}>
            <div className={styles.timingCard}>
              <h3>Normal Days</h3>
              <ul>
                <li><span>Temple Opens:</span> 6:00 AM</li>
                <li><span>Morning Pooja:</span> 6:30 AM - 8:00 AM</li>
                <li><span>Darshan:</span> 8:00 AM - 1:00 PM</li>
                <li><span>Temple Closes:</span> 1:00 PM - 4:00 PM</li>
                <li><span>Evening Darshan:</span> 4:00 PM - 8:00 PM</li>
                <li><span>Maha Mangalarathi:</span> 8:00 PM</li>
              </ul>
            </div>
            <div className={styles.timingCard}>
              <h3>Festival Days (Fridays, Navaratri)</h3>
              <ul>
                <li><span>Temple Opens:</span> 5:00 AM</li>
                <li><span>Abhishekam:</span> 5:30 AM - 7:30 AM</li>
                <li><span>Continuous Darshan:</span> 7:30 AM - 9:00 PM</li>
                <li><span>Special Alankaram:</span> 6:00 PM</li>
                <li><span>Maha Mangalarathi:</span> 9:00 PM</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.infoSection}>
          <h2><FaCar className={styles.icon} /> How to Reach</h2>
          <div className={styles.travelTableWrapper}>
            <table className={styles.travelTable}>
              <thead>
                <tr>
                  <th>From</th>
                  <th>Distance (km)</th>
                  <th>Mode</th>
                  <th>Approx. Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Anantapur (Nearest City)</td>
                  <td>60</td>
                  <td>Bus / Taxi</td>
                  <td>1 hr 15 mins</td>
                </tr>
                <tr>
                  <td>Bengaluru</td>
                  <td>200</td>
                  <td>Car / Train to Anantapur</td>
                  <td>3.5 - 4 hrs</td>
                </tr>
                <tr>
                  <td>Dharmavaram (Nearest Railway)</td>
                  <td>45</td>
                  <td>Auto / Taxi</td>
                  <td>1 hr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.infoSection}>
          <h2>Facilities & Guidelines</h2>
          <div className={styles.guidelinesGrid}>
            <div className={styles.guidelineCard}>
              <h3>Facilities</h3>
              <ul>
                <li>Annadana Hall (Free Meals): 12:30 PM - 2:00 PM</li>
                <li>Clean Drinking Water & Restrooms</li>
                <li>Wheelchair Accessibility</li>
                <li>Ample Parking Space</li>
                <li>Guesthouse Accommodations nearby</li>
              </ul>
            </div>
            <div className={styles.guidelineCard}>
              <h3><FaExclamationTriangle style={{color: 'var(--primary-saffron)'}}/> Do's & Don'ts</h3>
              <ul>
                <li><strong>Dress Code:</strong> Traditional attire is strictly enforced. No shorts or sleeveless tops.</li>
                <li>Photography inside the main sanctum is prohibited.</li>
                <li>Maintain silence in the temple premises.</li>
                <li>Deposit footwear at the designated counter outside.</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
