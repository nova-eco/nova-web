import { createSlice } from '@reduxjs/toolkit';
import { servicesSliceState as initialState } from '@app/states';
import { serviceCreateThunk, serviceUpdateThunk, setupLoadThunk } from '@app/thunks';
import { Service, Setup, StateEntities } from '@app/types';

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      /*
       * Create
       */
      .addCase(
        serviceCreateThunk.fulfilled,
        (state: StateEntities<Service>, { payload }) => {
          const service = payload as Service;
          state.entities.push(service);
          state.status = 'success';
        },
      )
      .addCase(serviceCreateThunk.pending, (state: StateEntities<Service>) => {
        state.action = 'create';
        state.error = null;
        state.status = 'pending';
      })
      .addCase(
        serviceCreateThunk.rejected,
        (state: StateEntities<Service>, { payload }) => {
          state.error = payload as string;
          state.status = 'error';
        },
      )

      /*
       * Setup
       */
      .addCase(setupLoadThunk.fulfilled, (state: StateEntities<Service>, { payload }) => {
        const { services } = payload as Setup;
        state.entities = services;
        state.status = 'success';
      })
      .addCase(setupLoadThunk.pending, (state: StateEntities<Service>) => {
        state.action = 'load';
        state.entities = [];
        state.error = null;
        state.status = 'pending';
      })
      .addCase(setupLoadThunk.rejected, (state: StateEntities<Service>, { payload }) => {
        state.error = payload as string;
        state.status = 'error';
      })

      /*
       * Update
       */
      .addCase(
        serviceUpdateThunk.fulfilled,
        (state: StateEntities<Service>, { payload }) => {
          const service = payload as Service;
          const index = state.entities.findIndex((c) => c.id === service.id);

          if (index > -1) {
            state.entities[index] = service;
          } else {
            state.entities.push(service);
          }

          state.status = 'success';
        },
      )
      .addCase(serviceUpdateThunk.pending, (state: StateEntities<Service>) => {
        state.action = 'update';
        state.error = null;
        state.status = 'pending';
      })
      .addCase(
        serviceUpdateThunk.rejected,
        (state: StateEntities<Service>, { payload }) => {
          state.error = payload as string;
          state.status = 'error';
        },
      );
  },
});
