import { createSlice } from '@reduxjs/toolkit';
import { chairTypesSliceState as initialState } from '@app/states';
import { setupLoadThunk } from '@app/thunks';
import { ChairType, Setup, StateEntities } from '@app/types';

export const chairTypesSlice = createSlice({
  name: 'chairTypes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        setupLoadThunk.fulfilled,
        (state: StateEntities<ChairType>, { payload }) => {
          const { chairTypes } = payload as Setup;
          state.entities = chairTypes;
          state.status = 'success';
        },
      )
      .addCase(setupLoadThunk.pending, (state: StateEntities<ChairType>) => {
        state.action = 'load';
        state.entities = [];
        state.error = null;
        state.status = 'pending';
      })
      .addCase(
        setupLoadThunk.rejected,
        (state: StateEntities<ChairType>, { payload }) => {
          state.error = payload as string;
          state.status = 'error';
        },
      );
  },
});
