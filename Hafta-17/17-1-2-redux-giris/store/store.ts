import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import counterReducer from '../slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Redux tiplerini tanımlayalım
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// useDispatch hook'una Appdistpatch type'ını ekleyip yeni hook oluşturur
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
