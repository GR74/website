'use client';

import { TiltCard } from '@/components/effects';
import styles from '@/styles/GlassCard.module.css';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  tilt?: boolean;
}

export default function GlassCard({ children, className = '', hover = true, glow = false, tilt = true }: GlassCardProps) {
  const content = (
    <div className={`${styles.card} ${hover ? styles.hoverable : ''} ${glow ? styles.glow : ''} ${className}`}>
      {glow && <div className={styles.glowEffect} />}
      <div className={styles.content}>{children}</div>
      <div className={styles.borderGlow} />
    </div>
  );

  if (tilt && hover) {
    return <TiltCard className={styles.tiltWrapper}>{content}</TiltCard>;
  }

  return content;
}
