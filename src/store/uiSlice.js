import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('serv5_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }
  return 'light';
};

const initialState = {
  lang: 'ar',
  theme: getInitialTheme(),
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
    setTheme: (state, action) => {
      state.theme = action.payload;
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('serv5_theme', action.payload);
        } catch (e) {
          // ignore
        }
      }
    },
    toggleTheme: (state) => {
      const next = state.theme === 'dark' ? 'light' : 'dark';
      state.theme = next;
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('serv5_theme', next);
        } catch (e) {
          // ignore
        }
      }
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
  setTheme,
  toggleTheme,
  setBgMode,
  setPricingCycle,
  setActiveServiceCategory,
  openConsultationModal,
  closeConsultationModal,
  setScrollSpeed
} = uiSlice.actions;

export default uiSlice.reducer;

