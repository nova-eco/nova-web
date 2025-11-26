import { connect } from 'react-redux';
import type { RootState } from '@app/store';
import { SalonCardGroup } from './SalonCardGroup';
import type { SalonCardGroupProps } from './SalonCardGroupProps';

const mapStateToProps = (state: RootState) => {
  return {
    salons: (state as any)?.salons?.entities || [],
    theme: (state as any)?.userInterface?.theme,
  };
};

export const SalonCardGroupConnected = connect<SalonCardGroupProps, {}, {}, RootState>(
  mapStateToProps,
)(SalonCardGroup);
