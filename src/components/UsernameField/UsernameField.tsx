import React from 'react';
import * as styles from './UsernameField.module.css';
import { UsernameFieldProps } from './UsernameFieldProps';

/**
 * UsernameField component for login forms
 *
 * @param {UsernameFieldProps} props - Component props
 * @returns {JSX.Element} The rendered username field
 */
export const UsernameField: React.FC<UsernameFieldProps> = ({
  register,
  error,
  disabled = false,
  className = '',
  theme,
}) => {
  const containerClasses = [styles.inputGroup, className].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <label htmlFor="username" className={`${styles.label} ${styles.labelRequired}`}>
        Username
      </label>
      <input
        id="username"
        type="text"
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        placeholder="Enter your username"
        disabled={disabled}
        {...register('username', {
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username must be at least 3 characters',
          },
          pattern: {
            value: /^[a-zA-Z0-9_-]+$/,
            message:
              'Username can only contain letters, numbers, underscores, and hyphens',
          },
        })}
      />
      {error && (
        <div className={styles.errorMessage}>
          <span>⚠</span>
          <span>{error.message}</span>
        </div>
      )}
      <div className={styles.helperText}>Must be at least 3 characters</div>
    </div>
  );
};

UsernameField.displayName = 'UsernameField';
