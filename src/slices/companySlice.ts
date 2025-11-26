import { createSlice } from '@reduxjs/toolkit';
import { companySliceState as initialState } from '@app/states';
import { setupLoadThunk } from '@app/thunks';
import { Company, Setup, StateEntity } from '@app/types';

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setupLoadThunk.fulfilled, (state: StateEntity<Company>, { payload }) => {
        const { company } = payload as Setup;
        state.entity = company;
        state.status = 'success';
      })
      .addCase(setupLoadThunk.pending, (state: StateEntity<Company>) => {
        state.action = 'load';
        state.entity = null;
        state.error = null;
        state.status = 'pending';
      })
      .addCase(setupLoadThunk.rejected, (state: StateEntity<Company>, { payload }) => {
        state.error = payload as string;
        state.status = 'error';
      });
  },
});
