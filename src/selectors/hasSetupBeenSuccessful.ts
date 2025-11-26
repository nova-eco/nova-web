import type { RootState } from '@app/store';

export const hasSetupBeenSuccessful = (state: RootState) =>
  state.setup.status === 'success';
