// rnfe

import HeroCard from '@/components/HeroCard';
import PricesContainer from '@/components/PricesContainer';
import SearchInput from '@/components/SearchInput';
import ServicesContainer from '@/components/ServicesContainer';
import React from 'react';
import { ScrollView } from 'react-native';
const Index = () => {
  return (
    <ScrollView className="p-4">
      <SearchInput />
      <HeroCard />
      <ServicesContainer />
      <PricesContainer />
    </ScrollView>
  );
};

export default Index;
