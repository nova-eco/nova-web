import { configureStore } from '@reduxjs/toolkit';
import {
  authSlice,
  bookingPathwayRoutesSlice,
  bookingPathwaySlice,
  setupSlice,
  userInterfaceSlice,
} from '@app/slices';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    bookingPathway: bookingPathwaySlice.reducer,
    bookingPathwayRoutes: bookingPathwayRoutesSlice.reducer,
    setup: setupSlice.reducer,
    userInterface: userInterfaceSlice.reducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
