'use client';

import { useEffect, useRef, useState } from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}

export default function FloatingElement({ children, intensity = 1, className = '' }: FloatingElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset({
        x: Math.sin(scrollY * 0.01) * 5 * intensity,
        y: Math.cos(scrollY * 0.01) * 5 * intensity,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [intensity]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      {children}
    </div>
  );
}

