'use client';

import { PageLayout, GlassCard } from '@/components/base';
import styles from '@/styles/NeuroAI.module.css';

const sections = [
  {
    title: 'Computational Biology',
    institution: 'Kimmel Laboratory for Protein Immunoengineering',
    location: 'Ohio State',
    period: 'Apr 2025 – Present',
    annotation: 'proteins fold into function',
    projects: [
      {
        name: 'Protein Immunoengineering Pipeline',
        desc: 'Computational protein models with noncanonical amino acids for artificial T cells and logic-gated drug delivery.',
        role: 'Undergraduate Researcher',
      },
      {
        name: 'HPC Docking Automation',
        desc: 'Modular pipeline with VM UI automating protein-protein docking, scoring, and visualization.',
        role: 'Pipeline Architect',
      },
    ],
  },
  {
    title: 'Clinical AI',
    institution: 'MIT Laboratory for Computational Physiology',
    location: 'MIT',
    period: 'July 2025 – Present',
    annotation: 'signals from the body',
    projects: [
      {
        name: 'Multimodal Cardiac Representation Learning',
        desc: 'ECG-echocardiogram fusion with modality-invariant geometry. Contrastive alignment under structured missingness on MIMIC-IV.',
        role: 'Research Collaborator',
      },
    ],
  },
  {
    title: 'Neural Engineering',
    institution: 'Ohio State NeuroTech Club',
    location: '',
    period: 'Aug 2024 – Present',
    annotation: 'brain as system',
    projects: [
      {
        name: 'ClearMind Neuro-Visualization',
        desc: 'Brain metabolism mapping tools in collaboration with Dr. Douglas Rothman, Yale. First author on manuscript.',
        role: 'Chief Scientific Officer',
      },
      {
        name: 'Seizure Genesis Signature Framework',
        desc: 'KillChain framework for localizing epileptogenic zones in MRI-negative FCD epilepsy using EEG and metabolic proxies.',
        role: 'Framework Architect',
      },
    ],
  },
  {
    title: 'Oncology Research',
    institution: 'MD Anderson Cancer Center',
    location: 'Dept. of Radiation Oncology',
    period: 'June 2025 – Aug 2025',
    projects: [
      {
        name: 'Lymphedema Prediction Pipeline',
        desc: 'Multimodal preprocessing for CT, radiotherapy, surgical timelines. Curated 35,000+ scans to ~1,000 aligned cases. 40+ hours clinical exposure.',
        role: 'Research Intern',
      },
    ],
  },
  {
    title: 'Movement Analysis',
    institution: 'U: The Mind Company',
    location: '',
    period: 'Oct 2024 – May 2025',
    projects: [
      {
        name: "Parkinson's Gait Analysis",
        desc: "Pose estimation using MMPose for clinical gait pattern analysis in Parkinson's patients.",
        role: 'Computer Vision Analyst',
      },
    ],
  },
];

export default function NeuroAI() {
  return (
    <PageLayout 
      title="Neuro + AI" 
      subtitle="Research projects across labs and institutions" 
      number="02"
      annotation="labs & collaborations"
    >
      <div className={styles.timeline}>
        {sections.map((section, i) => (
          <div key={section.title} className={`${styles.timelineItem} animate-up delay-${Math.min(i + 4, 9)}`}>
            <div className={styles.timelineLine}>
              <div className={styles.timelineDot} />
              {i < sections.length - 1 && <div className={styles.timelineConnector} />}
            </div>
            
            <GlassCard glow hover={false} className={styles.card}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionLeft}>
                  <span className={styles.sectionType}>{section.title}</span>
                  <h3 className={styles.institution}>{section.institution}</h3>
                  {section.location && <span className={styles.location}>{section.location}</span>}
                </div>
                <div className={styles.sectionRight}>
                  <span className={styles.period}>{section.period}</span>
                  {section.annotation && (
                    <span className={styles.sectionAnnotation}>{section.annotation}</span>
                  )}
                </div>
              </div>
              
              <div className={styles.projects}>
                {section.projects.map((project) => (
                  <div key={project.name} className={styles.project}>
                    <div className={styles.projectHeader}>
                      <h4 className={styles.projectName}>{project.name}</h4>
                      <span className={styles.role}>{project.role}</span>
                    </div>
                    <p className={styles.projectDesc}>{project.desc}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
