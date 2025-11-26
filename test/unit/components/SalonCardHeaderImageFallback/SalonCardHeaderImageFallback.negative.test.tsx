import { render, screen } from '@testing-library/react';
import { SalonCardHeaderImageFallback } from '@app/components/SalonCardHeaderImageFallback/SalonCardHeaderImageFallback';

describe('SalonCardHeaderImageFallback - Negative Tests', () => {
  const testCases = [
    {
      name: 'does not render full salon name',
      salonName: 'Bella Salon',
      unexpectedText: 'Bella Salon',
    },
    {
      name: 'does not render second letter',
      salonName: 'Hair Studio',
      shouldNotFind: 'a',
    },
    {
      name: 'does not render lowercase initial when name starts with uppercase',
      salonName: 'Salon',
      unexpectedText: 's',
    },
  ];

  test.each(testCases)('$name', ({ salonName, unexpectedText, shouldNotFind }) => {
    render(<SalonCardHeaderImageFallback salonName={salonName} />);

    if (unexpectedText) {
      expect(screen.queryByText(unexpectedText)).toBeNull();
    }

    if (shouldNotFind) {
      expect(screen.queryByText(shouldNotFind)).toBeNull();
    }
  });

  test('handles empty string gracefully', () => {
    const { container } = render(<SalonCardHeaderImageFallback salonName="" />);

    // Component should render without throwing an error
    expect(container.firstChild).toBeTruthy();
  });
});
