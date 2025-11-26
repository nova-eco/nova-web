import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '@app/fetch';
import { BookingPathwayRoute } from '@app/types';

export const bookingPathwayRoutesLoadThunk = createAsyncThunk<BookingPathwayRoute[]>(
  'bookingPathwayRoutes/load',
  async (_, thunkAPI) => {
    try {
      return await get<BookingPathwayRoute[]>({
        url: 'http://localhost:3000/v2/booking/pathway/routes',
      });
    } catch (error) {
      const { message } = error as Error;

      return thunkAPI.rejectWithValue(message);
    }
  },
);
