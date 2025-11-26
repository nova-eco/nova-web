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
import { SalonCardHeaderImage } from '@app/components/SalonCardHeaderImage/SalonCardHeaderImage';

describe('SalonCardHeaderImage - Negative Tests', () => {
  const testCases = [
    {
      name: 'does not render internal image when external is available',
      props: {
        location: locationWithMap,
        maps,
        salonImages: [salonImageExternal, salonImageInternal],
        salonImageTypes,
        salonName: 'Test Salon',
      },
      unexpectedImage: salonImageInternal.url,
    },
    {
      name: 'does not render map when images are available',
      props: {
        location: locationWithMap,
        maps,
        salonImages: [salonImageExternal],
        salonImageTypes,
        salonName: 'Test Salon',
      },
      unexpectedImage: maps[0].url,
    },
    {
      name: 'does not render image when canUseExternally is false',
      props: {
        location: locationWithoutMap,
        maps: [],
        salonImages: [salonImageInternalNotExternal],
        salonImageTypes,
        salonName: 'Test Salon',
      },
      shouldNotRenderImage: true,
    },
    {
      name: 'does not render fallback when image is available',
      props: {
        location: locationWithMap,
        maps,
        salonImages: [salonImageExternal],
        salonImageTypes,
        salonName: 'Test Salon',
      },
      shouldNotRenderFallback: true,
    },
  ];

  test.each(testCases)(
    '$name',
    ({ props, unexpectedImage, shouldNotRenderImage, shouldNotRenderFallback }) => {
      render(<SalonCardHeaderImage {...props} />);

      if (unexpectedImage) {
        const imageElement = screen.getByRole('img');
        expect(imageElement.getAttribute('src')).not.toBe(unexpectedImage);
      }

      if (shouldNotRenderImage) {
        expect(screen.queryByRole('img')).toBeNull();
      }

      if (shouldNotRenderFallback) {
        expect(screen.queryByText('T')).toBeNull();
      }
    },
  );
});
