import React from 'react';
import styles from '@/styles/NoteEntry.module.css';

interface NoteEntryProps {
  title: string;
  excerpt: string;
  date: string;
  slug?: string;
}

export default function NoteEntry({ 
  title, 
  excerpt, 
  date,
  slug 
}: NoteEntryProps) {
  const content = (
    <article className={styles.entry}>
      <div className={styles.dateLine}>
        <span className={styles.date}>{date}</span>
        <span className={styles.line} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
    </article>
  );

  if (slug) {
    return (
      <a href={`/notes/${slug}`} className={styles.link}>
        {content}
      </a>
    );
  }

  return content;
}

