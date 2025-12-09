// slice: dilim demek
// Redux Toolkit ile gelen yeni bir terim
// SLICE = ACTION + REDUCER
// Action: "INCREMENT", "DECREMENT", "RESET", "INCREMENT_BY_VALUE"
// Reducer: increment metodu, decrement metodu vb.
// createSlice: store'dan bir dilim oluşturur

import { RootState, useAppDispatch } from '@/store/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: 'counter', // Otomatik: "COUNTER_INCREMENT", "COUNTER_DECREMENT"
  initialState,
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
export default counterSlice.reducer;
// Hook: Dispatch ve selector'ü birleştirmek için (Kolaylık olsun diye)
export const useCounter = () => {
  const dispatch = useAppDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  return {
    count,
    increment: () => dispatch(increment()),
    incrementByValue: (value: number) => dispatch(incrementByValue(value)),
  };
};
