import React from 'react';
import * as styles from './SubmitButton.module.css';
import { SubmitButtonProps } from './SubmitButtonProps';

/**
 * SubmitButton component for forms with loading state
 *
 * @param {SubmitButtonProps} props - Component props
 * @returns {JSX.Element} The rendered submit button
 */
export const SubmitButton: React.FC<SubmitButtonProps> = ({
  isLoading = false,
  isSubmitting = false,
  disabled = false,
  label = 'Submit',
  loadingLabel = 'Submitting...',
  className = '',
  theme = '',
}) => {
  const isDisabled = disabled || isLoading || isSubmitting;
  const buttonClasses = [styles.submitButton, className, theme].filter(Boolean).join(' ');

  return (
    <button type="submit" className={buttonClasses} disabled={isDisabled}>
      {isLoading || isSubmitting ? (
        <>
          <span className={styles.spinner} />
          <span>{loadingLabel}</span>
        </>
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};

SubmitButton.displayName = 'SubmitButton';
