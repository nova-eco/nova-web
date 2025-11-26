import { render, screen } from '@testing-library/react';
import {
  locationWithMap,
  locationWithoutMap,
  maps,
  salonImageExternal,
  salonImageInternal,
  salonImageInternalNotExternal,
  salonImageTypes,
} from '@test/fixtures';
import { SalonCardHeader } from '@app/components/SalonCardHeader/SalonCardHeader';

describe('SalonCardHeader - Negative Tests', () => {
  const testCases = [
    {
      name: 'does not render heading as different level',
      props: {
        location: locationWithMap,
        salonImages: [salonImageExternal],
        salonImageTypes,
        maps,
        salonName: 'Test Salon',
      },
      shouldNotFindHeadingLevel: 1,
    },
    {
      name: 'does not render internal image when external is available',
      props: {
        location: locationWithMap,
        salonImages: [salonImageExternal, salonImageInternal],
        salonImageTypes,
        maps,
        salonName: 'Test Salon',
      },
      unexpectedImage: salonImageInternal.url,
    },
    {
      name: 'does not render image when canUseExternally is false',
      props: {
        location: locationWithoutMap,
        salonImages: [salonImageInternalNotExternal],
        salonImageTypes,
        maps: [],
        salonName: 'Test Salon',
      },
      shouldNotRenderImage: true,
    },
    {
      name: 'does not render fallback when image is available',
      props: {
        location: locationWithMap,
        salonImages: [salonImageExternal],
        salonImageTypes,
        maps,
        salonName: 'Test Salon',
      },
      shouldNotRenderFallback: true,
    },
  ];

  test.each(testCases)(
    '$name',
    ({
      props,
      shouldNotFindHeadingLevel,
      unexpectedImage,
      shouldNotRenderImage,
      shouldNotRenderFallback,
    }) => {
      render(<SalonCardHeader {...props} />);

      if (shouldNotFindHeadingLevel) {
        expect(
          screen.queryByRole('heading', { level: shouldNotFindHeadingLevel }),
        ).toBeNull();
      }

      if (unexpectedImage) {
        const imageElement = screen.queryByRole('img');
        if (imageElement) {
          expect(imageElement.getAttribute('src')).not.toBe(unexpectedImage);
        }
      }

      if (shouldNotRenderImage) {
        expect(screen.queryByRole('img')).toBeNull();
      }

      if (shouldNotRenderFallback) {
        const fallbackInitial = props.salonName.charAt(0).toUpperCase();
        expect(screen.queryByText(fallbackInitial)).toBeNull();
      }
    },
  );
});
