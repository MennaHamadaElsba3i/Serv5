import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  budget: 75000,
  platformTrack: 'saas' // 'saas', 'app', 'store', 'growth'
};

export const estimatorSlice = createSlice({
  name: 'estimator',
  initialState,
  reducers: {
    setBudget: (state, action) => {
      state.budget = action.payload;
    },
    setPlatformTrack: (state, action) => {
      state.platformTrack = action.payload;
    }
  }
});

export const { setBudget, setPlatformTrack } = estimatorSlice.actions;

export default estimatorSlice.reducer;

