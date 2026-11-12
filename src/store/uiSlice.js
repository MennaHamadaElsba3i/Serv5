import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'ar',
  bgMode: 'drape', // 'drape' (Spectral Drape) or 'shell' (Astral Shell)
  pricingCycle: 'monthly', // 'monthly' or 'annual'
  activeServiceCategory: 'all',
  consultationModalOpen: false,
  selectedPackageForModal: null,
  scrollSpeed: 0
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
    },
    toggleLanguage: (state) => {
      state.lang = state.lang === 'ar' ? 'en' : 'ar';
    },
    setBgMode: (state, action) => {
      state.bgMode = action.payload;
    },
    setPricingCycle: (state, action) => {
      state.pricingCycle = action.payload;
    },
    setActiveServiceCategory: (state, action) => {
      state.activeServiceCategory = action.payload;
    },
    openConsultationModal: (state, action) => {
      state.consultationModalOpen = true;
      state.selectedPackageForModal = action.payload || null;
    },
    closeConsultationModal: (state) => {
      state.consultationModalOpen = false;
      state.selectedPackageForModal = null;
    },
    setScrollSpeed: (state, action) => {
      state.scrollSpeed = action.payload;
    }
  }
});

export const {
  setLanguage,
  toggleLanguage,
  setBgMode,
  setPricingCycle,
  setActiveServiceCategory,
  openConsultationModal,
  closeConsultationModal,
  setScrollSpeed
} = uiSlice.actions;

export default uiSlice.reducer;

