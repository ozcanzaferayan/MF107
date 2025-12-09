import { RootState, useAppDispatch } from '@/store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState: {
  theme: 'light' | 'dark';
} = { theme: 'light' };

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
  },
});

// Actions
export const { setTheme } = themeSlice.actions;

// Reducers
export const themeReducer = themeSlice.reducer;

// Hook (opsiyonel)
export const useTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return {
    theme: theme,
    setTheme: (theme: 'dark' | 'light') => dispatch(setTheme(theme)),
  };
};
