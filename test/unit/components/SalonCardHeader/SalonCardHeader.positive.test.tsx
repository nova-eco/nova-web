import { render, screen } from '@testing-library/react';
import {
  locationWithMap,
  locationWithoutMap,
  maps,
  salonImageExternal,
  salonImageInternal,
  salonImageTypes,
} from '@test/fixtures';
import { SalonCardHeader } from '@app/components/SalonCardHeader/SalonCardHeader';

describe('SalonCardHeader - Positive Tests', () => {
  const testCases = [
    {
      name: 'renders salon name as heading',
      props: {
        location: locationWithMap,
        salonImages: [salonImageExternal],
        salonImageTypes,
        maps,
        salonName: 'Bella Salon',
      },
      expectedHeading: 'Bella Salon',
    },
    {
      name: 'renders with external image',
      props: {
        location: locationWithMap,
        salonImages: [salonImageExternal, salonImageInternal],
        salonImageTypes,
        maps,
        salonName: 'Hair Studio',
      },
      expectedHeading: 'Hair Studio',
      expectedImage: salonImageExternal.url,
    },
    {
      name: 'renders with fallback when no images',
      props: {
        location: locationWithoutMap,
        salonImages: [],
        salonImageTypes,
        maps,
        salonName: 'Cuts & Colors',
      },
      expectedHeading: 'Cuts & Colors',
      shouldRenderFallback: true,
    },
    {
      name: 'renders with light theme',
      props: {
        location: locationWithMap,
        salonImages: [salonImageExternal],
        salonImageTypes,
        maps,
        salonName: 'Style Salon',
        theme: 'light' as const,
      },
      expectedHeading: 'Style Salon',
    },
    {
      name: 'renders with dark theme',
      props: {
        location: locationWithMap,
        salonImages: [salonImageExternal],
        salonImageTypes,
        maps,
        salonName: 'Modern Cuts',
        theme: 'dark' as const,
      },
      expectedHeading: 'Modern Cuts',
    },
  ];

  test.each(testCases)(
    '$name',
    ({ props, expectedHeading, expectedImage, shouldRenderFallback }) => {
      render(<SalonCardHeader {...props} />);

      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading.textContent).toBe(expectedHeading);

      if (expectedImage) {
        const imageElement = screen.getByRole('img');
        expect(imageElement.getAttribute('src')).toBe(expectedImage);
      }

      if (shouldRenderFallback) {
        const fallbackInitial = expectedHeading.charAt(0).toUpperCase();
        expect(screen.getByText(fallbackInitial)).toBeTruthy();
      }
    },
  );
});
