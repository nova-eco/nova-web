import { render, screen } from '@testing-library/react';
import { SalonCardHeaderImageFallback } from '@app/components/SalonCardHeaderImageFallback/SalonCardHeaderImageFallback';

describe('SalonCardHeaderImageFallback - Positive Tests', () => {
  const testCases = [
    {
      name: 'renders first letter capitalized for lowercase name',
      salonName: 'bella salon',
      expectedInitial: 'B',
    },
    {
      name: 'renders first letter for uppercase name',
      salonName: 'AMAZING CUTS',
      expectedInitial: 'A',
    },
    {
      name: 'renders first letter for mixed case name',
      salonName: 'Hair Studio',
      expectedInitial: 'H',
    },
    {
      name: 'renders first letter for single character name',
      salonName: 'X',
      expectedInitial: 'X',
    },
    {
      name: 'renders first letter when name starts with number',
      salonName: '5th Avenue Salon',
      expectedInitial: '5',
    },
  ];

  test.each(testCases)('$name', ({ salonName, expectedInitial }) => {
    render(<SalonCardHeaderImageFallback salonName={salonName} />);

    const initialElement = screen.getByText(expectedInitial);
    expect(initialElement).toBeTruthy();
  });
});
