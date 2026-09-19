import React from 'react';
import fs from 'fs';
import path from 'path';
import styles from './Gallery.module.css';

export default function GalleryPage() {
  // Read images directly from the public/gallery folder!
  // This means you can just drop photos in the folder and they will automatically appear here.
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  let images: string[] = [];
  
  try {
    if (fs.existsSync(galleryDir)) {
      const files = fs.readdirSync(galleryDir);
      // Filter for image files only
      images = files.filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
    }
  } catch (error) {
    console.error("Error reading gallery directory:", error);
  }

  // A helper function to map filenames to beautiful descriptive titles
  const getCaption = (filename: string) => {
    const customNames: Record<string, string> = {
      'abhishekam.png': 'Divine Abhishekam',
      'abhishekam2.png': 'Panchamrutha Abhishekam',
      'adiseshu.png': 'Adiseshu Darshanam',
      'entrance.png': 'Temple Entrance',
      'moolavaru.png': 'Sri Veerakethamma Moolavaru',
      'nameplate.png': 'Temple Nameplate',
      'temple.png': 'Temple Architecture',
      'temple2.png': 'Temple Premises'
    };

    if (customNames[filename]) {
      return customNames[filename];
    }
    
    // Fallback: remove extension and capitalize first letter
    const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
    return nameWithoutExt.charAt(0).toUpperCase() + nameWithoutExt.slice(1);
  };

  return (
    <div className={styles.galleryPage}>
      <div className={styles.heroSection}>
        <div className={`container ${styles.heroContent}`}>
          <h1>Temple Gallery</h1>
          <div className={styles.heroDivider}>ॐ</div>
          <p>Glimpses of the divine, our festivals, and our community.</p>
        </div>
      </div>

      <div className={`container ${styles.mainContent}`}>
        {images.length > 0 ? (
          <div className={styles.photoGrid}>
            {images.map((imgName, index) => (
              <div key={index} className={styles.photoCard}>
                <div className={styles.photoWrapper}>
                  <img src={`/gallery/${imgName}`} alt={getCaption(imgName)} className={styles.photo} />
                </div>
                <div className={styles.photoCaption}>
                  <h3>{getCaption(imgName)}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h2>No Photos Yet!</h2>
            <p>Please place your images into the <strong>d:\temple\web\public\gallery</strong> folder.</p>
            <p>Once you save them there and refresh this page, they will automatically appear!</p>
          </div>
        )}
      </div>
    </div>
  );
}
