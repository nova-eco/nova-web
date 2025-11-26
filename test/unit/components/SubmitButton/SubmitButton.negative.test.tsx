import { render, screen } from '@testing-library/react';
import { SubmitButton } from '@app/components/SubmitButton/SubmitButton';

describe('SubmitButton - Negative Tests', () => {
  test('is disabled when isLoading is true', () => {
    render(<SubmitButton isLoading={true} />);

    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button).toBeDisabled();
  });

  test('is disabled when isSubmitting is true', () => {
    render(<SubmitButton isSubmitting={true} />);

    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button).toBeDisabled();
  });

  test('is disabled when disabled prop is true', () => {
    render(<SubmitButton disabled={true} />);

    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button).toBeDisabled();
  });

  test('is disabled when isLoading and disabled are both true', () => {
    render(<SubmitButton isLoading={true} disabled={true} />);

    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button).toBeDisabled();
  });

  test('is disabled when all disabled flags are true', () => {
    render(<SubmitButton isLoading={true} isSubmitting={true} disabled={true} />);

    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button).toBeDisabled();
  });

  test('does not show regular label when loading', () => {
    render(<SubmitButton label="Sign In" isLoading={true} loadingLabel="Loading..." />);

    expect(screen.queryByText('Sign In')).not.toBeInTheDocument();
  });

  test('does not show regular label when submitting', () => {
    render(
      <SubmitButton label="Sign In" isSubmitting={true} loadingLabel="Submitting..." />,
    );

    expect(screen.queryByText('Sign In')).not.toBeInTheDocument();
  });

  test('handles undefined className gracefully', () => {
    expect(() => render(<SubmitButton className={undefined} />)).not.toThrow();
  });

  test('handles null className gracefully', () => {
    expect(() => render(<SubmitButton className={null as any} />)).not.toThrow();
  });

  test('handles empty string label', () => {
    render(<SubmitButton label="" />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('');
  });

  test('handles empty string loadingLabel', () => {
    render(<SubmitButton isLoading={true} loadingLabel="" />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('handles very long label', () => {
    const longLabel = 'A'.repeat(1000);

    render(<SubmitButton label={longLabel} />);

    expect(screen.getByText(longLabel)).toBeInTheDocument();
  });

  test('handles special characters in label', () => {
    const specialLabel = '<>&"\'!@#$%^';

    render(<SubmitButton label={specialLabel} />);

    expect(screen.getByText(specialLabel)).toBeInTheDocument();
  });

  test('does not crash with undefined label', () => {
    expect(() => render(<SubmitButton label={undefined} />)).not.toThrow();
  });

  test('does not crash with null label', () => {
    expect(() => render(<SubmitButton label={null as any} />)).not.toThrow();
  });

  test('does not crash with invalid isLoading type', () => {
    expect(() => render(<SubmitButton isLoading={'true' as any} />)).not.toThrow();
  });

  test('maintains disabled state through prop changes', () => {
    const { rerender } = render(<SubmitButton isLoading={true} />);

    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button).toBeDisabled();

    rerender(<SubmitButton isSubmitting={true} />);
    expect(button).toBeDisabled();
  });

  test('handles theme prop gracefully', () => {
    expect(() => render(<SubmitButton theme={'light' as any} />)).not.toThrow();
  });
});
