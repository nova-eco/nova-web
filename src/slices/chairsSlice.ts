import { createSlice } from '@reduxjs/toolkit';
import { chairsSliceState as initialState } from '@app/states';
import { chairCreateThunk, chairUpdateThunk, setupLoadThunk } from '@app/thunks';
import { Chair, Setup, StateEntities } from '@app/types';

export const chairsSlice = createSlice({
  name: 'chairs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      /*
       * Create
       */
      .addCase(chairCreateThunk.fulfilled, (state: StateEntities<Chair>, { payload }) => {
        const chair = payload as Chair;
        state.entities.push(chair);
        state.status = 'success';
      })
      .addCase(chairCreateThunk.pending, (state: StateEntities<Chair>) => {
        state.action = 'create';
        state.error = null;
        state.status = 'pending';
      })
      .addCase(chairCreateThunk.rejected, (state: StateEntities<Chair>, { payload }) => {
        state.error = payload as string;
        state.status = 'error';
      })

      /*
       * Setup
       */
      .addCase(setupLoadThunk.fulfilled, (state: StateEntities<Chair>, { payload }) => {
        const { chairs } = payload as Setup;
        state.entities = chairs;
        state.status = 'success';
      })
      .addCase(setupLoadThunk.pending, (state: StateEntities<Chair>) => {
        state.action = 'load';
        state.entities = [];
        state.error = null;
        state.status = 'pending';
      })
      .addCase(setupLoadThunk.rejected, (state: StateEntities<Chair>, { payload }) => {
        state.error = payload as string;
        state.status = 'error';
      })

      /*
       * Update
       */
      .addCase(chairUpdateThunk.fulfilled, (state: StateEntities<Chair>, { payload }) => {
        const chair = payload as Chair;

        const index = state.entities.findIndex((c) => c.id === chair.id);

        if (index > -1) {
          state.entities[index] = chair;
        } else {
          state.entities.push(chair);
        }

        state.status = 'success';
      })
      .addCase(chairUpdateThunk.pending, (state: StateEntities<Chair>) => {
        state.action = 'update';
        state.error = null;
        state.status = 'pending';
      })
      .addCase(chairUpdateThunk.rejected, (state: StateEntities<Chair>, { payload }) => {
        state.error = payload as string;
        state.status = 'error';
      });
  },
});
