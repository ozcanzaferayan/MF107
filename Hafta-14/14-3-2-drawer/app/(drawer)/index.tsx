import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const index = () => {
  return (
    <View>
      <Link href={'/yes-no-modal'}>Silmek istediğinize emin </Link>
    </View>
  );
};

export default index;
