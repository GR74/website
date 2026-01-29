'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import styles from '@/styles/TextScramble.module.css';

interface TextScrambleProps {
  children: string;
  className?: string;
  scrambleOnHover?: boolean;
  scrambleOnMount?: boolean;
}

const chars = '!<>-_\\/[]{}—=+*^?#________';

export default function TextScramble({ 
  children, 
  className = '',
  scrambleOnHover = true,
  scrambleOnMount = false
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(children);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef<number | null>(null);
  const originalText = children;

  const scramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);
    
    let iteration = 0;
    const totalIterations = originalText.length * 2;
    
    const animate = () => {
      setDisplayText(
        originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 2) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iteration += 1;

      if (iteration < totalIterations) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(originalText);
        setIsScrambling(false);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
  }, [originalText, isScrambling]);

  useEffect(() => {
    if (scrambleOnMount) {
      const timeout = setTimeout(scramble, 100);
      return () => clearTimeout(timeout);
    }
  }, [scrambleOnMount, scramble]);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (scrambleOnHover) {
      scramble();
    }
  };

  return (
    <span 
      className={`${styles.scramble} ${className} ${isScrambling ? styles.active : ''}`}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
}

