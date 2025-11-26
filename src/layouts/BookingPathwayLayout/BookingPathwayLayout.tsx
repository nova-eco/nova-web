import React from 'react';
import { Outlet } from 'react-router-dom';
import * as styles from './BookingPathwayLayout.module.css';
import { BookingPathwayLayoutProps } from './BookingPathwayLayoutProps';

/**
 * BookingPathwayLayout provides a centered layout for the booking flow without a sidebar.
 *
 * This layout is optimized for step-by-step booking processes, providing a focused
 * experience with a header, main content area, and optional footer. Unlike BaseLayout,
 * this layout does not include a sidebar navigation.
 *
 * @param   {BookingPathwayLayoutProps} props                - The component props
 * @param   {string}                    [props.className]    - OPTIONAL: Additional CSS class names
 * @param   {number}                    [props.headerHeightPx=100] - OPTIONAL: Header height in pixels
 * @param   {ReactNode}                 [props.overlay]      - OPTIONAL: Overlay content (e.g., modals)
 * @param   {UserInterfaceTheme}        [props.theme]        - OPTIONAL: Theme (light/dark) for styling
 * @returns {JSX.Element}                                    The rendered layout component
 */
export const BookingPathwayLayout: React.FC<BookingPathwayLayoutProps> = (props) => {
  const {
    className = 'BookingPathwayLayout',
    headerHeightPx = 100,
    overlay,
    theme,
  } = props;

  const containerClasses = `${styles.layoutContainer} ${className}`.trim();

  return (
    <div
      className={containerClasses}
      style={{ '--header-height': `${headerHeightPx}px` } as React.CSSProperties}
      data-theme={theme}
    >
      <header className={styles.topNavigation} data-layout-header>
        Header
      </header>

      <div className={styles.contentContainer}>
        <main className={styles.mainContent} role="main">
          <Outlet />
        </main>
      </div>

      <footer className={styles.footer}>Footer</footer>

      {overlay && <div className={styles.overlayContainer}>{overlay}</div>}
    </div>
  );
};

BookingPathwayLayout.displayName = 'BookingPathwayLayout';
