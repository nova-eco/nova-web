import { createAsyncThunk } from '@reduxjs/toolkit';
import { post } from '@app/fetch';
import { Chair } from '@app/types';

export const chairCreateThunk = createAsyncThunk<Chair, Chair>(
  'chair/create',
  async (data, thunkAPI) => {
    try {
      return await post<Chair, Chair>({
        data,
        url: 'http://localhost:3000/v2/workplace-chair',
      });
    } catch (error) {
      const { message } = error as Error;

      return thunkAPI.rejectWithValue(message);
    }
  },
);
