import { createAsyncThunk } from '@reduxjs/toolkit';
import { serverHost, serverPort, serverProtocol } from '@app/config';
import { post } from '@app/fetch';
import { User, UserCredentials } from '@app/types';

export const userLoginThunk = createAsyncThunk<User, UserCredentials>(
  'user/login',
  async (data, thunkAPI) => {
    try {
      const url = `${serverProtocol}://${serverHost}:${serverPort}/v2/login`;

      return await post<UserCredentials, User>({
        data,
        url,
      });
    } catch (error) {
      const { message } = error as Error;

      return thunkAPI.rejectWithValue(message);
    }
  },
);
