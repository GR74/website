'use client';

import React from 'react';
import styles from '@/styles/ModuleLabel.module.css';

type LabelType = 'MODULE' | 'INTERFACE' | 'TRACE' | 'COMPONENT' | 'SYSTEM' | 'NODE';

interface ModuleLabelProps {
  type: LabelType;
  x: number;
  y: number;
}

export default function ModuleLabel({ type, x, y }: ModuleLabelProps) {
  return (
    <span 
      className={styles.label}
      style={{
        left: x,
        top: y,
      }}
    >
      {type}
    </span>
  );
}

