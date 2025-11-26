import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import userEvent from '@testing-library/user-event';
import { PasswordField } from '@app/components/PasswordField';
import type { UserCredentials } from '@app/types';

// Wrapper component to provide form context
const PasswordFieldWrapper = (
  props: Partial<React.ComponentProps<typeof PasswordField>>,
) => {
  const { register, formState } = useForm<UserCredentials>({
    defaultValues: { username: '', password: '' },
  });

  return (
    <PasswordField register={register} error={formState.errors.password} {...props} />
  );
};

describe('PasswordField - Negative Tests', () => {
  test('displays error message when error prop is provided', () => {
    const mockError = {
      message: 'Password is required',
      type: 'required',
    };

    const TestComponent = () => {
      const { register } = useForm<UserCredentials>();
      return <PasswordField register={register} error={mockError as any} />;
    };

    render(<TestComponent />);

    expect(screen.getByText('Password is required')).toBeInTheDocument();
    expect(screen.getByText('⚠')).toBeInTheDocument();
  });

  test('does not show error when error prop is undefined', () => {
    render(<PasswordFieldWrapper />);

    expect(screen.queryByText('⚠')).not.toBeInTheDocument();
  });

  test('handles empty string input', async () => {
    const user = userEvent.setup();

    const { container } = render(<PasswordFieldWrapper />);

    const input = container.querySelector('input[type="password"]') as HTMLInputElement;

    await user.clear(input);

    expect(input.value).toBe('');
  });

  test('handles very long password input', async () => {
    const user = userEvent.setup();

    render(<PasswordFieldWrapper />);

    const input = screen.getByLabelText(/password/i) as HTMLInputElement;
    const longPassword = 'a'.repeat(1000);

    await user.type(input, longPassword);

    expect(input.value).toBe(longPassword);
  });

  test('handles special characters in password', async () => {
    const user = userEvent.setup();

    render(<PasswordFieldWrapper />);

    const input = screen.getByLabelText(/password/i) as HTMLInputElement;
    const specialPassword = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    await user.type(input, specialPassword);

    expect(input.value).toBe(specialPassword);
  });

  test('does not throw when disabled and toggle button is clicked', async () => {
    const user = userEvent.setup();

    render(<PasswordFieldWrapper disabled={true} />);

    const toggleButton = screen.getByRole('button');

    await expect(user.click(toggleButton)).resolves.not.toThrow();
  });

  test('handles rapid toggle clicks', async () => {
    const user = userEvent.setup();

    render(<PasswordFieldWrapper />);

    const input = screen.getByLabelText(/password/i);
    const toggleButton = screen.getByRole('button');

    for (let i = 0; i < 10; i++) {
      await user.click(toggleButton);
    }

    expect(input).toHaveAttribute('type', 'password');
  });

  test('handles undefined className gracefully', () => {
    expect(() => render(<PasswordFieldWrapper className={undefined} />)).not.toThrow();
  });

  test('shows error styling when error exists', () => {
    const mockError = {
      message: 'Invalid password',
      type: 'pattern',
    };

    const TestComponent = () => {
      const { register } = useForm<UserCredentials>();
      return <PasswordField register={register} error={mockError as any} />;
    };

    const { container } = render(<TestComponent />);

    const input = container.querySelector('input');

    expect(input).toHaveClass('inputError');
  });

  test('does not crash with whitespace-only password', async () => {
    const user = userEvent.setup();

    render(<PasswordFieldWrapper />);

    const input = screen.getByLabelText(/password/i) as HTMLInputElement;

    await user.type(input, '        ');

    expect(input.value).toBe('        ');
  });

  test('does not crash with unicode characters', async () => {
    const user = userEvent.setup();

    render(<PasswordFieldWrapper />);

    const input = screen.getByLabelText(/password/i) as HTMLInputElement;

    await user.type(input, '🔒🗝️💻');

    expect(input.value).toBe('🔒🗝️💻');
  });

  test('handles null className', () => {
    expect(() => render(<PasswordFieldWrapper className={null as any} />)).not.toThrow();
  });
});
