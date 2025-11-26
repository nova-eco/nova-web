import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardButton from '@app/components/CardButton';

describe('CardButton - Positive Tests', () => {
  test('renders with label text', () => {
    render(<CardButton label="Click Me" onClick={() => {}} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  test('calls onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<CardButton label="Click Me" onClick={handleClick} />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies theme class when theme is provided', () => {
    render(<CardButton label="Themed Button" onClick={() => {}} theme="light" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('CardButton');
    expect(button).toHaveClass('primary');
  });

  test('renders without theme class when theme is undefined', () => {
    render(<CardButton label="Default Button" onClick={() => {}} />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('CardButton');
  });

  test('handles multiple clicks', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<CardButton label="Multi Click" onClick={handleClick} />);

    const button = screen.getByRole('button');
    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  test('renders with empty string label', () => {
    render(<CardButton label="" onClick={() => {}} />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('');
  });

  test('maintains correct button type', () => {
    render(<CardButton label="Button" onClick={() => {}} />);

    const button = screen.getByRole('button');
    expect(button.tagName).toBe('BUTTON');
  });

  test('handles keyboard interactions', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(<CardButton label="Keyboard Test" onClick={handleClick} />);

    const button = screen.getByRole('button');
    await user.tab();

    expect(button).toHaveFocus();
  });
});
