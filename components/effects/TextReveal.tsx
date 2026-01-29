'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/TextReveal.module.css';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const words = children.split(' ');

  return (
    <span ref={ref} className={`${styles.container} ${className}`}>
      {words.map((word, i) => (
        <span key={i} className={styles.wordWrapper}>
          <span
            className={`${styles.word} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: `${i * 0.05}s` }}
          >
            {word}
          </span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  );
}

