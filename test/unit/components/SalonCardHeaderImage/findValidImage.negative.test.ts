import { findValidImage } from '@app/components/SalonCardHeaderImage/findValidImage';
import {
  salonImageExternal,
  salonImageInternalNotExternal,
  salonImageTypes,
} from '@test/fixtures';

describe('findValidImage - Negative Tests', () => {
  test('returns undefined when canUseExternally is false', () => {
    const result = findValidImage(
      [salonImageInternalNotExternal],
      salonImageTypes,
      'internal',
    );

    expect(result).toBeUndefined();
  });

  test('returns undefined when type does not match', () => {
    const result = findValidImage([salonImageExternal], salonImageTypes, 'internal');

    expect(result).toBeUndefined();
  });

  test('returns undefined when salonImageTypeId does not exist in salonImageTypes', () => {
    const imageWithInvalidTypeId = {
      ...salonImageExternal,
      salonImageTypeId: 'non-existent-id',
    };

    const result = findValidImage([imageWithInvalidTypeId], salonImageTypes, 'external');

    expect(result).toBeUndefined();
  });

  test('returns undefined when salonImages array is empty', () => {
    const result = findValidImage([], salonImageTypes, 'external');

    expect(result).toBeUndefined();
  });

  test('returns undefined when salonImageTypes array is empty', () => {
    const result = findValidImage([salonImageExternal], [], 'external');

    expect(result).toBeUndefined();
  });
});
