'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/LoadingScreen.module.css';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if user has already seen loading screen this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    
    if (hasSeenLoader) {
      setIsLoading(false);
      return;
    }

    // First visit - show loading screen
    setIsLoading(true);
    sessionStorage.setItem('hasSeenLoader', 'true');

    // Start exit animation
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2400);

    // Remove from DOM (longer delay for smooth transition)
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`${styles.loader} ${isExiting ? styles.exit : ''}`}>
      {/* Animated background */}
      <div className={styles.bgGradient} />
      
      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className={styles.content}>
        {/* Orbiting rings */}
        <div className={styles.orbitContainer}>
          <div className={styles.orbit1}>
            <div className={styles.orbitDot} />
          </div>
          <div className={styles.orbit2}>
            <div className={styles.orbitDot} />
          </div>
          <div className={styles.orbit3}>
            <div className={styles.orbitDot} />
          </div>
        </div>

        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoG}>G</span>
          <span className={styles.logoR}>R</span>
        </div>

        {/* Name with stagger */}
        <div className={styles.nameWrapper}>
          <div className={styles.nameLine}>
            {'Gowrish'.split('').map((letter, i) => (
              <span 
                key={i} 
                className={styles.letter}
                style={{ animationDelay: `${0.8 + i * 0.05}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
          <div className={styles.nameLine}>
            {'Rajagopal'.split('').map((letter, i) => (
              <span 
                key={i} 
                className={styles.letter}
                style={{ animationDelay: `${1.2 + i * 0.05}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className={styles.tagline}>
          <span className={styles.taglineText}>Research & Systems</span>
          <div className={styles.taglineUnderline} />
        </div>
      </div>

      {/* Scan line effect */}
      <div className={styles.scanLine} />

      {/* Corner frames */}
      <div className={styles.frame}>
        <div className={`${styles.corner} ${styles.tl}`} />
        <div className={`${styles.corner} ${styles.tr}`} />
        <div className={`${styles.corner} ${styles.bl}`} />
        <div className={`${styles.corner} ${styles.br}`} />
      </div>

      {/* Reveal curtains */}
      <div className={styles.curtainLeft} />
      <div className={styles.curtainRight} />
    </div>
  );
}
