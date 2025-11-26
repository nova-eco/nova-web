import type { Salon } from '@app/types';

export const salonWithShortSummary: Salon = {
  id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  locationId: '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
  name: 'Bella Salon',
  summary: 'A modern salon offering premium haircuts and styling.',
  description:
    'Bella Salon is a premier hair and beauty destination located in the heart of the city. We offer a wide range of services including precision haircuts, expert color treatments, balayage, highlights, keratin smoothing treatments, and professional styling for all occasions. Our experienced team of stylists stays current with the latest trends and techniques to ensure you receive the highest quality service. We use only premium products from leading brands to maintain the health and beauty of your hair. Whether you need a quick trim or a complete transformation, our talented professionals are here to help you look and feel your best.',
};

export const salonWithLongSummary: Salon = {
  id: 'd4e5f6a7-b8c9-0123-def1-234567890123',
  locationId: '9e8d7c6b-5a4f-3e2d-1c0b-9a8f7e6d5c4b',
  name: 'Style Studio',
  summary:
    'Style Studio provides exceptional hair care services in a welcoming environment. Our talented team specializes in modern cuts, vibrant colors, and personalized styling.',
  description:
    'Style Studio is your go-to destination for all your hair care needs. We pride ourselves on creating a warm and inviting atmosphere where clients can relax and enjoy professional salon services. Our skilled stylists have years of experience and are passionate about helping you achieve your desired look. From classic cuts to bold transformations, we work with you to create a style that reflects your personality and lifestyle.',
};

export const salonMinimal: Salon = {
  id: 'a7b8c9d0-e1f2-3456-a789-bcdef0123456',
  locationId: '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
  name: 'Cuts & Colors',
  summary: 'Great cuts.',
  description: 'We offer excellent haircuts and color services.',
};

export const salonWithNoMatchingLocation: Salon = {
  id: 'f9e8d7c6-b5a4-3210-9876-fedcba543210',
  locationId: 'non-existent-location-id-12345678',
  name: 'Phantom Salon',
  summary: 'A salon without a location.',
  description: 'This salon has no matching location in the locations array.',
};