import { render, screen } from '@testing-library/react';
import { SubmitButton } from '@app/components/SubmitButton/SubmitButton';

describe('SubmitButton - Positive Tests', () => {
  test('renders a button with type="submit"', () => {
    render(<SubmitButton />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('displays default label "Submit"', () => {
    render(<SubmitButton />);

    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  test('displays custom label', () => {
    render(<SubmitButton label="Sign In" />);

    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  test('displays loading label when isLoading is true', () => {
    render(<SubmitButton isLoading={true} loadingLabel="Loading..." />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays loading label when isSubmitting is true', () => {
    render(<SubmitButton isSubmitting={true} loadingLabel="Submitting..." />);

    expect(screen.getByText('Submitting...')).toBeInTheDocument();
  });

  test('displays default loading label when not provided', () => {
    render(<SubmitButton isLoading={true} />);

    expect(screen.getByText('Submitting...')).toBeInTheDocument();
  });

  test('shows spinner when isLoading is true', () => {
    const { container } = render(<SubmitButton isLoading={true} />);

    const spinner = container.querySelector('.spinner');
    expect(spinner).toBeInTheDocument();
  });

  test('shows spinner when isSubmitting is true', () => {
    const { container } = render(<SubmitButton isSubmitting={true} />);

    const spinner = container.querySelector('.spinner');
    expect(spinner).toBeInTheDocument();
  });

  test('does not show spinner when not loading or submitting', () => {
    const { container } = render(<SubmitButton isLoading={false} isSubmitting={false} />);

    const spinner = container.querySelector('.spinner');
    expect(spinner).not.toBeInTheDocument();
  });

  test('applies custom className', () => {
    const { container } = render(<SubmitButton className="custom-submit" />);

    const button = container.querySelector('button');
    expect(button).toHaveClass('custom-submit');
  });

  test('is enabled by default', () => {
    render(<SubmitButton />);

    const button = screen.getByRole('button') as HTMLButtonElement;
    expect(button).toBeEnabled();
  });

  test('has submitButton class', () => {
    const { container } = render(<SubmitButton />);

    const button = container.querySelector('button');
    expect(button).toHaveClass('submitButton');
  });
});
