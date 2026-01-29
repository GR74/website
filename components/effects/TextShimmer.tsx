'use client';

import styles from '@/styles/TextShimmer.module.css';

interface TextShimmerProps {
  children: string;
  className?: string;
}

export default function TextShimmer({ children, className = '' }: TextShimmerProps) {
  return (
    <span className={`${styles.shimmer} ${className}`}>
      {children}
    </span>
  );
}

