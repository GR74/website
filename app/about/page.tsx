'use client';

import { PageLayout, GlassCard } from '@/components/base';
import { MagneticButton, TiltCard, HandwrittenNote } from '@/components/effects';
import styles from '@/styles/About.module.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    skills: ['Python', 'Java', 'SQL', 'JavaScript', 'MATLAB'],
    color: 'cyan',
  },
  {
    title: 'ML & AI',
    icon: '◈',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Computer Vision', 'Deep Learning'],
    color: 'purple',
  },
  {
    title: 'Biocomputing',
    icon: '◇',
    skills: ['Rosetta', 'GROMACS', 'Molecular Dynamics', 'Protein Modeling', 'HPC'],
    color: 'pink',
  },
  {
    title: 'Data & Tools',
    icon: '○',
    skills: ['Pandas', 'NumPy', 'React', 'ROS', 'Git'],
    color: 'cyan',
  },
];

const languages = [
  { name: 'English', level: 'Native' },
  { name: 'French', level: 'Conversational' },
  { name: 'Tamil', level: 'Native' },
];

export default function About() {
  return (
    <PageLayout 
      title="About"
      annotation="the person behind the system"
    >
      <div className={styles.content}>
        {/* Bio */}
        <GlassCard hover={false} tilt={false} className="animate-up delay-3">
          <div className={styles.bio}>
            <p className={styles.lead}>
              Computer Science and Engineering at Ohio State. 
              <span className={styles.highlight}> Minor in Biomedical Engineering.</span> MD/PhD track. AI specialization.
            </p>
            <p>
              Research spans computational protein engineering, multimodal clinical AI, and neural signal processing. 
              Currently at Kimmel Lab (protein immunoengineering) and collaborating with MIT LCP on cardiac representation learning.
            </p>
            <p>
              Building systems that operate at the intersection of biology and computation.
            </p>
          </div>
        </GlassCard>

        {/* Stats */}
        <div className={`${styles.stats} animate-up delay-4`}>
          <TiltCard>
            <div className={styles.statCard}>
              <span className={styles.statValue}>3.74</span>
              <span className={styles.statLabel}>GPA</span>
            </div>
          </TiltCard>
          <TiltCard>
            <div className={styles.statCard}>
              <span className={styles.statValue}>4</span>
              <span className={styles.statLabel}>Concurrent Main Projects</span>
            </div>
          </TiltCard>
          <TiltCard>
            <div className={styles.statCard}>
              <span className={styles.statValue}>2028</span>
              <span className={styles.statLabel}>Graduation</span>
            </div>
          </TiltCard>
        </div>

        {/* Skills Section */}
        <section className={`${styles.skillsSection} ${styles.skillsWithNote} animate-up delay-5`}>
          <HandwrittenNote
            text="tools change — systems persist"
            x="16px"
            y="14px"
            rotate={-3}
            delay={0.2}
          />
          <div className={styles.sectionLabel}>
            <div className={styles.labelLine} />
            <span>Technical Skills</span>
            <div className={styles.labelLine} />
          </div>

          <div className={styles.skillsGrid}>
            {skillCategories.map((category, i) => (
              <div key={category.title} className={`${styles.skillCategory} animate-up delay-${i + 5}`}>
                <div className={styles.skillHeader}>
                  <span className={`${styles.skillIcon} ${styles[category.color]}`}>{category.icon}</span>
                  <h3 className={styles.skillTitle}>{category.title}</h3>
                </div>
                <div className={styles.skillList}>
                  {category.skills.map((skill) => (
                    <span key={skill} className={styles.skillPill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section className={`${styles.languagesSection} animate-up delay-7`}>
          <div className={styles.sectionLabel}>
            <div className={styles.labelLine} />
            <span>Languages</span>
            <div className={styles.labelLine} />
          </div>

          <div className={styles.languagesGrid}>
            {languages.map((lang) => (
              <div key={lang.name} className={styles.languageItem}>
                <span className={styles.languageName}>{lang.name}</span>
                <span className={styles.languageLevel}>{lang.level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <GlassCard glow hover={false} tilt={false} className="animate-up delay-8">
          <div className={styles.contact}>
            <div className={styles.contactHeader}>
              <h3 className={styles.contactTitle}>Get in touch</h3>
              <span className={styles.contactAnnotation}>let's connect →</span>
            </div>
            <p className={styles.contactDesc}>
              Open to research collaborations and interesting technical problems.
            </p>
            <div className={styles.contactLinks}>
              <MagneticButton href="mailto:gowrish.rajagopal@gmail.com" className={styles.contactLink}>
                <span className={styles.contactIcon}>✉</span>
                <span>gowrish.rajagopal@gmail.com</span>
              </MagneticButton>
              <MagneticButton href="https://linkedin.com/in/gowrishrajagopal" className={styles.contactLink}>
                <span className={styles.contactIcon}>in</span>
                <span>linkedin.com/in/gowrishrajagopal</span>
              </MagneticButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </PageLayout>
  );
}
