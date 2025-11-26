import { createAsyncThunk } from '@reduxjs/toolkit';
import { patch } from '@app/fetch';
import { Chair } from '@app/types';

export const chairUpdateThunk = createAsyncThunk<Chair, Chair>(
  'chair/update',
  async (data, thunkAPI) => {
    try {
      const params = { ...data };
      const { id } = params;
      const updatedAndSavedChair = await patch<Chair, Chair>({
        data,
        url: `http://localhost:3000/v2/workplace-chair/${id}`,
      });

      return updatedAndSavedChair;
    } catch (error) {
      const { message } = error as Error;

      return thunkAPI.rejectWithValue(message);
    }
  },
);
