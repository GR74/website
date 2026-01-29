'use client';

import { useEffect, useState, useLayoutEffect } from 'react';
import styles from '@/styles/LoadingScreen.module.css';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);

  // Use layoutEffect to check session storage before paint
  useLayoutEffect(() => {
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    if (hasSeenLoader) {
      setShouldShow(false);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!shouldShow) return;

    // First visit - show loading screen
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
  }, [shouldShow]);

  if (!isLoading) return null;

  return (
    <div className={`${styles.loader} ${isExiting ? styles.exit : ''}`}>
      {/* Animated background */}
      <div className={styles.bgGradient} />
      
      {/* Floating particles - fixed positions to avoid hydration mismatch */}
      <div className={styles.particles}>
        {[
          { left: 5, top: 10 }, { left: 15, top: 80 }, { left: 25, top: 30 },
          { left: 35, top: 60 }, { left: 45, top: 15 }, { left: 55, top: 85 },
          { left: 65, top: 40 }, { left: 75, top: 70 }, { left: 85, top: 20 },
          { left: 95, top: 50 }, { left: 10, top: 45 }, { left: 20, top: 75 },
          { left: 30, top: 5 }, { left: 40, top: 90 }, { left: 50, top: 35 },
          { left: 60, top: 65 }, { left: 70, top: 25 }, { left: 80, top: 55 },
          { left: 90, top: 95 }, { left: 8, top: 68 },
        ].map((pos, i) => (
          <div 
            key={i} 
            className={styles.particle}
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              animationDelay: `${(i % 5) * 0.4}s`,
              animationDuration: `${3 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className={styles.content}>
        {/* Orbiting rings behind logo */}
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

        {/* Monogram only */}
        <div className={styles.logo}>
          <span className={styles.logoG}>G</span>
          <span className={styles.logoR}>R</span>
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
