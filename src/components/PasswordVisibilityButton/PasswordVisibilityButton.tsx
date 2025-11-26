import React from 'react';
import EyeIcon from '@app/components/EyeIcon';
import EyeSlashIcon from '@app/components/EyeSlashIcon';
import * as styles from './PasswordVisibilityButton.module.css';
import type { PasswordVisibilityButtonProps } from './PasswordVisibilityButtonProps';

export const PasswordVisibilityButton: React.FC<PasswordVisibilityButtonProps> = (
  props,
) => {
  const { isLoading, isSubmitting, onClick, showPassword } = props;

  return (
    <button
      type="button"
      className={styles.toggleButton}
      onClick={onClick}
      disabled={isLoading || isSubmitting}
      aria-label={showPassword ? 'Hide password' : 'Show password'}
      tabIndex={-1}
    >
      showPassword ? <EyeSlashIcon /> : <EyeIcon />
    </button>
  );
};
