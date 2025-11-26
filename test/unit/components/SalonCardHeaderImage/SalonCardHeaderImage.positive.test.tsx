import { render, screen } from '@testing-library/react';
import {
  locationWithMap,
  locationWithoutMap,
  maps,
  salonImageExternal,
  salonImageInternal,
  salonImageTypes,
} from '@test/fixtures';
import { SalonCardHeaderImage } from '@app/components/SalonCardHeaderImage/SalonCardHeaderImage';

describe('SalonCardHeaderImage - Positive Tests', () => {
  const testCases = [
    {
      name: 'renders external image when available',
      props: {
        location: locationWithMap,
        maps,
        salonImages: [salonImageExternal, salonImageInternal],
        salonImageTypes,
        salonName: 'Test Salon',
      },
      expectedImage: salonImageExternal.url,
    },
    {
      name: 'renders internal image when external not available',
      props: {
        location: locationWithMap,
        maps,
        salonImages: [salonImageInternal],
        salonImageTypes,
        salonName: 'Test Salon',
      },
      expectedImage: salonImageInternal.url,
    },
    {
      name: 'renders map when no images available',
      props: {
        location: locationWithMap,
        maps,
        salonImages: [],
        salonImageTypes,
        salonName: 'Test Salon',
      },
      expectedImage: maps[0].url,
    },
    {
      name: 'renders fallback when no images or map available',
      props: {
        location: locationWithoutMap,
        maps,
        salonImages: [],
        salonImageTypes,
        salonName: 'Test Salon',
      },
      shouldRenderFallback: true,
    },
  ];

  test.each(testCases)('$name', ({ props, expectedImage, shouldRenderFallback }) => {
    render(<SalonCardHeaderImage {...props} />);

    if (expectedImage) {
      const imageElement = screen.getByRole('img');
      expect(imageElement.getAttribute('src')).toBe(expectedImage);
      expect(imageElement.getAttribute('alt')).toBe(props.salonName);
    }

    if (shouldRenderFallback) {
      const fallbackText = screen.getByText('T');
      expect(fallbackText).toBeTruthy();
    }
  });
});
