'use client';

import Link from 'next/link';
import { ParticleField, MagneticButton, ScrollProgress } from '@/components/effects';
import styles from '@/styles/PageLayout.module.css';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  number?: string;
  annotation?: string;
}

export default function PageLayout({ children, title, subtitle, number, annotation }: PageLayoutProps) {
  return (
    <div className={styles.container}>
      <ParticleField />
      <ScrollProgress />
      
      {/* Background orbs */}
      <div className={styles.orbContainer}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
      </div>

      <main className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <MagneticButton href="/" className={`${styles.backLink} animate-up delay-1`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 15L7 10L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back</span>
          </MagneticButton>
          
          <div className={`${styles.titleBlock} animate-up delay-2`}>
            {number && <span className={styles.pageNumber}>{number}</span>}
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {annotation && <span className={styles.headerAnnotation}>{annotation}</span>}
          </div>

          <div className={`${styles.headerLine} animate-scale delay-3`} />
        </header>

        {/* Content */}
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}
