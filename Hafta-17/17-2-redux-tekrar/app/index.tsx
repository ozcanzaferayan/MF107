// rnfe

import { Button } from '@/components/Button';
import { useTheme } from '@/slices/themeSlice';
import React from 'react';
import { View } from 'react-native';

const Index = () => {
  const { theme, setTheme } = useTheme();

  const handlePress = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <View className="flex flex-1" style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>
      <Button title="Tema değiştir" onPress={handlePress} />
    </View>
  );
};

export default Index;
