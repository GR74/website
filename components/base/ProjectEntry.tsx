import React from 'react';
import styles from '@/styles/ProjectEntry.module.css';

interface ProjectEntryProps {
  title: string;
  description: string;
  role?: string;
  constraints?: string;
  status?: 'active' | 'coming-soon' | 'archived';
}

export default function ProjectEntry({ 
  title, 
  description, 
  role,
  constraints,
  status
}: ProjectEntryProps) {
  return (
    <article className={styles.entry}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {status === 'coming-soon' && (
          <span className={styles.status}>coming soon</span>
        )}
      </div>
      <p className={styles.description}>{description}</p>
      {(role || constraints) && (
        <div className={styles.meta}>
          {role && <span className={styles.tag}>{role}</span>}
          {constraints && <span className={styles.constraint}>{constraints}</span>}
        </div>
      )}
    </article>
  );
}

