// rnfe
import { Button } from '@/components/Button';
import React from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const Index = () => {
  // sharedValue: Hem JS hem de Native tarafta tanımlanan değer
  // state gibi düşünün ama animasyon için olan versiyonu
  // Butona basıldığında pozisyon.value = olarak degiştircez
  const pozisyon = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: pozisyon.value,
      },
    ],
  }));

  const handlePress = () => {
    // 1. Anlık ilerlemesi için
    // pozisyon.value += 50;
    // 2. Zamanla ilerlemesi için withTiming kullanırız. Default 300ms
    // pozisyon.value = withTiming(pozisyon.value + 50);
    // 3. Duration verebiliriz: 200 ms versek
    // pozisyon.value = withTiming(pozisyon.value + 50, { duration: 200 });
    // 4. Yaylandırarak ilerlemek için withSpring kullanırız
    // pozisyon.value = withSpring(pozisyon.value + 100);
    // 5. Damping verebiliyoruz. Arttıkça daha az yaylanır
    pozisyon.value = withSpring(pozisyon.value + 100, { damping: 50 });
  };
  return (
    <View>
      <Button title="Topu ilerlet" onPress={handlePress} />
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'dodgerblue',
            borderRadius: 100,
            marginTop: 16,
          },
          animatedStyles,
        ]}></Animated.View>
    </View>
  );
};

export default Index;
