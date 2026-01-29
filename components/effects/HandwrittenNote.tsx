'use client';

import styles from '@/styles/HandwrittenNote.module.css';

interface HandwrittenNoteProps {
  text: string;
  x: number | string;
  y: number | string;
  rotate?: number;
  delay?: number;
}

export default function HandwrittenNote({ text, x, y, rotate = 0, delay = 0 }: HandwrittenNoteProps) {
  return (
    <span 
      className={styles.note}
      style={{
        left: x,
        top: y,
        transform: `rotate(${rotate}deg)`,
        animationDelay: `${delay}s`,
      }}
    >
      {text}
    </span>
  );
}

