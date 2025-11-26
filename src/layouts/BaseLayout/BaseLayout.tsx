import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@app/components/Sidebar';
import * as styles from './baseLayout.module.css';
import { BaseLayoutProps } from './BaseLayoutProps';

export const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  const { className = 'BaseLayout', headerHeightPx = 100, overlay } = props;

  const containerClasses = `${styles.layoutContainer} ${className}`.trim();

  return (
    <div
      className={containerClasses}
      style={{ '--header-height': `${headerHeightPx}px` } as React.CSSProperties}
    >
      <header className={styles.topNavigation} data-layout-header>
        Header
      </header>

      <div className={styles.contentGrid}>
        <aside className={styles.sideNavigation} aria-label="Secondary navigation">
          <Sidebar />
        </aside>

        <main className={styles.mainContent} role="main">
          <Outlet />
        </main>
      </div>

      <footer className={styles.footer}>Footer</footer>

      {overlay && <div className={styles.overlayContainer}>{overlay}</div>}
    </div>
  );
};

BaseLayout.displayName = 'BaseLayout';
