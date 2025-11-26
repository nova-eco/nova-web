import { createSlice } from '@reduxjs/toolkit';
import { servicePricesSliceState as initialState } from '@app/states';
import { setupLoadThunk } from '@app/thunks';
import { ServicePrice, Setup, StateEntities } from '@app/types';

export const servicePricesSlice = createSlice({
  name: 'servicePrices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        setupLoadThunk.fulfilled,
        (state: StateEntities<ServicePrice>, { payload }) => {
          const { servicePrices } = payload as Setup;
          state.entities = servicePrices;
          state.status = 'success';
        },
      )
      .addCase(setupLoadThunk.pending, (state: StateEntities<ServicePrice>) => {
        state.action = 'load';
        state.entities = [];
        state.error = null;
        state.status = 'pending';
      })
      .addCase(
        setupLoadThunk.rejected,
        (state: StateEntities<ServicePrice>, { payload }) => {
          state.error = payload as string;
          state.status = 'error';
        },
      );
  },
});
