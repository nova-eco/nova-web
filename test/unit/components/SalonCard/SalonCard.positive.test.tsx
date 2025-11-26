import { render, screen } from '@testing-library/react';
import {
  locationWithMap,
  locationWithoutMap,
  maps,
  salonImageExternal,
  salonImageTypes,
  salonMinimal,
  salonWithLongSummary,
  salonWithShortSummary,
} from '@test/fixtures';
import userEvent from '@testing-library/user-event';
import { SalonCard } from '@app/components/SalonCard/SalonCard';

describe('SalonCard - Positive Tests', () => {
  const mockSetSalonId = jest.fn();
  const locations = [locationWithMap, locationWithoutMap];
  const salonImages = [salonImageExternal];

  beforeEach(() => {
    mockSetSalonId.mockClear();
  });

  const testCases = [
    {
      name: 'renders salon with short summary',
      props: {
        locations,
        maps,
        salon: salonWithShortSummary,
        salonImages,
        salonImageTypes,
        setSalonId: mockSetSalonId,
      },
      expectedName: 'Bella Salon',
      expectedSummary: 'A modern salon offering premium haircuts and styling.',
    },
    {
      name: 'renders salon with long summary',
      props: {
        locations,
        maps,
        salon: salonWithLongSummary,
        salonImages,
        salonImageTypes,
        setSalonId: mockSetSalonId,
      },
      expectedName: 'Style Studio',
      expectedSummary:
        'Style Studio provides exceptional hair care services in a welcoming environment. Our talented team specializes in modern cuts, vibrant colors, and personalized styling.',
    },
    {
      name: 'renders minimal salon',
      props: {
        locations,
        maps,
        salon: salonMinimal,
        salonImages,
        salonImageTypes,
        setSalonId: mockSetSalonId,
      },
      expectedName: 'Cuts & Colors',
      expectedSummary: 'Great cuts.',
    },
    {
      name: 'renders with light theme',
      props: {
        locations,
        maps,
        salon: salonWithShortSummary,
        salonImages,
        salonImageTypes,
        setSalonId: mockSetSalonId,
        theme: 'light' as const,
      },
      expectedName: 'Bella Salon',
      expectedTheme: 'light',
    },
    {
      name: 'renders with dark theme',
      props: {
        locations,
        maps,
        salon: salonMinimal,
        salonImages,
        salonImageTypes,
        setSalonId: mockSetSalonId,
        theme: 'dark' as const,
      },
      expectedName: 'Cuts & Colors',
      expectedTheme: 'dark',
    },
  ];

  test.each(testCases)(
    '$name',
    ({ props, expectedName, expectedSummary, expectedTheme }) => {
      const { container } = render(<SalonCard {...props} />);

      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading.textContent).toBe(expectedName);

      if (expectedSummary) {
        expect(screen.getByText(expectedSummary)).toBeTruthy();
      }

      if (expectedTheme) {
        const themedContainer = container.querySelector('[data-theme]');
        expect(themedContainer?.getAttribute('data-theme')).toBe(expectedTheme);
      }
    },
  );

  test('renders Select button', () => {
    render(
      <SalonCard
        locations={locations}
        maps={maps}
        salon={salonWithShortSummary}
        salonImages={salonImages}
        salonImageTypes={salonImageTypes}
        setSalonId={mockSetSalonId}
      />,
    );

    const button = screen.getByRole('button', { name: 'Select' });
    expect(button).toBeTruthy();
    expect(button.textContent).toBe('Select');
  });

  test('calls setSalonId with correct id when Select button is clicked', async () => {
    const user = userEvent.setup();

    render(
      <SalonCard
        locations={locations}
        maps={maps}
        salon={salonWithShortSummary}
        salonImages={salonImages}
        salonImageTypes={salonImageTypes}
        setSalonId={mockSetSalonId}
      />,
    );

    const button = screen.getByRole('button', { name: 'Select' });
    await user.click(button);

    expect(mockSetSalonId).toHaveBeenCalledTimes(1);
    expect(mockSetSalonId).toHaveBeenCalledWith(salonWithShortSummary.id);
  });

  test('calls setSalonId multiple times when clicked multiple times', async () => {
    const user = userEvent.setup();

    render(
      <SalonCard
        locations={locations}
        maps={maps}
        salon={salonMinimal}
        salonImages={salonImages}
        salonImageTypes={salonImageTypes}
        setSalonId={mockSetSalonId}
      />,
    );

    const button = screen.getByRole('button', { name: 'Select' });
    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(mockSetSalonId).toHaveBeenCalledTimes(3);
    expect(mockSetSalonId).toHaveBeenCalledWith(salonMinimal.id);
  });

  test('renders Card component wrapper', () => {
    const { container } = render(
      <SalonCard
        locations={locations}
        maps={maps}
        salon={salonWithShortSummary}
        salonImages={salonImages}
        salonImageTypes={salonImageTypes}
        setSalonId={mockSetSalonId}
      />,
    );

    const card = container.querySelector('.card');
    expect(card).toBeTruthy();
  });

  test('finds correct location from locations array', () => {
    render(
      <SalonCard
        locations={locations}
        maps={maps}
        salon={salonWithLongSummary}
        salonImages={salonImages}
        salonImageTypes={salonImageTypes}
        setSalonId={mockSetSalonId}
      />,
    );

    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading.textContent).toBe('Style Studio');
  });
});
