import { createSlice } from '@reduxjs/toolkit';
import { servicePriceTypesSliceState as initialState } from '@app/states';
import { setupLoadThunk } from '@app/thunks';
import { ServicePriceType, Setup, StateEntities } from '@app/types';

export const servicePriceTypesSlice = createSlice({
  name: 'servicePriceTypes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        setupLoadThunk.fulfilled,
        (state: StateEntities<ServicePriceType>, { payload }) => {
          const { servicePriceTypes } = payload as Setup;
          state.entities = servicePriceTypes;
          state.status = 'success';
        },
      )
      .addCase(setupLoadThunk.pending, (state: StateEntities<ServicePriceType>) => {
        state.action = 'load';
        state.entities = [];
        state.error = null;
        state.status = 'pending';
      })
      .addCase(
        setupLoadThunk.rejected,
        (state: StateEntities<ServicePriceType>, { payload }) => {
          state.error = payload as string;
          state.status = 'error';
        },
      );
  },
});
