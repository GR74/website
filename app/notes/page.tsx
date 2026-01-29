'use client';

import { PageLayout, GlassCard } from '@/components/base';
import styles from '@/styles/Notes.module.css';

const notes = [
  {
    date: '2026.01.20',
    title: 'On modality-invariant geometry',
    content: 'When ECG and echo embeddings share geometric structure, the model learns something closer to cardiac state than either modality alone. The missing modality problem becomes a projection problem.',
    tag: 'representation learning',
  },
  {
    date: '2026.01.12',
    title: 'Noncanonical amino acids as design space',
    content: 'Standard amino acids are just the beginning. ncAAs expand the chemical vocabulary available for protein engineering. Logic gates become possible at the molecular level.',
    tag: 'protein design',
  },
  {
    date: '2025.12.18',
    title: 'Clinical data is never clean',
    content: '35,000 scans became 1,000 usable cases. The curation process is the research. Understanding why data fails alignment reveals more about the clinical workflow than the data itself.',
    tag: 'data curation',
  },
  {
    date: '2025.11.28',
    title: 'MRI-negative epilepsy',
    content: "When imaging shows nothing, other signals must speak. EEG features, metabolic proxies, clinical semiology—triangulating the epileptogenic zone from its functional shadows.",
    tag: 'neural engineering',
  },
  {
    date: '2025.11.15',
    title: 'Infrastructure as constraint',
    content: 'HPC pipelines force you to think in terms of batches, queues, and resource allocation. The computational substrate shapes what questions you can afford to ask.',
    tag: 'systems',
  },
];

export default function Notes() {
  return (
    <PageLayout 
      title="Notes" 
      subtitle="Working thoughts and partial conclusions" 
      number="04"
      annotation="incomplete by design"
    >
      <div className={styles.notesList}>
        {notes.map((note, i) => (
          <div key={note.date} className={`animate-up delay-${Math.min(i + 4, 9)}`}>
            <GlassCard glow>
              <article className={styles.note}>
                <div className={styles.noteMeta}>
                  <time className={styles.noteDate}>{note.date}</time>
                  <span className={styles.noteTag}>{note.tag}</span>
                </div>
                <h3 className={styles.noteTitle}>{note.title}</h3>
                <p className={styles.noteContent}>{note.content}</p>
                <div className={styles.noteFooter}>
                  <div className={styles.noteLine} />
                </div>
              </article>
            </GlassCard>
          </div>
        ))}
      </div>

      <div className={`${styles.disclaimer} animate-up delay-9`}>
        <span className={styles.disclaimerAnnotation}>→ working thoughts</span>
        <p>These are working thoughts—incomplete by design.</p>
      </div>
    </PageLayout>
  );
}
