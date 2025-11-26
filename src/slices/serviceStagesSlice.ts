import { createSlice } from '@reduxjs/toolkit';
import { serviceStagesSliceState as initialState } from '@app/states';
import { setupLoadThunk } from '@app/thunks';
import { ServiceStage, Setup, StateEntities } from '@app/types';

export const serviceStagesSlice = createSlice({
  name: 'serviceStages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        setupLoadThunk.fulfilled,
        (state: StateEntities<ServiceStage>, { payload }) => {
          const { serviceStages } = payload as Setup;
          state.entities = serviceStages;
          state.status = 'success';
        },
      )
      .addCase(setupLoadThunk.pending, (state: StateEntities<ServiceStage>) => {
        state.action = 'load';
        state.entities = [];
        state.error = null;
        state.status = 'pending';
      })
      .addCase(
        setupLoadThunk.rejected,
        (state: StateEntities<ServiceStage>, { payload }) => {
          state.error = payload as string;
          state.status = 'error';
        },
      );
  },
});
