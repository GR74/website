import React from 'react';
import styles from '@/styles/MarginNotes.module.css';

interface MarginNote {
  id: string;
  text: string;
  top?: string;
  handwritten?: boolean;
}

interface MarginNotesProps {
  notes: MarginNote[];
}

export default function MarginNotes({ notes }: MarginNotesProps) {
  return (
    <div className={styles.container}>
      {notes.map((note) => (
        <div 
          key={note.id}
          className={`${styles.note} ${note.handwritten ? styles.handwritten : ''}`}
          style={{ top: note.top || 'auto' }}
        >
          {note.text}
        </div>
      ))}
    </div>
  );
}

