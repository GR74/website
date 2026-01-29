'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/HUDOverlay.module.css';

export default function HUDOverlay() {
  const [time, setTime] = useState('');
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // User-local time (respects locale + timezone)
      setTime(
        new Intl.DateTimeFormat(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now)
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleMouse = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.hud} ${isScrolled ? styles.hidden : ''}`}>
      {/* Grid overlay */}
      <div className={styles.grid}>
        {[...Array(12)].map((_, i) => (
          <div key={`v${i}`} className={styles.gridLineV} style={{ left: `${(i + 1) * 8.33}%` }} />
        ))}
        {[...Array(8)].map((_, i) => (
          <div key={`h${i}`} className={styles.gridLineH} style={{ top: `${(i + 1) * 12.5}%` }} />
        ))}
      </div>

      {/* Corner brackets */}
      <div className={`${styles.bracket} ${styles.tl}`}>
        <svg viewBox="0 0 60 60">
          <path d="M0 20 L0 0 L20 0" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="0" cy="0" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className={`${styles.bracket} ${styles.tr}`}>
        <svg viewBox="0 0 60 60">
          <path d="M40 0 L60 0 L60 20" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="60" cy="0" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className={`${styles.bracket} ${styles.bl}`}>
        <svg viewBox="0 0 60 60">
          <path d="M0 40 L0 60 L20 60" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="0" cy="60" r="3" fill="currentColor" />
        </svg>
      </div>
      <div className={`${styles.bracket} ${styles.br}`}>
        <svg viewBox="0 0 60 60">
          <path d="M40 60 L60 60 L60 40" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="60" cy="60" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Data readouts - Top Left */}
      <div className={styles.readoutTL}>
        <div className={styles.readoutLine}>
          <span className={styles.label}>SYS</span>
          <span className={styles.value}>ONLINE</span>
          <span className={styles.statusDot} />
        </div>
        <div className={styles.readoutLine}>
          <span className={styles.label}>TIME</span>
          <span className={styles.value}>{time}</span>
        </div>
      </div>

      {/* Data readouts - Top Right */}
      <div className={styles.readoutTR}>
        <div className={styles.readoutLine}>
          <span className={styles.label}>CURSOR</span>
          <span className={styles.value}>{coords.x.toString().padStart(4, '0')},{coords.y.toString().padStart(4, '0')}</span>
        </div>
      </div>

      {/* Data readouts - Bottom Left */}
      <div className={styles.readoutBL}>
        <div className={styles.readoutLine}>
          <span className={styles.label}>NODE</span>
          <span className={styles.value}>GR-74</span>
        </div>
      </div>


      {/* Circular target */}
      <div className={styles.target}>
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className={styles.targetRing1} />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" className={styles.targetRing2} />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className={styles.targetRing3} />
          <line x1="50" y1="20" x2="50" y2="35" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="65" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="50" x2="35" y2="50" stroke="currentColor" strokeWidth="0.5" />
          <line x1="65" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Hexagon pattern */}
      <div className={styles.hexPattern}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={styles.hex} style={{ animationDelay: `${i * 0.2}s` }}>
            <svg viewBox="0 0 100 100">
              <polygon 
                points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Arc decorations */}
      <div className={styles.arcLeft}>
        <svg viewBox="0 0 100 200">
          <path d="M100 0 Q0 100 100 200" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        </svg>
      </div>
      <div className={styles.arcRight}>
        <svg viewBox="0 0 100 200">
          <path d="M0 0 Q100 100 0 200" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Connection nodes */}
      <div className={styles.nodes}>
        <div className={styles.node} style={{ top: '20%', left: '15%' }} />
        <div className={styles.node} style={{ top: '70%', left: '10%' }} />
        <div className={styles.node} style={{ top: '30%', right: '12%' }} />
        <div className={styles.node} style={{ top: '80%', right: '18%' }} />
        <div className={styles.node} style={{ top: '50%', left: '5%' }} />
      </div>
    </div>
  );
}

