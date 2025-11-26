import { createSlice } from '@reduxjs/toolkit';
import { geoCitiesSliceState as initialState } from '@app/states';
import { setupLoadThunk } from '@app/thunks';
import { GeoCity, Setup, StateEntities } from '@app/types';

export const geoCitiesSlice = createSlice({
  name: 'geoCities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setupLoadThunk.fulfilled, (state: StateEntities<GeoCity>, { payload }) => {
        const { geoCities } = payload as Setup;
        state.entities = geoCities;
        state.status = 'success';
      })
      .addCase(setupLoadThunk.pending, (state: StateEntities<GeoCity>) => {
        state.action = 'load';
        state.entities = [];
        state.error = null;
        state.status = 'pending';
      })
      .addCase(setupLoadThunk.rejected, (state: StateEntities<GeoCity>, { payload }) => {
        state.error = payload as string;
        state.status = 'error';
      });
  },
});
