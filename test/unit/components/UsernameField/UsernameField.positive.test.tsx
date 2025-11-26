import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import userEvent from '@testing-library/user-event';
import { UsernameField } from '@app/components/UsernameField/UsernameField';
import type { UserCredentials } from '@app/types';

// Wrapper component to provide form context
const UsernameFieldWrapper = (
  props: Partial<React.ComponentProps<typeof UsernameField>>,
) => {
  const { register, formState } = useForm<UserCredentials>({
    defaultValues: { username: '', password: '' },
  });

  return (
    <UsernameField register={register} error={formState.errors.username} {...props} />
  );
};

describe('UsernameField - Positive Tests', () => {
  test('renders username input field', () => {
    render(<UsernameFieldWrapper />);

    const input = screen.getByLabelText(/username/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  test('renders with label "Username"', () => {
    render(<UsernameFieldWrapper />);

    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  test('renders helper text', () => {
    render(<UsernameFieldWrapper />);

    expect(screen.getByText(/must be at least 3 characters/i)).toBeInTheDocument();
  });

  test('allows text input', async () => {
    const user = userEvent.setup();

    render(<UsernameFieldWrapper />);

    const input = screen.getByLabelText(/username/i) as HTMLInputElement;

    await user.type(input, 'testuser');

    expect(input.value).toBe('testuser');
  });

  test('shows placeholder text', () => {
    render(<UsernameFieldWrapper />);

    const input = screen.getByPlaceholderText(/enter your username/i);
    expect(input).toBeInTheDocument();
  });

  test('applies custom className when provided', () => {
    const { container } = render(<UsernameFieldWrapper className="custom-class" />);

    const inputGroup = container.firstChild as HTMLElement;
    expect(inputGroup).toHaveClass('custom-class');
  });

  test('disables input when disabled prop is true', () => {
    render(<UsernameFieldWrapper disabled={true} />);

    const input = screen.getByLabelText(/username/i) as HTMLInputElement;
    expect(input).toBeDisabled();
  });

  test('has id attribute for accessibility', () => {
    render(<UsernameFieldWrapper />);

    const input = screen.getByLabelText(/username/i);
    expect(input).toHaveAttribute('id', 'username');
  });

  test('accepts alphanumeric characters', async () => {
    const user = userEvent.setup();

    render(<UsernameFieldWrapper />);

    const input = screen.getByLabelText(/username/i) as HTMLInputElement;

    await user.type(input, 'user123');

    expect(input.value).toBe('user123');
  });

  test('accepts underscores and hyphens', async () => {
    const user = userEvent.setup();

    render(<UsernameFieldWrapper />);

    const input = screen.getByLabelText(/username/i) as HTMLInputElement;

    await user.type(input, 'user_name-test');

    expect(input.value).toBe('user_name-test');
  });

  test('allows minimum valid length username', async () => {
    const user = userEvent.setup();

    render(<UsernameFieldWrapper />);

    const input = screen.getByLabelText(/username/i) as HTMLInputElement;

    await user.type(input, 'abc');

    expect(input.value).toBe('abc');
  });
});
