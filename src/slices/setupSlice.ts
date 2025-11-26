import { createSlice } from '@reduxjs/toolkit';
import { setupSliceState as initialState } from '@app/states';
import { setupLoadThunk } from '@app/thunks';
import { Setup, StateEntity } from '@app/types';

export const setupSlice = createSlice({
  name: 'setup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setupLoadThunk.fulfilled, (state: StateEntity<Setup>) => {
        state.entity = null;
        state.status = 'success';
      })
      .addCase(setupLoadThunk.pending, (state: StateEntity<Setup>) => {
        state.action = 'load';
        state.entity = null;
        state.error = null;
        state.status = 'pending';
      })
      .addCase(setupLoadThunk.rejected, (state: StateEntity<Setup>, { payload }) => {
        state.error = payload as string;
        state.status = 'error';
      });
  },
});
