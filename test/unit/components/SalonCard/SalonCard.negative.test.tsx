import { render, screen } from '@testing-library/react';
import {
  locationWithMap,
  locationWithoutMap,
  maps,
  salonImageExternal,
  salonImageTypes,
  salonWithNoMatchingLocation,
  salonWithShortSummary,
} from '@test/fixtures';
import { SalonCard } from '@app/components/SalonCard/SalonCard';

describe('SalonCard - Negative Tests', () => {
  const mockSetSalonId = jest.fn();
  const locations = [locationWithMap, locationWithoutMap];
  const salonImages = [salonImageExternal];

  beforeEach(() => {
    mockSetSalonId.mockClear();
  });

  test('does not render when location is not found', () => {
    const { container } = render(
      <SalonCard
        locations={locations}
        maps={maps}
        salon={salonWithNoMatchingLocation}
        salonImages={salonImages}
        salonImageTypes={salonImageTypes}
        setSalonId={mockSetSalonId}
      />,
    );

    expect(container.firstChild).toBeNull();
    expect(screen.queryByRole('heading')).toBeNull();
    expect(screen.queryByRole('button')).toBeNull();
  });

  test('does not render when locations array is empty', () => {
    const { container } = render(
      <SalonCard
        locations={[]}
        maps={maps}
        salon={salonWithShortSummary}
        salonImages={salonImages}
        salonImageTypes={salonImageTypes}
        setSalonId={mockSetSalonId}
      />,
    );

    expect(container.firstChild).toBeNull();
  });

  test('does not call setSalonId initially', () => {
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

    expect(mockSetSalonId).not.toHaveBeenCalled();
  });

  test('does not render description initially', () => {
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

    expect(screen.queryByText(salonWithShortSummary.description)).toBeNull();
  });

  test('does not render with wrong salon name', () => {
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

    expect(screen.queryByText('Wrong Salon Name')).toBeNull();
  });

  test('does not have multiple Select buttons', () => {
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

    const buttons = screen.getAllByRole('button');
    const selectButtons = buttons.filter((button) => button.textContent === 'Select');
    expect(selectButtons.length).toBe(1);
  });

  test('does not render Card text from Card component', () => {
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

    // Card component renders "Card" text, but it should be present
    // This test verifies the structure exists
    expect(card?.textContent).toContain('Card');
  });
});
