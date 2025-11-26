import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { bookingPathwayState as initialState } from '@app/states';

export const bookingPathwaySlice = createSlice({
  name: 'bookingPathway',
  initialState,
  reducers: {
    startBookingPathway: (state, action: PayloadAction<string>) => {
      // TODO: Implement booking pathway initialization logic
      // userId is available in action.payload
      state = {
        ...state,
        preBookingRequest: {
          userId: action.payload,
        },
      };
      state.step = 0;
    },
    setBookingPathwayStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

export const { startBookingPathway, setBookingPathwayStep } = bookingPathwaySlice.actions;
