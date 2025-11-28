import { connect } from 'react-redux';
import type { RootState } from '@app/store';
import type { Map } from '@app/types';
import { SalonCard } from './SalonCard';
import type { SalonCardOwnProps } from './SalonCardOwnProps';
import type { SalonCardProps } from './SalonCardProps';

const mapStateToProps = (state: RootState) => ({
  locations: (state as any)?.locations?.entities || [],
  maps: ((state as any)?.maps?.entities || []) as Map[],
  salonImages: (state as any)?.salonImages?.entities || [],
  salonImageTypes: (state as any)?.salonImageTypes?.entities || [],
  theme: (state as any)?.userInterface?.theme,
});

const mapDispatchToProps = {
  setSalonId: (salonId: string) => {
    // TODO: Replace with actual action when slice is created
    console.log('Selected salon:', salonId);
  },
};

export const SalonCardConnected = connect<
  Pick<
    SalonCardProps,
    'locations' | 'maps' | 'salonImages' | 'salonImageTypes' | 'theme'
  >,
  Pick<SalonCardProps, 'setSalonId'>,
  SalonCardOwnProps,
  RootState
>(
  mapStateToProps,
  mapDispatchToProps,
)(SalonCard);
