import { createSlice } from '@reduxjs/toolkit';
import { serviceStageRoleTypesSliceState as initialState } from '@app/states';
import { setupLoadThunk } from '@app/thunks';
import { ServiceStageRoleType, Setup, StateEntities } from '@app/types';

export const serviceStageRoleTypesSlice = createSlice({
  name: 'serviceStageRoleTypes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        setupLoadThunk.fulfilled,
        (state: StateEntities<ServiceStageRoleType>, { payload }) => {
          const { serviceStageRoleTypes } = payload as Setup;
          state.entities = serviceStageRoleTypes;
          state.status = 'success';
        },
      )
      .addCase(setupLoadThunk.pending, (state: StateEntities<ServiceStageRoleType>) => {
        state.action = 'load';
        state.entities = [];
        state.error = null;
        state.status = 'pending';
      })
      .addCase(
        setupLoadThunk.rejected,
        (state: StateEntities<ServiceStageRoleType>, { payload }) => {
          state.error = payload as string;
          state.status = 'error';
        },
      );
  },
});
