'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/ScrollProgress.module.css';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.track}>
        <div 
          className={styles.progress} 
          style={{ height: `${progress}%` }}
        />
        <div 
          className={styles.glow}
          style={{ top: `${progress}%` }}
        />
      </div>
    </div>
  );
}

