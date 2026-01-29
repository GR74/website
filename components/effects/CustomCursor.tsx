'use client';

import { useEffect, useRef, useCallback } from 'react';
import styles from '@/styles/CustomCursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const isPointer = useRef(false);
  const rafId = useRef<number>();

  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  const animate = useCallback(() => {
    // Smooth interpolation for dot (faster)
    cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.35);
    cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.35);
    
    // Smooth interpolation for ring (slower, creates trailing effect)
    ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.15);
    ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.15);

    if (cursorDotRef.current) {
      cursorDotRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) translate(-50%, -50%)`;
    }
    
    if (cursorRingRef.current) {
      cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${isPointer.current ? 1.5 : 1})`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Check for touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isPointer.current = !!target.closest('a, button, [role="button"], input, textarea, select');
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.background = isPointer.current ? 'var(--accent-cyan)' : 'white';
        cursorDotRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) translate(-50%, -50%) scale(${isPointer.current ? 1.5 : 1})`;
      }
      
      if (cursorRingRef.current) {
        cursorRingRef.current.style.borderColor = isPointer.current ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.5)';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
      }
    };

    // Start animation loop
    rafId.current = requestAnimationFrame(animate);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [animate]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <div ref={cursorRef} className={styles.cursor}>
      <div ref={cursorDotRef} className={styles.cursorDot} />
      <div ref={cursorRingRef} className={styles.cursorRing} />
    </div>
  );
}
