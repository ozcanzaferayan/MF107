import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
  id: number;
  name: string;
  email: string;
};

type AuthState = {
  token: string | null; // Parola yerine geçer
  isAuthenticated: boolean; // Kullanıcı giriş yapmış mı
  user: User | null;
};

// 1. initialState tanımlama
const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

// 2. createSlice ile slice oluştur
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Kullanıcı login olduktan sonra Store'a yazmak için
    //   fetch isteği atıp username,password gönderip API'den token,user geldi varsayalım
    login: (state, action: PayloadAction<{ token: string; user: User }>) => {
      console.log(action.payload.user);
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
  },
});

// Actions
export const { login, logout } = authSlice.actions;
// Reducer
export const authReducer = authSlice.reducer;
