import React from 'react';
import styles from '@/styles/SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  label?: string;
}

export default function SectionHeader({ title, label }: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.line} />
    </header>
  );
}

