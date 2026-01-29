import React from 'react';
import styles from '@/styles/ContentBlock.module.css';

interface ContentBlockProps {
  children: React.ReactNode;
  id?: string;
  hasAnchor?: boolean;
  className?: string;
}

export default function ContentBlock({ 
  children, 
  id,
  hasAnchor = false,
  className = ''
}: ContentBlockProps) {
  return (
    <section 
      id={id}
      className={`${styles.block} ${hasAnchor ? styles.withAnchor : ''} ${className}`}
    >
      {hasAnchor && <span className={styles.anchorPoint} />}
      {children}
    </section>
  );
}

