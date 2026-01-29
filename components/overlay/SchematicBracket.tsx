'use client';

import React from 'react';
import styles from '@/styles/SchematicBracket.module.css';

interface SchematicBracketProps {
  x: number;
  y: number;
  height: number;
  side?: 'left' | 'right';
  label?: string;
}

export default function SchematicBracket({ 
  x, 
  y, 
  height,
  side = 'left',
  label 
}: SchematicBracketProps) {
  const bracketWidth = 8;
  
  return (
    <div 
      className={`${styles.bracket} ${styles[side]}`}
      style={{
        left: x,
        top: y,
        height: height,
      }}
    >
      <svg 
        width={bracketWidth} 
        height={height}
        className={styles.svg}
      >
        {side === 'left' ? (
          <path
            d={`M${bracketWidth} 0 L0 0 L0 ${height} L${bracketWidth} ${height}`}
            fill="none"
            stroke="var(--system-cyan)"
            strokeWidth="1"
            opacity="0.4"
          />
        ) : (
          <path
            d={`M0 0 L${bracketWidth} 0 L${bracketWidth} ${height} L0 ${height}`}
            fill="none"
            stroke="var(--system-cyan)"
            strokeWidth="1"
            opacity="0.4"
          />
        )}
      </svg>
      {label && (
        <span className={`${styles.label} ${styles[`label${side.charAt(0).toUpperCase() + side.slice(1)}`]}`}>
          {label}
        </span>
      )}
    </div>
  );
}

