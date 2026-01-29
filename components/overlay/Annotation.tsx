'use client';

import React from 'react';
import styles from '@/styles/Annotation.module.css';

interface AnnotationProps {
  text: string;
  x: number;
  y: number;
  rotate?: number;
}

export default function Annotation({ 
  text, 
  x, 
  y, 
  rotate = 0 
}: AnnotationProps) {
  return (
    <span 
      className={styles.annotation}
      style={{
        left: x,
        top: y,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {text}
    </span>
  );
}

