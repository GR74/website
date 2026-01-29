'use client';

import React from 'react';
import styles from '@/styles/BaseLayout.module.css';

interface BaseLayoutProps {
  children: React.ReactNode;
  showMargin?: boolean;
  marginContent?: React.ReactNode;
}

export default function BaseLayout({ 
  children, 
  showMargin = true,
  marginContent 
}: BaseLayoutProps) {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <div className={styles.content}>
          {children}
        </div>
        {showMargin && (
          <aside className={styles.margin}>
            {marginContent}
          </aside>
        )}
      </main>
    </div>
  );
}

