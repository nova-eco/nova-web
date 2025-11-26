import { createSlice } from '@reduxjs/toolkit';
import { bookingPathwayRoutesState as initialState } from '@app/states';
import { bookingPathwayRoutesLoadThunk } from '@app/thunks';
import type { BookingPathwayRoute, StateBookingPathwayRoutes } from '@app/types';

export const bookingPathwayRoutesSlice = createSlice({
  name: 'bookingPathwayRoutes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        bookingPathwayRoutesLoadThunk.fulfilled,
        (state: StateBookingPathwayRoutes, { payload }) => {
          state.entities = payload as BookingPathwayRoute[];
          state.status = 'success';
        },
      )
      .addCase(
        bookingPathwayRoutesLoadThunk.pending,
        (state: StateBookingPathwayRoutes) => {
          state.action = 'load';
          state.entities = [];
          state.error = null;
          state.status = 'pending';
        },
      )
      .addCase(
        bookingPathwayRoutesLoadThunk.rejected,
        (state: StateBookingPathwayRoutes, { payload }) => {
          state.error = payload as string;
          state.status = 'error';
        },
      );
  },
});
