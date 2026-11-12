import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import estimatorReducer from './estimatorSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    estimator: estimatorReducer
  }
});

