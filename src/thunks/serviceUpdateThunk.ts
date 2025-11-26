import { createAsyncThunk } from '@reduxjs/toolkit';
import { patch } from '@app/fetch';
import { Service } from '@app/types';

export const serviceUpdateThunk = createAsyncThunk<Service, Service>(
  'service/update',
  async (data, thunkAPI) => {
    try {
      const params = { ...data };
      const { id } = params;
      console.log({ params });
      return await patch<Service, Service>({
        data,
        url: `http://localhost:3000/services/${id}`,
      });
    } catch (error) {
      const { message } = error as Error;

      return thunkAPI.rejectWithValue(message);
    }
  },
);
