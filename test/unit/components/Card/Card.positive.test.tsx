import { render, screen } from '@testing-library/react';
import Card from '@app/components/Card';

describe('Card - Positive Tests', () => {
  const testCases = [
    {
      name: 'renders card with text children',
      children: 'Test content',
      expectedText: 'Test content',
    },
    {
      name: 'renders card with multiple children',
      children: (
        <>
          <span>First child</span>
          <span>Second child</span>
        </>
      ),
      expectedText: ['First child', 'Second child'],
    },
    {
      name: 'renders card with nested elements',
      children: (
        <div>
          <h2>Heading</h2>
          <p>Paragraph</p>
        </div>
      ),
      expectedText: ['Heading', 'Paragraph'],
    },
  ];

  test.each(testCases)('$name', ({ children, expectedText }) => {
    const { container } = render(<Card>{children}</Card>);

    const cardElement = container.querySelector('.card');
    expect(cardElement).toBeTruthy();
    expect(cardElement?.textContent).toContain('Card');

    if (typeof expectedText === 'string') {
      expect(cardElement?.textContent).toContain(expectedText);
    } else {
      expectedText.forEach((text) => {
        expect(cardElement?.textContent).toContain(text);
      });
    }
  });

  test('renders card with empty children', () => {
    const { container } = render(<Card />);

    const cardElement = container.querySelector('.card');
    expect(cardElement).toBeTruthy();
    expect(cardElement?.textContent).toBe('Card');
    expect(container.firstChild).toBeTruthy();
  });
});
