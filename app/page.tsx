'use client';

import Link from 'next/link';
import styles from '@/styles/Landing.module.css';
import { ParticleField, MagneticButton, TiltCard, GlitchText, TextReveal } from '@/components/effects';

export default function Landing() {
  return (
    <div className={styles.container}>
      <ParticleField />
      
      {/* Gradient orbs */}
      <div className={styles.orbContainer}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      <main className={styles.main}>
        {/* Hero */}
        <div className={styles.hero}>
          <span className={`${styles.heroAnnotation} animate-up delay-3`}>start here</span>
          
          <h1 className={`${styles.name} animate-up delay-2`}>
            <span className={styles.firstName}>Gowrish</span>
            <GlitchText className={styles.lastName}>Rajagopal</GlitchText>
          </h1>
          
          <div className={`${styles.roleContainer} animate-up delay-3`}>
            <div className={styles.roleLine} />
            <span className={styles.role}>Researcher & Systems Builder</span>
            <div className={styles.roleLine} />
          </div>

          {/* Focus Areas */}
          <div className={`${styles.focusAreas} animate-up delay-4`}>
            <div className={styles.focusItem}>
              <span className={styles.focusIcon}>◇</span>
              <span className={styles.focusText}>Computational Biology</span>
            </div>
            <span className={styles.focusDivider} />
            <div className={styles.focusItem}>
              <span className={styles.focusIcon}>◈</span>
              <span className={styles.focusText}>Clinical AI</span>
            </div>
            <span className={styles.focusDivider} />
            <div className={styles.focusItem}>
              <span className={styles.focusIcon}>○</span>
              <span className={styles.focusText}>Infrastructure</span>
            </div>
          </div>

          {/* About Button */}
          <Link href="/about" className={`${styles.aboutLink} animate-up delay-5`}>
            <span>About me</span>
            <span className={styles.aboutArrow}>→</span>
          </Link>
        </div>

        {/* Navigation Grid */}
        <nav className={styles.nav}>
          <span className={`${styles.navAnnotation} animate-up delay-5`}>explore sections</span>
          
          <Link href="/research" className="animate-up delay-5">
            <TiltCard className={styles.navItem}>
              <div className={styles.navGlow} />
              <span className={styles.navNumber}>01</span>
              <div className={styles.navContent}>
                <h2 className={styles.navTitle}>Research</h2>
                <p className={styles.navDesc}>Themes & intellectual threads</p>
              </div>
              <span className={styles.navArrow}>→</span>
            </TiltCard>
          </Link>

          <Link href="/neuro-ai" className="animate-up delay-6">
            <TiltCard className={styles.navItem}>
              <div className={styles.navGlow} />
              <span className={styles.navNumber}>02</span>
              <div className={styles.navContent}>
                <h2 className={styles.navTitle}>Neuro + AI</h2>
                <p className={styles.navDesc}>Labs & projects</p>
              </div>
              <span className={styles.navArrow}>→</span>
            </TiltCard>
          </Link>

          <Link href="/systems" className="animate-up delay-7">
            <TiltCard className={styles.navItem}>
              <div className={styles.navGlow} />
              <span className={styles.navNumber}>03</span>
              <div className={styles.navContent}>
                <h2 className={styles.navTitle}>Systems</h2>
                <p className={styles.navDesc}>Startups & infrastructure</p>
              </div>
              <span className={styles.navArrow}>→</span>
            </TiltCard>
          </Link>

          <Link href="/notes" className="animate-up delay-8">
            <TiltCard className={styles.navItem}>
              <div className={styles.navGlow} />
              <span className={styles.navNumber}>04</span>
              <div className={styles.navContent}>
                <h2 className={styles.navTitle}>Notes</h2>
                <p className={styles.navDesc}>Working thoughts</p>
              </div>
              <span className={styles.navArrow}>→</span>
            </TiltCard>
          </Link>
        </nav>

        {/* Footer */}
        <footer className={`${styles.footer} animate-up delay-10`}>
          <div className={styles.footerLinks}>
            <MagneticButton href="mailto:gowrish.rajagopal@gmail.com" className={styles.footerLink}>
              Email
            </MagneticButton>
            <span className={styles.footerDivider}>/</span>
            <MagneticButton href="https://linkedin.com/in/gowrishrajagopal" className={styles.footerLink}>
              LinkedIn
            </MagneticButton>
          </div>
          
          <span className={styles.footerAnnotation}>~ work in progress ~</span>
        </footer>
      </main>

      {/* Corner decoration */}
      <div className={`${styles.cornerDecor} animate-up delay-10`}>
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(50,212,222,0.2)" strokeWidth="0.5" strokeDasharray="4 4" className={styles.rotatingCircle} />
          <circle cx="60" cy="60" r="38" fill="none" stroke="rgba(168,85,247,0.2)" strokeWidth="0.5" className={styles.rotatingCircle2} />
          <circle cx="60" cy="60" r="26" fill="none" stroke="rgba(236,72,153,0.15)" strokeWidth="0.5" strokeDasharray="2 2" className={styles.rotatingCircle} />
        </svg>
      </div>
    </div>
  );
}
