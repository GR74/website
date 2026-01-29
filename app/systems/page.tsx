'use client';

import { PageLayout, GlassCard } from '@/components/base';
import styles from '@/styles/Systems.module.css';

export default function Systems() {
  return (
    <PageLayout 
      title="Systems & Startups" 
      subtitle="Applied research and infrastructure" 
      number="03"
      annotation="systems as organisms"
    >
      {/* Exo - Featured */}
      <div className={`${styles.featured} animate-up delay-4`}>
        <GlassCard hover={false}>
          <div className={styles.exoCard}>
            <div className={styles.exoOrb} />
            <div className={styles.exoContent}>
              <div className={styles.exoBadge}>
                <span className={styles.exoDot} />
                <span>Coming Soon</span>
              </div>
              <h2 className={styles.exoTitle}>Exo</h2>
              <p className={styles.exoDesc}>A new kind of cognitive interface.</p>
              <span className={styles.exoAnnotation}>→ something new</span>
              <div className={styles.exoPattern}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={styles.exoLine} style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* FinTech Section */}
      <section className={`${styles.section} animate-up delay-5`}>
        <div className={styles.sectionLabel}>
          <div className={styles.labelLine} />
          <span>FinTech Systems</span>
          <div className={styles.labelLine} />
        </div>
        
        <GlassCard glow>
          <div className={styles.orgHeader}>
            <div>
              <h3 className={styles.orgName}>Buckeye Fintech</h3>
              <p className={styles.orgMeta}>Co-Founder & Co-President · Feb 2025 – Present</p>
            </div>
            <span className={styles.orgAnnotation}>student finance →</span>
          </div>
          
          <div className={styles.projectGrid}>
            <div className={styles.projectItem}>
              <span className={styles.projectIcon}>◈</span>
              <div>
                <strong>Finspire</strong>
                <span>Telehealth + decentralized donations</span>
              </div>
            </div>
            <div className={styles.projectItem}>
              <span className={styles.projectIcon}>◇</span>
              <div>
                <strong>BuckeyeCoin</strong>
                <span>Campus digital currency</span>
              </div>
            </div>
            <div className={styles.projectItem}>
              <span className={styles.projectIcon}>○</span>
              <div>
                <strong>University Funding</strong>
                <span>Student finance modernization</span>
              </div>
            </div>
            <div className={styles.projectItem}>
              <span className={styles.projectIcon}>□</span>
              <div>
                <strong>Corporate Pipeline</strong>
                <span>Fortune 500 hackathons & events</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Public Infrastructure Section */}
      <section className={`${styles.section} animate-up delay-6`}>
        <div className={styles.sectionLabel}>
          <div className={styles.labelLine} />
          <span>Public Infrastructure</span>
          <div className={styles.labelLine} />
        </div>
        
        <GlassCard glow>
          <div className={styles.orgHeader}>
            <div>
              <h3 className={styles.orgName}>Clearskies AQ</h3>
              <p className={styles.orgMeta}>Lead Systems Architect · Oct 2024 – July 2025</p>
            </div>
            <span className={styles.orgAnnotation}>infrastructure matters</span>
          </div>
          
          <p className={styles.orgDesc}>
            Real-time air quality monitoring for Licking County, Ohio (~180,000 population). 
            Open-source SimpleAQ sensors tracking PM2.5, PM10, CO₂, VOCs, temperature, humidity.
          </p>
          
          <div className={styles.techStack}>
            <span className={styles.techItem}>React</span>
            <span className={styles.techItem}>Backend Server</span>
            <span className={styles.techItem}>Live Maps</span>
            <span className={styles.techItem}>Policy Impact</span>
          </div>
        </GlassCard>
      </section>

      {/* Award */}
      <section className={`${styles.section} animate-up delay-7`}>
        <div className={styles.sectionLabel}>
          <div className={styles.labelLine} />
          <span>Recognition</span>
          <div className={styles.labelLine} />
        </div>
        
        <GlassCard>
          <div className={styles.awardCard}>
            <div className={styles.awardLeft}>
              <div className={styles.awardBadge}>
                <span className={styles.awardRank}>3rd</span>
                <span className={styles.awardPlace}>Place</span>
              </div>
            </div>
            <div className={styles.awardContent}>
              <span className={styles.awardEvent}>HACK OHI/O 2024</span>
              <h3 className={styles.awardTitle}>Bridge</h3>
              <p className={styles.awardDesc}>
                Resource distribution optimization during natural disasters. 
                Out of 1,200 participants and 200 teams.
              </p>
            </div>
          </div>
        </GlassCard>
      </section>
    </PageLayout>
  );
}
