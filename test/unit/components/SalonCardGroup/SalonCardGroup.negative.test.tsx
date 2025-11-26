import { render, screen } from '@testing-library/react';
import { salonMinimal, salonWithShortSummary } from '@test/fixtures';
import { SalonCardGroup } from '@app/components/SalonCardGroup/SalonCardGroup';

// Mock the SalonCard component to avoid Redux dependency
jest.mock('@app/components/SalonCard', () => {
  const { MockSalonCard } = jest.requireActual('@test/mocks');
  return {
    __esModule: true,
    default: MockSalonCard,
  };
});

describe('SalonCardGroup - Negative Tests', () => {
  test('does not render cards when salons array is empty', () => {
    render(<SalonCardGroup salons={[]} />);

    const cards = screen.queryAllByTestId(/^salon-card-/);
    expect(cards.length).toBe(0);
  });

  test('does not render more cards than salons provided', () => {
    const salons = [salonWithShortSummary, salonMinimal];

    render(<SalonCardGroup salons={salons} />);

    const cards = screen.getAllByTestId(/^salon-card-/);
    expect(cards.length).toBe(2);
    expect(cards.length).not.toBe(3);
  });

  test('does not render wrong salon names', () => {
    render(<SalonCardGroup salons={[salonWithShortSummary]} />);

    expect(screen.queryByText('Nonexistent Salon')).toBeNull();
    expect(screen.queryByText('Wrong Name')).toBeNull();
  });

  test('does not render salon that is not in array', () => {
    render(<SalonCardGroup salons={[salonWithShortSummary]} />);

    expect(screen.queryByTestId(`salon-card-${salonMinimal.id}`)).toBeNull();
  });

  test('does not have theme attribute when theme is not provided', () => {
    const { container } = render(<SalonCardGroup salons={[salonWithShortSummary]} />);

    const themedContainer = container.querySelector('[data-theme]');
    expect(themedContainer?.getAttribute('data-theme')).toBeUndefined();
  });

  test('does not render duplicate cards for same salon', () => {
    const salons = [salonWithShortSummary];

    render(<SalonCardGroup salons={salons} />);

    const cards = screen.getAllByTestId(`salon-card-${salonWithShortSummary.id}`);
    expect(cards.length).toBe(1);
  });

  test('does not render when salons prop has duplicate ids', () => {
    // Suppress React's duplicate key warning since we're intentionally testing this scenario
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation((message) => {
      if (
        typeof message === 'string' &&
        message.includes('Encountered two children with the same key')
      ) {
        return;
      }
      /* eslint no-console: ["error", { allow: ["warn"] }] */
      console.warn(message);
    });

    const duplicateSalons = [
      salonWithShortSummary,
      salonWithShortSummary, // Same salon twice
    ];

    render(<SalonCardGroup salons={duplicateSalons} />);

    // Should render both cards even with duplicate ids (component doesn't prevent this)
    const cards = screen.getAllByTestId(/^salon-card-/);
    expect(cards.length).toBe(2);

    consoleErrorSpy.mockRestore();
  });

  test('does not fail with undefined salons properties', () => {
    const salonWithMinimalProps = {
      id: 'test-id',
      locationId: 'loc-id',
      salonImageIds: 'img-ids',
      name: 'Test Salon',
      summary: '',
      description: '',
    };

    render(<SalonCardGroup salons={[salonWithMinimalProps]} />);

    expect(screen.getByText('Test Salon')).toBeTruthy();
  });
});
