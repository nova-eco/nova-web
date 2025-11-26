import { createSlice } from '@reduxjs/toolkit';
import { geoCountriesSliceState as initialState } from '@app/states';
import { setupLoadThunk } from '@app/thunks';
import { GeoCountry, Setup, StateEntities } from '@app/types';

export const geoCountriesSlice = createSlice({
  name: 'geoCountries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        setupLoadThunk.fulfilled,
        (state: StateEntities<GeoCountry>, { payload }) => {
          const { geoCountries } = payload as Setup;
          state.entities = geoCountries;
          state.status = 'success';
        },
      )
      .addCase(setupLoadThunk.pending, (state: StateEntities<GeoCountry>) => {
        state.action = 'load';
        state.entities = [];
        state.error = null;
        state.status = 'pending';
      })
      .addCase(
        setupLoadThunk.rejected,
        (state: StateEntities<GeoCountry>, { payload }) => {
          state.error = payload as string;
          state.status = 'error';
        },
      );
  },
});
