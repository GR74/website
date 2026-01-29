'use client';

import styles from '@/styles/AnnotationLayer.module.css';

interface AnnotationLayerProps {
  children: React.ReactNode;
}

export default function AnnotationLayer({ children }: AnnotationLayerProps) {
  return (
    <div className={styles.layer}>
      {children}
    </div>
  );
}

