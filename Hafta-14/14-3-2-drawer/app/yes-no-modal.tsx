import { Button } from '@/components/Button';
import React from 'react';
import { Text, View } from 'react-native';

const YesNoModal = () => {
  return (
    <View>
      <Text>Silmek istediğinize emin misiniz</Text>
      <Button title="Evet" />
      <Button title="Hayır" />
    </View>
  );
};

export default YesNoModal;
