import { connect } from 'react-redux';
import type { RootState } from '@app/store';
import { ServiceCard } from './ServiceCard';

const mapStateToProps = (state: RootState) => ({
  locations: (state as any)?.locations?.entities || [],
  serviceImages: (state as any)?.serviceImages?.entities || [],
  servicePrices: (state as any)?.servicePrices?.entities || [],
  servicePriceTypes: (state as any)?.servicePriceTypes?.entities || [],
  theme: (state as any)?.userInterface?.theme,
});

const mapDispatchToProps = {
  setServiceId: (serviceId: string) => {
    // TODO: Replace with actual action when slice is created
    console.log('Selected service:', serviceId);
  },
};

export const ServiceCardConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceCard);
