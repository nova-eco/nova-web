import React, { useState } from 'react';
import PasswordVisibilityButton from '@app/components/PasswordVisibilityButton';
import * as styles from './PasswordField.module.css';
import { PasswordFieldProps } from './PasswordFieldProps';

/**
 * PasswordField component for login forms with visibility toggle
 *
 * @param {PasswordFieldProps} props - Component props
 * @returns {JSX.Element} The rendered password field
 */
export const PasswordField: React.FC<PasswordFieldProps> = ({
  register,
  error,
  disabled = false,
  className = '',
  theme = '',
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const containerClasses = [styles.inputGroup, className, theme]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      <label htmlFor="password" className={`${styles.label} ${styles.labelRequired}`}>
        Password
      </label>
      <div className={styles.inputContainer}>
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          className={`${styles.input} ${styles.inputWithToggle} ${error ? styles.inputError : ''}`}
          placeholder="Enter your password"
          disabled={disabled}
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Password must be at least 5 characters',
            },
          })}
        />
        <PasswordVisibilityButton
          isLoading={disabled}
          isSubmitting={disabled}
          onClick={togglePasswordVisibility}
          showPassword={showPassword}
        />
      </div>
      {error && (
        <div className={styles.errorMessage}>
          <span>⚠</span>
          <span>{error.message}</span>
        </div>
      )}
      <div className={styles.helperText}>Must be at least 8 characters</div>
    </div>
  );
};

PasswordField.displayName = 'PasswordField';
