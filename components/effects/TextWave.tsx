'use client';

import { useRef, useEffect } from 'react';
import styles from '@/styles/TextWave.module.css';

interface TextWaveProps {
  children: string;
  className?: string;
}

export default function TextWave({ children, className = '' }: TextWaveProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const letters = container.querySelectorAll('span');

    const handleMouseMove = (e: MouseEvent) => {
      letters.forEach((letter) => {
        const rect = letter.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2;
        const letterCenterY = rect.top + rect.height / 2;
        
        const distX = e.clientX - letterCenterX;
        const distY = e.clientY - letterCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        const maxDistance = 80;
        
        if (distance < maxDistance) {
          const intensity = 1 - (distance / maxDistance);
          const moveX = (distX / distance) * intensity * -8;
          const moveY = (distY / distance) * intensity * -12;
          
          letter.style.transform = `translate(${moveX}px, ${moveY}px)`;
          letter.style.color = `rgba(50, 212, 222, ${0.7 + intensity * 0.3})`;
          letter.style.textShadow = `0 0 ${intensity * 20}px rgba(50, 212, 222, ${intensity * 0.5})`;
        } else {
          letter.style.transform = 'translate(0, 0)';
          letter.style.color = '';
          letter.style.textShadow = '';
        }
      });
    };

    const handleMouseLeave = () => {
      letters.forEach((letter) => {
        letter.style.transform = 'translate(0, 0)';
        letter.style.color = '';
        letter.style.textShadow = '';
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <span ref={containerRef} className={`${styles.container} ${className}`}>
      {children.split('').map((char, i) => (
        <span key={i} className={styles.letter}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

