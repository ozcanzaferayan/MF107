import React from 'react';
import { View } from 'react-native';
import { Button } from './Button';

const ExpenseIncomeButtons = () => {
  return (
    <View className="flex-row">
      <Button title="Expenses" className="flex-1 rounded-lg bg-purple-700" />
      <Button title="Income" className="flex-1 rounded-lg bg-purple-100" />
    </View>
  );
};

export default ExpenseIncomeButtons;
