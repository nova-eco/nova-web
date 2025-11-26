import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { PasswordField } from '@app/components/PasswordField';
import { SubmitButton } from '@app/components/SubmitButton';
import { UsernameField } from '@app/components/UsernameField';
import { UserCredentials } from '@app/types';
import * as styles from './loginForm.module.css';
import { LoginFormProps } from './LoginFormProps';

export const LoginForm: React.FC<LoginFormProps> = ({
  theme,
  userLogin,
  isLoading = false,
  error = null,
  isAuthenticated = false,
  className = '',
  onSuccess,
  onError,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UserCredentials>({
    mode: 'onBlur',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      reset();
      if (onSuccess) {
        onSuccess();
      }
    }
  }, [isAuthenticated, reset, onSuccess]);

  useEffect(() => {
    if (error && onError) {
      onError(error);
    }
  }, [error, onError]);

  const onSubmit = async (data: UserCredentials) => {
    if (userLogin) {
      userLogin(data);
    }
  };

  const containerClasses = [styles.formContainer, className].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      <h2 className={styles.formTitle}>Sign In</h2>

      {isAuthenticated && (
        <div className={styles.successMessage}>
          <span>✓</span>
          <span>Login successful!</span>
        </div>
      )}

      {error && !isAuthenticated && (
        <div className={styles.formError}>
          <span>⚠</span>
          <span>{error}</span>
        </div>
      )}

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <UsernameField
          register={register}
          error={errors.username}
          disabled={isLoading || isSubmitting}
          theme={theme}
        />
        <PasswordField
          register={register}
          error={errors.password}
          disabled={isLoading || isSubmitting}
          theme={theme}
        />

        <a href="#" className={styles.forgotPassword}>
          Forgot password?
        </a>

        <SubmitButton
          isLoading={isLoading}
          isSubmitting={isSubmitting}
          label="Sign In"
          loadingLabel="Signing in..."
          theme={theme}
        />
      </form>

      <div className={styles.additionalOptions}>
        <span>Don't have an account? </span>
        <a href="#" className={styles.signupLink}>
          Sign up
        </a>
      </div>
    </div>
  );
};
