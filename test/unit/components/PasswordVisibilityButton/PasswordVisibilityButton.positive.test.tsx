import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PasswordVisibilityButton from '@app/components/PasswordVisibilityButton';

describe('PasswordVisibilityButton - Positive Tests', () => {
  test('renders a button element', () => {
    render(
      <PasswordVisibilityButton
        isLoading={false}
        isSubmitting={false}
        onClick={() => {}}
        showPassword={false}
      />,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('has type="button" attribute', () => {
    render(
      <PasswordVisibilityButton
        isLoading={false}
        isSubmitting={false}
        onClick={() => {}}
        showPassword={false}
      />,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  test('calls onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(
      <PasswordVisibilityButton
        isLoading={false}
        isSubmitting={false}
        onClick={handleClick}
        showPassword={false}
      />,
    );

    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('has "Show password" aria-label when showPassword is false', () => {
    render(
      <PasswordVisibilityButton
        isLoading={false}
        isSubmitting={false}
        onClick={() => {}}
        showPassword={false}
      />,
    );

    const button = screen.getByRole('button', { name: /show password/i });
    expect(button).toBeInTheDocument();
  });

  test('has "Hide password" aria-label when showPassword is true', () => {
    render(
      <PasswordVisibilityButton
        isLoading={false}
        isSubmitting={false}
        onClick={() => {}}
        showPassword={true}
      />,
    );

    const button = screen.getByRole('button', { name: /hide password/i });
    expect(button).toBeInTheDocument();
  });

  test('has tabIndex of -1', () => {
    render(
      <PasswordVisibilityButton
        isLoading={false}
        isSubmitting={false}
        onClick={() => {}}
        showPassword={false}
      />,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('tabIndex', '-1');
  });

  test('is enabled when not loading or submitting', () => {
    render(
      <PasswordVisibilityButton
        isLoading={false}
        isSubmitting={false}
        onClick={() => {}}
        showPassword={false}
      />,
    );

    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button).toBeEnabled();
  });

  test('renders SVG when showPassword is false', () => {
    const { container } = render(
      <PasswordVisibilityButton
        isLoading={false}
        isSubmitting={false}
        onClick={() => {}}
        showPassword={false}
      />,
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  test('renders SVG when showPassword is true', () => {
    const { container } = render(
      <PasswordVisibilityButton
        isLoading={false}
        isSubmitting={false}
        onClick={() => {}}
        showPassword={true}
      />,
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  test('handles multiple clicks', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(
      <PasswordVisibilityButton
        isLoading={false}
        isSubmitting={false}
        onClick={handleClick}
        showPassword={false}
      />,
    );

    const button = screen.getByRole('button');
    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});
