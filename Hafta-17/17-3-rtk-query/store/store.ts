import { counterReducer } from '@/slices/counterSlice';
import { todoApi } from '@/slices/todoApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';
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

// 1. Root reducer oluşturma
//   combineReducers ile configureStore'daki reducer'lar taşınır
const rootReducer = combineReducers({
  [todoApi.reducerPath]: todoApi.reducer,
  counter: counterReducer,
});
// 2. PersistConfig
//   Kalıcı hale getirmek için ilgili ayarlamalar yapılır
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: [],
  // Network cevaplarını asyncstorage'a yazdığında hatalar oluşabiliyor
  //   Bu nedenle query sonuçlarını storage'a yazmak sakıncalı
  //   Onun için blacklist'e ekliyoruz
  blacklist: [todoApi.reducerPath],
};

// 3. Persisted reducer oluşturma
//   rootReducer ile persistConfig birleştirilir
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. store'a persistedReducer eklenir
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Persist özel action'ları ignore etmezsek hata verir
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(todoApi.middleware, logger),
});

// 5. persistor export edilir
export const persistor = persistStore(store);

// 6. Typescript için gerekenler
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
