// rnfe
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const Index = () => {
  // usss
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  async function getCurrentLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('izin verilmedi');
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }

  console.log(location);
  return (
    <View>
      <Text>Enlem: {location?.coords.latitude}</Text>
      <Text>Boylam: {location?.coords.longitude}</Text>
    </View>
  );
};

export default Index;
