import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardButton from '@app/components/CardButton';

describe('CardButton - Negative Tests', () => {
  test('handles undefined onClick gracefully', async () => {
    const user = userEvent.setup();

    render(<CardButton label="No Handler" onClick={undefined as any} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    await expect(user.click(button)).resolves.not.toThrow();
  });

  test('does not throw when label contains special characters', () => {
    render(<CardButton label="<>&quot;'!@#$%^" onClick={() => {}} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('<>"\'!@#$%^');
  });

  test('does not throw with very long label', () => {
    const longLabel = 'A'.repeat(1000);

    render(<CardButton label={longLabel} onClick={() => {}} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(longLabel);
  });

  test('handles null theme gracefully', () => {
    render(<CardButton label="Null Theme" onClick={() => {}} theme={null as any} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('does not execute onClick when button is disabled via DOM manipulation', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    const { container } = render(<CardButton label="Button" onClick={handleClick} />);

    const button = container.querySelector('button')!;
    button.disabled = true;

    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  test('handles rapid successive clicks', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<CardButton label="Rapid Click" onClick={handleClick} />);

    const button = screen.getByRole('button');
    for (let i = 0; i < 100; i++) {
      await user.click(button);
    }

    expect(handleClick).toHaveBeenCalledTimes(100);
  });

  test('does not crash with undefined label', () => {
    expect(() =>
      render(<CardButton label={undefined as any} onClick={() => {}} />),
    ).not.toThrow();
  });

  test('does not crash with null label', () => {
    expect(() =>
      render(<CardButton label={null as any} onClick={() => {}} />),
    ).not.toThrow();
  });

  test('handles invalid theme types', () => {
    expect(() =>
      render(<CardButton label="Test" onClick={() => {}} theme={123 as any} />),
    ).not.toThrow();
  });
});
