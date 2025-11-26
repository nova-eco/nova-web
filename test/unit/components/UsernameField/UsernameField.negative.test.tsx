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

describe('UsernameField - Negative Tests', () => {
  test('displays error message when error prop is provided', () => {
    const mockError = {
      message: 'Username is required',
      type: 'required',
    };

    const TestComponent = () => {
      const { register } = useForm<UserCredentials>();
      return <UsernameField register={register} error={mockError as any} />;
    };

    render(<TestComponent />);

    expect(screen.getByText('Username is required')).toBeInTheDocument();
    expect(screen.getByText('⚠')).toBeInTheDocument();
  });

  test('does not show error when error prop is undefined', () => {
    render(<UsernameFieldWrapper />);

    expect(screen.queryByText('⚠')).not.toBeInTheDocument();
  });

  test('handles empty string input', async () => {
    const user = userEvent.setup();

    render(<UsernameFieldWrapper />);

    const input = screen.getByLabelText(/username/i) as HTMLInputElement;

    await user.clear(input);

    expect(input.value).toBe('');
  });

  test('handles very long username input', async () => {
    const user = userEvent.setup();

    render(<UsernameFieldWrapper />);

    const input = screen.getByLabelText(/username/i) as HTMLInputElement;
    const longUsername = 'a'.repeat(1000);

    await user.type(input, longUsername);

    expect(input.value).toBe(longUsername);
  });

  test('allows special characters (validation happens on submit)', async () => {
    const user = userEvent.setup();

    render(<UsernameFieldWrapper />);

    const input = screen.getByLabelText(/username/i) as HTMLInputElement;

    await user.type(input, 'user@#$%');

    expect(input.value).toBe('user@#$%');
  });

  test('handles undefined className gracefully', () => {
    expect(() => render(<UsernameFieldWrapper className={undefined} />)).not.toThrow();
  });

  test('shows error styling when error exists', () => {
    const mockError = {
      message: 'Invalid username',
      type: 'pattern',
    };

    const TestComponent = () => {
      const { register, formState } = useForm<UserCredentials>({
        defaultValues: { username: '', password: '' },
        mode: 'onChange',
      });
      return <UsernameField register={register} error={mockError as any} />;
    };

    const { container } = render(<TestComponent />);

    const input = container.querySelector('input');

    expect(input).toHaveClass('inputError');
  });

  test('does not crash with whitespace-only username', async () => {
    const user = userEvent.setup();

    render(<UsernameFieldWrapper />);

    const input = screen.getByLabelText(/username/i) as HTMLInputElement;

    await user.type(input, '    ');

    expect(input.value).toBe('    ');
  });

  test('handles spaces in username', async () => {
    const user = userEvent.setup();

    render(<UsernameFieldWrapper />);

    const input = screen.getByLabelText(/username/i) as HTMLInputElement;

    await user.type(input, 'user name');

    expect(input.value).toBe('user name');
  });

  test('handles username with only numbers', async () => {
    const user = userEvent.setup();

    render(<UsernameFieldWrapper />);

    const input = screen.getByLabelText(/username/i) as HTMLInputElement;

    await user.type(input, '12345');

    expect(input.value).toBe('12345');
  });

  test('handles null className', () => {
    expect(() => render(<UsernameFieldWrapper className={null as any} />)).not.toThrow();
  });

  test('displays minLength error message', () => {
    const mockError = {
      message: 'Username must be at least 3 characters',
      type: 'minLength',
    };

    const TestComponent = () => {
      const { register } = useForm<UserCredentials>();
      return <UsernameField register={register} error={mockError as any} />;
    };

    render(<TestComponent />);

    expect(
      screen.getByText('Username must be at least 3 characters'),
    ).toBeInTheDocument();
  });

  test('displays pattern error message', () => {
    const mockError = {
      message: 'Username can only contain letters, numbers, underscores, and hyphens',
      type: 'pattern',
    };

    const TestComponent = () => {
      const { register } = useForm<UserCredentials>();
      return <UsernameField register={register} error={mockError as any} />;
    };

    render(<TestComponent />);

    expect(
      screen.getByText(
        'Username can only contain letters, numbers, underscores, and hyphens',
      ),
    ).toBeInTheDocument();
  });

  test('handles rapid input changes', async () => {
    const user = userEvent.setup();

    render(<UsernameFieldWrapper />);

    const input = screen.getByLabelText(/username/i) as HTMLInputElement;

    for (let i = 0; i < 10; i++) {
      await user.clear(input);
      await user.type(input, `user${i}`);
    }

    expect(input.value).toBe('user9');
  });
});
