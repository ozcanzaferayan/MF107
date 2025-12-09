import { authReducer } from '@/slices/authSlice';
import { counterReducer } from '@/slices/counterSlice';
import { themeReducer } from '@/slices/themeSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

// combine: birleştirmek demek
const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  theme: themeReducer,
});

// Hafızaya yazması için gereken ayarlar
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['counter', 'auth'], // persist edilecek slice'lar
};

// PersistReducer: config ve reducer'ı alıp birleştirir
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // Hata vermemesi için ignore ediyoruz
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore edilen action'lar
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// persistör
export const persistor = persistStore(store);

// Redux'ın typescript ile uyumlu çalışması için type tanımlanır
//   Ezberlemenize gerek yok. Reduxjs.org'daki TypeScript
//   referansından elde edebilirsiniz

// Store'un içindeki tutulan state'e type verilmiş olur.
export type RootState = ReturnType<typeof store.getState>;
// Store'a giden metotları tiplendirmek içindir
export type AppDispatch = typeof store.dispatch;
// useDispatch hookunda tip olmadığı için, AppDispatch'i ekleyip
//   yeni bir hook üretiyoruz
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
