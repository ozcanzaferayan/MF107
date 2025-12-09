import ExpenseIncomeButtons from '@/components/ExpenseIncomeButtons';
import MonthlyBudgetCard from '@/components/MonthlyBudgetCard';
import SavingCard from '@/components/SavingCard';
import TopSpendingCard from '@/components/TopSpendingCard';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const Home = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // TODO: API çağrısı yapılır ve para miktarı çekilir
    navigation.setOptions({
      title: 'Today: $180.75',
      tabBarLabel: 'Home',
      headerLeft: () => (
        <Ionicons name="menu-outline" size={24} color="black" style={{ marginLeft: 16 }} />
      ),
      headerRight: () => <Text className="mr-4">Upgrade</Text>,
    });
  }, []);

  return (
    <View className="flex-1 gap-4 bg-white p-4">
      <ExpenseIncomeButtons />
      <SavingCard />
      <TopSpendingCard />
      <MonthlyBudgetCard />
    </View>
  );
};

export default Home;
