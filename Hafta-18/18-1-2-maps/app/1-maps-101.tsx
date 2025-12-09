// rnfe

import { AppleMaps, CameraPosition, GoogleMaps } from 'expo-maps';
import React, { useRef } from 'react';
import { Platform } from 'react-native';

const Index = () => {
  // Harita objesini elimizde tutabilmemiz için
  const mapRef = useRef<AppleMaps.MapView | GoogleMaps.MapView>(null);

  // Platforma göre harita componenti seçilir
  const MapView = Platform.OS === 'ios' ? AppleMaps.View : GoogleMaps.View;
  // Harita acildiğında enlem/boylam bilgisine zoom etsin
  const defaultCamera: CameraPosition = {
    coordinates: {
      latitude: 41.0082,
      longitude: 28.9784,
    },
    zoom: 14,
  };
  return (
    <MapView
      // @ts-ignore
      ref={mapRef}
      onMarkerClick={(marker) => {
        console.log(marker.title + ' Hoşgeldiniz');

        mapRef.current?.setCameraPosition({
          coordinates: {
            latitude: marker.coordinates?.latitude,
            longitude: marker.coordinates?.longitude,
          },
          zoom: 17,
          duration: 5000,
        });
      }}
      markers={[
        {
          id: '1',
          title: 'Kapalıçarşı',
          coordinates: {
            latitude: 41.0075019,
            longitude: 28.9731842,
          },
          tintColor: 'blue',
        },
      ]}
      cameraPosition={defaultCamera}
      style={{ flex: 1 }}></MapView>
  );
};

export default Index;
