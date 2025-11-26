import { createAsyncThunk } from '@reduxjs/toolkit';
import { serverHost, serverPort, serverProtocol } from '@app/config';
import { post } from '@app/fetch';
import { Service } from '@app/types';

export const serviceCreateThunk = createAsyncThunk<Service, Service>(
  'service/create',
  async (data, thunkAPI) => {
    try {
      const url = `${serverProtocol}://${serverHost}:${serverPort}/v2/service`;
      return await post<Service, Service>({
        data,
        url,
      });
    } catch (error) {
      const { message } = error as Error;

      return thunkAPI.rejectWithValue(message);
    }
  },
);
