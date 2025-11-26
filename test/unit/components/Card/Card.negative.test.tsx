import { render, screen } from '@testing-library/react';
import Card from '@app/components/Card';

describe('Card - Negative Tests', () => {
  const testCases = [
    {
      name: 'does not render non-existent content',
      children: 'Actual content',
      unexpectedText: 'Non-existent content',
    },
    {
      name: 'does not render content from different component',
      children: <span>Card content</span>,
      unexpectedText: 'Other component text',
    },
  ];

  test.each(testCases)('$name', ({ children, unexpectedText }) => {
    render(<Card>{children}</Card>);

    expect(screen.queryByText(unexpectedText)).toBeNull();
  });

  test('does not render card label as heading', () => {
    render(<Card>Test content</Card>);

    expect(screen.queryByRole('heading', { name: 'Card' })).toBeNull();
  });

  test('does not render without container element', () => {
    const { container } = render(<Card>Test</Card>);

    const cardElement = container.querySelector('.card');
    expect(cardElement).toBeTruthy();
  });
});
