// rnfe

import { Button } from '@/components/Button';
import React, { useReducer } from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  const initialState = { count: 42 };

  const reducerMetodu = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerMetodu, initialState);
  // [1,2,3].reduce((toplam, sayi)=> toplam + sayi, 0)

  return (
    <View>
      <Text>{state.count}</Text>

      <Button title="Arttır" onPress={() => dispatch({ type: 'INCREMENT' })} />
    </View>
  );
};

export default Index;
