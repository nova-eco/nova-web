import { createSlice } from '@reduxjs/toolkit';
import { authState as initialState } from '@app/states';
import { userLoginThunk } from '@app/thunks';
import type { StateEntity, User } from '@app/types';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLoginThunk.fulfilled, (state: StateEntity<User>, { payload }) => {
        state.entity = payload as User;
        state.status = 'success';
      })
      .addCase(userLoginThunk.pending, (state: StateEntity<User>) => {
        state.action = 'login';
        state.entity = null;
        state.error = null;
        state.status = 'pending';
      })
      .addCase(userLoginThunk.rejected, (state: StateEntity<User>, { payload }) => {
        state.error = payload as string;
        state.status = 'error';
      });
  },
});
