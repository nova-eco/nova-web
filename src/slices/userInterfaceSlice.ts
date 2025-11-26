import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userInterfaceState as initialState } from '@app/states';
import type { UserInterfaceTheme } from '@app/types';

export const userInterfaceSlice = createSlice({
  name: 'userInterface',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<UserInterfaceTheme>) => {
      return {
        ...state,
        theme: action.payload,
      };
    },
  },
});
