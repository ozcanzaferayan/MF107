import { foodApi } from '@/slices/foodApi';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// 1. store oluşturma
export const store = configureStore({
  reducer: {
    [foodApi.reducerPath]: foodApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(foodApi.middleware),
});

// 2. Typescript için gerekenler
// Ezberlemenize gerek yok redux toolkit sitesinde var
// https://redux-toolkit.js.org/usage/usage-with-typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
