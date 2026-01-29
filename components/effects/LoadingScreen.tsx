'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/LoadingScreen.module.css';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    // Hide loader after animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`${styles.loader} ${progress >= 100 ? styles.fadeOut : ''}`}>
      {/* Background grid */}
      <div className={styles.grid}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.gridLine} style={{ animationDelay: `${i * 0.05}s` }} />
        ))}
      </div>

      {/* Center content */}
      <div className={styles.content}>
        {/* Logo/Initials */}
        <div className={styles.logoContainer}>
          <div className={styles.logoRing}>
            <svg viewBox="0 0 100 100" className={styles.logoSvg}>
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * Math.min(progress, 100)) / 100}
                className={styles.progressCircle}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#32d4de" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className={styles.initials}>GR</span>
        </div>

        {/* Name reveal */}
        <div className={styles.nameContainer}>
          <span className={styles.nameLetter} style={{ animationDelay: '0.1s' }}>G</span>
          <span className={styles.nameLetter} style={{ animationDelay: '0.15s' }}>o</span>
          <span className={styles.nameLetter} style={{ animationDelay: '0.2s' }}>w</span>
          <span className={styles.nameLetter} style={{ animationDelay: '0.25s' }}>r</span>
          <span className={styles.nameLetter} style={{ animationDelay: '0.3s' }}>i</span>
          <span className={styles.nameLetter} style={{ animationDelay: '0.35s' }}>s</span>
          <span className={styles.nameLetter} style={{ animationDelay: '0.4s' }}>h</span>
          <span className={styles.nameSpace}> </span>
          <span className={styles.nameLetter} style={{ animationDelay: '0.5s' }}>R</span>
          <span className={styles.nameLetter} style={{ animationDelay: '0.55s' }}>a</span>
          <span className={styles.nameLetter} style={{ animationDelay: '0.6s' }}>j</span>
          <span className={styles.nameLetter} style={{ animationDelay: '0.65s' }}>a</span>
          <span className={styles.nameLetter} style={{ animationDelay: '0.7s' }}>g</span>
          <span className={styles.nameLetter} style={{ animationDelay: '0.75s' }}>o</span>
          <span className={styles.nameLetter} style={{ animationDelay: '0.8s' }}>p</span>
          <span className={styles.nameLetter} style={{ animationDelay: '0.85s' }}>a</span>
          <span className={styles.nameLetter} style={{ animationDelay: '0.9s' }}>l</span>
        </div>

        {/* Loading bar */}
        <div className={styles.loadingBar}>
          <div 
            className={styles.loadingProgress} 
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Status text */}
        <div className={styles.statusText}>
          <span className={styles.statusDot} />
          <span>Initializing system...</span>
        </div>
      </div>

      {/* Corner decorations */}
      <div className={styles.cornerTL} />
      <div className={styles.cornerBR} />
    </div>
  );
}

