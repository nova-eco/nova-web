import React from 'react';
import * as styles from './BookingPathwayProgressBar.module.css';
import { BookingPathwayProgressBarProps } from './BookingPathwayProgressBarProps';

/**
 * BookingPathwayProgressBar component displays booking progress with desktop and mobile views.
 *
 * Shows a numbered step indicator with connecting lines on desktop, and a simplified
 * progress bar with step counter on mobile devices.
 *
 * @param   {BookingPathwayProgressBarProps} props              - The component props
 * @param   {number}                         props.currentStep  - The current step number
 * @param   {ProgressStep[]}                 props.progressSteps - Array of progress steps with numbers and labels
 * @param   {number}                         props.totalSteps   - Total number of steps in the booking process
 * @param   {UserInterfaceTheme}             [props.theme]      - OPTIONAL: Theme (light/dark) for styling
 * @returns {JSX.Element}                                       The rendered progress bar component
 */
export const BookingPathwayProgressBar: React.FC<BookingPathwayProgressBarProps> = ({
  currentStep,
  progressSteps,
  totalSteps,
  theme,
}) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <>
      {/* Desktop progress bar */}
      <div className={styles.desktopContainer} data-theme={theme}>
        {progressSteps.map((s, idx) => (
          <React.Fragment key={s.num}>
            <div
              className={`${styles.stepCircle} ${currentStep >= s.num ? styles.active : ''}`}
            >
              {s.num}
            </div>
            {idx < progressSteps.length - 1 && (
              <div
                className={`${styles.connector} ${currentStep > s.num ? styles.active : ''}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Desktop progress labels */}
      <div className={styles.desktopLabels} data-theme={theme}>
        {progressSteps.map((s) => (
          <span key={s.num} className={styles.label}>
            {s.label}
          </span>
        ))}
      </div>

      {/* Mobile progress indicator */}
      <div className={styles.mobileContainer} data-theme={theme}>
        <div className={styles.mobileHeader}>
          <span className={styles.stepText}>
            Step {currentStep} of {totalSteps}
          </span>
          <span className={styles.currentLabel}>
            {progressSteps.find((s) => s.num === currentStep)?.label}
          </span>
        </div>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressBar}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </>
  );
};
