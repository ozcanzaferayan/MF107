// slice: dilim demek
// Store'un bir dilimi gibi düşünebilirsiniz.
// Redux Toolkit ile gelen yeni bir terim
// Slice: ACTION + REDUCER
// Ayrı ayrı dosya üretme karmaşasını engelliyor
// Redux'ın içindeki createSlice metodu ile oluşturulur

import { RootState, useAppDispatch } from '@/store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

// 1. Başlangıç state'i oluştur
// 2. slice üret createSlice ile
// 2.1. slice'a name ver: counter
// 2.2. initialState'i ata
// 2.3. reducers kısmına metotlar ekle
// 3. Action'ları export et
// 4. Reducer'ları export et
// 5. Hook oluştur
const initialState = { count: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
  },
});

// Actions
export const { increment, decrement, incrementByValue } = counterSlice.actions;
// Reducers
export const counterReducer = counterSlice.reducer;
// Hook (opsiyonel)
export const useCounter = () => {
  const dispatch = useAppDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  return {
    count: count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByValue: (value: number) => dispatch(incrementByValue(value)),
  };
};
