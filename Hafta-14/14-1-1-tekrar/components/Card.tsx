import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  iconName: string;
  text: string;
};

const Card = ({ text, iconName }: Props) => {
  return (
    <View className="flex-1 flex-row items-center gap-2 rounded bg-blue-500 p-4">
      <FontAwesome5 name={iconName} size={32} color="white" />
      <Text className="text-xl text-white">{text}</Text>
    </View>
  );
};

export default Card;
