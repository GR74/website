'use client';

import React from 'react';
import styles from '@/styles/AnchorDot.module.css';

interface AnchorDotProps {
  x: number;
  y: number;
  size?: 'small' | 'medium';
  pulse?: boolean;
}

export default function AnchorDot({ 
  x, 
  y, 
  size = 'small',
  pulse = false 
}: AnchorDotProps) {
  return (
    <div 
      className={`${styles.dot} ${styles[size]} ${pulse ? styles.pulse : ''}`}
      style={{
        left: x,
        top: y,
      }}
    />
  );
}

