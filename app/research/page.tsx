'use client';

import { PageLayout, GlassCard } from '@/components/base';
import styles from '@/styles/Research.module.css';

const themes = [
  {
    id: 1,
    title: 'Computational Protein Engineering',
    description: 'Designing protein models with noncanonical amino acids for artificial T cells and logic-gated drug delivery. Building HPC-native pipelines for automated docking workflows.',
    tags: ['Rosetta', 'GROMACS', 'HPC'],
    color: 'cyan',
  },
  {
    id: 2,
    title: 'Multimodal Clinical AI',
    description: 'Representation learning for ECG-echocardiogram fusion. Contrastive alignment and adversarial invariance under structured missingness. Deployment-realistic constraints.',
    tags: ['Deep Learning', 'MIMIC-IV', 'Clinical'],
    color: 'purple',
  },
  {
    id: 3,
    title: 'Computational Oncology',
    description: 'Multimodal preprocessing pipelines for lymphedema prediction. CT imaging, radiotherapy records, surgical timelines. Clinical data curation at scale.',
    tags: ['Medical Imaging', 'Oncology', 'Data'],
    color: 'pink',
  },
  {
    id: 4,
    title: 'Neural Engineering',
    description: 'Neuro-visualization tools mapping brain metabolism and activity. EEG feature extraction for seizure localization in MRI-negative epilepsy cases.',
    tags: ['EEG', 'Neuroscience', 'Visualization'],
    color: 'cyan',
  },
];

export default function Research() {
  return (
    <PageLayout 
      title="Research" 
      subtitle="Organized by intellectual thread, not chronology" 
      number="01"
      annotation="themes, not timeline"
    >
      <div className={styles.grid}>
        {themes.map((theme, i) => (
          <GlassCard key={theme.id} glow className={`animate-up delay-${i + 4}`}>
            <div className={styles.themeCard}>
              <div className={styles.themeHeader}>
                <span className={`${styles.themeNumber} ${styles[theme.color]}`}>0{theme.id}</span>
                <div className={`${styles.themeDot} ${styles[theme.color]}`} />
              </div>
              <h3 className={styles.themeTitle}>{theme.title}</h3>
              <p className={styles.themeDesc}>{theme.description}</p>
              <div className={styles.tags}>
                {theme.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className={`${styles.footnoteContainer} animate-up delay-8`}>
        <span className={styles.footnoteAnnotation}>each connects to the others →</span>
        <p className={styles.footnote}>
          Each theme represents an ongoing line of inquiry.
        </p>
      </div>
    </PageLayout>
  );
}
