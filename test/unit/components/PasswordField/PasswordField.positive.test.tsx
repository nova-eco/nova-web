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

describe('PasswordField - Positive Tests', () => {
  test('renders password input field', () => {
    render(<PasswordFieldWrapper />);

    const input = screen.getByLabelText(/password/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');
  });

  test('renders with label "Password"', () => {
    render(<PasswordFieldWrapper />);

    expect(screen.getByText('Password')).toBeInTheDocument();
  });

  test('renders helper text', () => {
    render(<PasswordFieldWrapper />);

    expect(screen.getByText(/must be at least 8 characters/i)).toBeInTheDocument();
  });

  test('toggles password visibility when button is clicked', async () => {
    const user = userEvent.setup();

    render(<PasswordFieldWrapper />);

    const input = screen.getByLabelText(/password/i);
    const toggleButton = screen.getByRole('button', { name: /show password/i });

    expect(input).toHaveAttribute('type', 'password');

    await user.click(toggleButton);

    expect(input).toHaveAttribute('type', 'text');
  });

  test('toggles back to password type on second click', async () => {
    const user = userEvent.setup();

    render(<PasswordFieldWrapper />);

    const input = screen.getByLabelText(/password/i);
    const toggleButton = screen.getByRole('button', { name: /show password/i });

    await user.click(toggleButton);
    await user.click(toggleButton);

    expect(input).toHaveAttribute('type', 'password');
  });

  test('allows text input', async () => {
    const user = userEvent.setup();

    render(<PasswordFieldWrapper />);

    const input = screen.getByLabelText(/password/i) as HTMLInputElement;

    await user.type(input, 'mySecurePassword123');

    expect(input.value).toBe('mySecurePassword123');
  });

  test('shows placeholder text', () => {
    render(<PasswordFieldWrapper />);

    const input = screen.getByPlaceholderText(/enter your password/i);
    expect(input).toBeInTheDocument();
  });

  test('applies custom className when provided', () => {
    const { container } = render(<PasswordFieldWrapper className="custom-class" />);

    const inputGroup = container.firstChild;
    expect(inputGroup).toHaveClass('custom-class');
  });

  test('disables input when disabled prop is true', () => {
    render(<PasswordFieldWrapper disabled={true} />);

    const input = screen.getByLabelText(/password/i);
    expect(input).toBeDisabled();
  });

  test('has id attribute for accessibility', () => {
    render(<PasswordFieldWrapper />);

    const input = screen.getByLabelText(/password/i);
    expect(input).toHaveAttribute('id', 'password');
  });

  test('renders password visibility button', () => {
    render(<PasswordFieldWrapper />);

    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
  });

  test('has required indicator on label', () => {
    const { container } = render(<PasswordFieldWrapper />);

    const label = container.querySelector('label');
    expect(label).toHaveClass('labelRequired');
  });
});
