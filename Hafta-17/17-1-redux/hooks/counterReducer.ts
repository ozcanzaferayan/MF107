import { useReducer } from 'react';

export type State = {
  count: number;
};

export type Action =
  | {
      type: 'INCREMENT';
    }
  | {
      type: 'DECREMENT';
    }
  | {
      type: 'RESET';
    }
  | {
      type: 'INCREMENT_BY_VALUE';
      payload: number;
    };

export const initialState: State = { count: 0 };

export const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return initialState;
    case 'INCREMENT_BY_VALUE':
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

export const useCounter = (initialValue = 0) => {
  // urds
  const [state, dispatch] = useReducer(counterReducer, {
    count: initialValue,
  });

  return {
    count: state.count,
    increment: () => dispatch({ type: 'INCREMENT' }),
    incrementByValue: (value: number) => dispatch({ type: 'INCREMENT_BY_VALUE', payload: value }),
    ekranaYaz: (text: string) => console.log(text),
  };
};
