import { findValidImage } from '@app/components/SalonCardHeaderImage/findValidImage';
import { salonImageExternal, salonImageInternal, salonImageTypes } from '@test/fixtures';

describe('findValidImage - Positive Tests', () => {
  test('returns external image when type matches and canUseExternally is true', () => {
    const result = findValidImage([salonImageExternal], salonImageTypes, 'external');

    expect(result).toBe(salonImageExternal);
  });

  test('returns internal image when type matches and canUseExternally is true', () => {
    const result = findValidImage([salonImageInternal], salonImageTypes, 'internal');

    expect(result).toBe(salonImageInternal);
  });

  test('returns first matching image when multiple images match', () => {
    const result = findValidImage(
      [salonImageExternal, salonImageInternal],
      salonImageTypes,
      'external',
    );

    expect(result).toBe(salonImageExternal);
  });
});
