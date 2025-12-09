// rnfe

import { Button } from '@/components/Button';
import { counterReducer, initialState } from '@/hooks/counterReducer';
import React, { useReducer } from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  // urds
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <View>
      <Button title="Arttır" onPress={() => dispatch({ type: 'INCREMENT' })} />
      <Button
        title="5'er Arttir"
        onPress={() => dispatch({ type: 'INCREMENT_BY_VALUE', payload: 5 })}
      />
      <Text>{state.count}</Text>
    </View>
  );
};

export default Index;
