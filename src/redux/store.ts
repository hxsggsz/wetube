import { configureStore } from "@reduxjs/toolkit";
import sliceAuthModal from './authModal';

export const store = configureStore({
  reducer: {
    sliceAuthModal
  }
})

export type RootState = ReturnType<typeof store.getState>