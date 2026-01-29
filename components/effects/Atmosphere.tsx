'use client';

import { useEffect, useRef } from 'react';
import styles from '@/styles/Atmosphere.module.css';

export default function Atmosphere() {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!lightRef.current) return;
      const { clientX, clientY } = e;
      
      // Update global CSS variables for localized lighting on cards
      document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
      
      lightRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.atmosphere}>
      <div className={styles.grain} />
      <div ref={lightRef} className={styles.ambientLight} />
      <div className={styles.vignette} />
      
      {/* Light leaks */}
      <div className={styles.lightLeak1} />
      <div className={styles.lightLeak2} />
    </div>
  );
}

