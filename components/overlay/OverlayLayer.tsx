'use client';

import React from 'react';
import styles from '@/styles/OverlayLayer.module.css';

interface OverlayLayerProps {
  children: React.ReactNode;
}

export default function OverlayLayer({ children }: OverlayLayerProps) {
  return (
    <div className={styles.overlay}>
      {children}
    </div>
  );
}

