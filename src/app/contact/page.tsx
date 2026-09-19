import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <div className={styles.heroSection}>
        <div className={`container ${styles.heroContent}`}>
          <h1>Contact Us</h1>
          <p>We are here to assist you with your pilgrimage and pooja queries.</p>
        </div>
      </div>

      <div className={`container ${styles.mainContent}`}>
        <div className={styles.contactGrid}>
          
          <div className={styles.contactInfo}>
            <h2>Get in Touch</h2>
            <p>If you have any questions regarding sevas, donations, or accommodation, please reach out to the respective departments.</p>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}><FaMapMarkerAlt /></div>
              <div>
                <h3>Temple Address</h3>
                <p>Sri Veerakethamma Temple,<br/>Kallumarri Village, Anantapur District,<br/>Andhra Pradesh, India - 515511</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}><FaPhoneAlt /></div>
              <div>
                <h3>Phone & WhatsApp</h3>
                <p>General Enquiry: +91 98765 43210</p>
                <p>Seva Booking: +91 98765 43211</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}><FaEnvelope /></div>
              <div>
                <h3>Email</h3>
                <p>info@sriveerakethamma.org</p>
              </div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}><FaClock /></div>
              <div>
                <h3>Office Timings</h3>
                <p>9:00 AM to 5:00 PM (Daily)</p>
              </div>
            </div>
          </div>

          <div className={styles.contactFormContainer}>
            <h2>Send us a Message</h2>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required placeholder="Your name" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required placeholder="Your email" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="department">Department</label>
                <select id="department" name="department">
                  <option value="general">General Enquiry</option>
                  <option value="sevas">Sevas & Poojas</option>
                  <option value="donations">Donations</option>
                  <option value="accommodation">Accommodation</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Send Message</button>
            </form>
          </div>

        </div>

        <div className={styles.mapContainer}>
          <h2>Location Map</h2>
          <div className={styles.mapEmbed}>
            {/* Placeholder for iframe map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.5303681498634!2d77.5910!3d14.6818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQwJzU0LjUiTiA3N8KwMzUnMjcuNiJF!5e0!3m2!1sen!2sin!4v1633000000000!5m2!1sen!2sin" 
              width="100%" 
              height="400" 
              style={{border: 0}} 
              allowFullScreen={true} 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
