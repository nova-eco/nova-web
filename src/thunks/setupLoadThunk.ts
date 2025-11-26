import { createAsyncThunk } from '@reduxjs/toolkit';
import { serverHost, serverPort, serverProtocol } from '@app/config';
import { get } from '@app/fetch';
import { Setup, User } from '@app/types';

export const setupLoadThunk = createAsyncThunk<Setup, User>(
  'setup/load',
  async (data, thunkAPI) => {
    try {
      const { id: userId } = data;
      const url = `${serverProtocol}://${serverHost}:${serverPort}/v2/setup/${userId}`;

      return await get<Setup>({ url });
    } catch (error) {
      const { message } = error as Error;

      return thunkAPI.rejectWithValue(message);
    }
  },
);
