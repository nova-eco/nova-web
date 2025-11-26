import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';
import * as styles from './ContinueButton.module.css';
import { ContinueButtonProps } from './ContinueButtonProps';

/**
 * ContinueButton component displays navigation buttons and selection summary.
 *
 * Shows a summary of the selected date and time when both are chosen,
 * along with Back and Continue buttons. The Continue button is disabled
 * until both date and time are selected.
 *
 * @param   {ContinueButtonProps}   props              - The component props
 * @param   {string}                props.selectedDate - The selected date in ISO format
 * @param   {string}                props.selectedTime - The selected time
 * @param   {function}              props.onContinue   - Callback function when Continue is clicked
 * @param   {function}              props.onBack       - Callback function when Back is clicked
 * @param   {UserInterfaceTheme}    [props.theme]      - OPTIONAL: Theme (light/dark) for styling
 * @returns {JSX.Element}                              The rendered continue button component
 */
export const ContinueButton: React.FC<ContinueButtonProps> = ({
  selectedDate,
  selectedTime,
  onContinue,
  onBack,
  theme,
}) => {
  const canContinue = selectedDate && selectedTime;

  return (
    <>
      {canContinue && (
        <div className={styles.summary} data-theme={theme}>
          <p className={styles.summaryTitle}>Your Selection:</p>
          <p className={styles.summaryText}>
            {new Date(selectedDate).toLocaleDateString('en-GB', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            at {selectedTime}
          </p>
        </div>
      )}

      <div className={styles.buttonGroup} data-theme={theme}>
        <button className={`${styles.button} ${styles.buttonSecondary}`} onClick={onBack}>
          <ArrowLeft size={20} />
          Back
        </button>
        <button
          className={`${styles.button} ${styles.buttonPrimary}`}
          onClick={onContinue}
          disabled={!canContinue}
        >
          Continue
          <ArrowRight size={20} />
        </button>
      </div>
    </>
  );
};
