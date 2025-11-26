import type { Salon } from '@app/types';

export const MockSalonCard = ({ salon }: { salon: Salon }) => (
  <div data-testid={`salon-card-${salon.id}`}>{salon.name}</div>
);
