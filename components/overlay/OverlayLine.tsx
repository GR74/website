'use client';

import React from 'react';
import styles from '@/styles/OverlayLine.module.css';

interface Point {
  x: number;
  y: number;
}

interface OverlayLineProps {
  start: Point;
  end: Point;
  dotted?: boolean;
  glowing?: boolean;
}

export default function OverlayLine({ 
  start, 
  end, 
  dotted = false,
  glowing = false 
}: OverlayLineProps) {
  const strokeDasharray = dotted ? '4 4' : 'none';
  
  return (
    <svg 
      className={`${styles.line} ${glowing ? styles.glowing : ''}`}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'visible',
      }}
    >
      <line
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke="var(--system-cyan)"
        strokeWidth="1"
        strokeDasharray={strokeDasharray}
        opacity="0.4"
      />
    </svg>
  );
}

