import { createSlice } from '@reduxjs/toolkit';
import { serviceBookingCompletionRulesSliceState as initialState } from '@app/states';
import { setupLoadThunk } from '@app/thunks';
import { ServiceBookingCompletionRule, Setup, StateEntities } from '@app/types';

export const serviceBookingCompletionRulesSlice = createSlice({
  name: 'serviceBookingCompletionRules',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        setupLoadThunk.fulfilled,
        (state: StateEntities<ServiceBookingCompletionRule>, { payload }) => {
          const { serviceBookingCompletionRules } = payload as Setup;
          state.entities = serviceBookingCompletionRules;
          state.status = 'success';
        },
      )
      .addCase(
        setupLoadThunk.pending,
        (state: StateEntities<ServiceBookingCompletionRule>) => {
          state.action = 'load';
          state.entities = [];
          state.error = null;
          state.status = 'pending';
        },
      )
      .addCase(
        setupLoadThunk.rejected,
        (state: StateEntities<ServiceBookingCompletionRule>, { payload }) => {
          state.error = payload as string;
          state.status = 'error';
        },
      );
  },
});
