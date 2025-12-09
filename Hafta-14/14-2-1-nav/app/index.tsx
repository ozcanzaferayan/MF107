import { Link } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Index = () => {
  // Link yerine useRouter ile router.navigate de kullanılabilir
  return (
    <View>
      <Link href="/products" asChild>
        <TouchableOpacity className=" bg-blue-500 p-4">
          <Text className="text-white">Productsa git</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Index;
