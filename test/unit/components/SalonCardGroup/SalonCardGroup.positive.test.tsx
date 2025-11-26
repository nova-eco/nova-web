import { render, screen } from '@testing-library/react';
import {
  salonMinimal,
  salonWithLongSummary,
  salonWithShortSummary,
} from '@test/fixtures';
import { SalonCardGroup } from '@app/components/SalonCardGroup/SalonCardGroup';

// Mock the SalonCard component to avoid Redux dependency
jest.mock('@app/components/SalonCard', () => {
  const { MockSalonCard } = jest.requireActual('@test/mocks');
  return {
    __esModule: true,
    default: MockSalonCard,
  };
});

describe('SalonCardGroup - Positive Tests', () => {
  const testCases = [
    {
      name: 'renders with single salon',
      props: {
        salons: [salonWithShortSummary],
      },
      expectedCount: 1,
      expectedName: 'Bella Salon',
    },
    {
      name: 'renders with multiple salons',
      props: {
        salons: [salonWithShortSummary, salonWithLongSummary, salonMinimal],
      },
      expectedCount: 3,
    },
    {
      name: 'renders with two salons',
      props: {
        salons: [salonWithShortSummary, salonMinimal],
      },
      expectedCount: 2,
    },
    {
      name: 'renders with light theme',
      props: {
        salons: [salonWithShortSummary],
        theme: 'light' as const,
      },
      expectedCount: 1,
      expectedTheme: 'light',
    },
    {
      name: 'renders with dark theme',
      props: {
        salons: [salonWithShortSummary, salonWithLongSummary],
        theme: 'dark' as const,
      },
      expectedCount: 2,
      expectedTheme: 'dark',
    },
  ];

  test.each(testCases)(
    '$name',
    ({ props, expectedCount, expectedName, expectedTheme }) => {
      const { container } = render(<SalonCardGroup {...props} />);

      const cards = screen.getAllByTestId(/^salon-card-/);
      expect(cards.length).toBe(expectedCount);

      if (expectedName) {
        expect(screen.getByText(expectedName)).toBeTruthy();
      }

      if (expectedTheme) {
        const themedContainer = container.querySelector('[data-theme]');
        expect(themedContainer?.getAttribute('data-theme')).toBe(expectedTheme);
      }
    },
  );

  test('renders correct salon names for each card', () => {
    const salons = [salonWithShortSummary, salonWithLongSummary, salonMinimal];

    render(<SalonCardGroup salons={salons} />);

    expect(screen.getByText('Bella Salon')).toBeTruthy();
    expect(screen.getByText('Style Studio')).toBeTruthy();
    expect(screen.getByText('Cuts & Colors')).toBeTruthy();
  });

  test('uses salon id as key for each card', () => {
    const salons = [salonWithShortSummary, salonWithLongSummary];

    render(<SalonCardGroup salons={salons} />);

    const card1 = screen.getByTestId(`salon-card-${salonWithShortSummary.id}`);
    const card2 = screen.getByTestId(`salon-card-${salonWithLongSummary.id}`);

    expect(card1).toBeTruthy();
    expect(card2).toBeTruthy();
  });

  test('renders container with grid layout', () => {
    const { container } = render(<SalonCardGroup salons={[salonWithShortSummary]} />);

    const gridContainer = container.firstChild;
    expect(gridContainer).toBeTruthy();
  });

  test('renders empty array without error', () => {
    const { container } = render(<SalonCardGroup salons={[]} />);

    expect(container.firstChild).toBeTruthy();
    expect(screen.queryAllByTestId(/^salon-card-/).length).toBe(0);
  });

  test('renders four salons in grid', () => {
    const fourSalons = [
      salonWithShortSummary,
      salonWithLongSummary,
      salonMinimal,
      { ...salonWithShortSummary, id: 'unique-id-4', name: 'Fourth Salon' },
    ];

    render(<SalonCardGroup salons={fourSalons} />);

    const cards = screen.getAllByTestId(/^salon-card-/);
    expect(cards.length).toBe(4);
  });

  test('renders more than four salons', () => {
    const fiveSalons = [
      salonWithShortSummary,
      salonWithLongSummary,
      salonMinimal,
      { ...salonWithShortSummary, id: 'unique-id-4', name: 'Fourth Salon' },
      { ...salonWithShortSummary, id: 'unique-id-5', name: 'Fifth Salon' },
    ];

    render(<SalonCardGroup salons={fiveSalons} />);

    const cards = screen.getAllByTestId(/^salon-card-/);
    expect(cards.length).toBe(5);
  });
});
