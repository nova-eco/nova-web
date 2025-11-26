import { createSlice } from '@reduxjs/toolkit';
import { currenciesSliceState as initialState } from '@app/states';
import { setupLoadThunk } from '@app/thunks';
import { Currency, Setup, StateEntities } from '@app/types';

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        setupLoadThunk.fulfilled,
        (state: StateEntities<Currency>, { payload }) => {
          const { currencies } = payload as Setup;
          state.entities = currencies;
          state.status = 'success';
        },
      )
      .addCase(setupLoadThunk.pending, (state: StateEntities<Currency>) => {
        state.action = 'load';
        state.entities = [];
        state.error = null;
        state.status = 'pending';
      })
      .addCase(setupLoadThunk.rejected, (state: StateEntities<Currency>, { payload }) => {
        state.error = payload as string;
        state.status = 'error';
      });
  },
});
