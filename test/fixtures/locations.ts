import type { Location } from '@app/types';

export const locationWithMap: Location = {
  id: '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
  geoCityId: '9e8d7c6b-5a4f-3e2d-1c0b-9a8f7e6d5c4b',
  geoCountryId: '9e8d7c6b-5a4f-3e2d-1c0b-9a8f7e6d5c4b',
  mapId: '7f8e9d0c-1b2a-3f4e-5d6c-7b8a9f0e1d2c',
  addressLineOne: '123 High Street',
  addressLineTwo: 'Suite 100',
  area: 'Downtown',

};

export const locationWithoutMap: Location = {
  id: '9e8d7c6b-5a4f-3e2d-1c0b-9a8f7e6d5c4b',
  geoCityId: '9e8d7c6b-5a4f-3e2d-1c0b-9a8f7e6d5c4b',
  geoCountryId: '9e8d7c6b-5a4f-3e2d-1c0b-9a8f7e6d5c4b',
  addressLineOne: '456 Main Road',
  addressLineTwo: '',
  area: 'Suburb',
};