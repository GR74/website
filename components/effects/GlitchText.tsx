'use client';

import styles from '@/styles/GlitchText.module.css';

interface GlitchTextProps {
  children: string;
  className?: string;
}

export default function GlitchText({ children, className = '' }: GlitchTextProps) {
  return (
    <span className={`${styles.glitch} ${className}`} data-text={children}>
      {children}
    </span>
  );
}

