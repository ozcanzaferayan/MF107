// rnfe

import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { AppleMaps, CameraPosition, GoogleMaps } from 'expo-maps';
import React, { useRef, useState } from 'react';
import { Image, Platform, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Index = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = [100, '25%', '75%', '100%'];
  // usss
  const [placeName, setPlaceName] = useState('');
  const [placeImage, setPlaceImage] = useState('');

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
    <GestureHandlerRootView className="flex-1">
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

          setPlaceName(marker.title ?? '');
          setPlaceImage(
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Istanbul_asv2021-11_img41_Grand_Bazaar.jpg/1280px-Istanbul_asv2021-11_img41_Grand_Bazaar.jpg'
          );

          sheetRef.current?.snapToIndex(1);
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
      <BottomSheet index={-1} ref={sheetRef} enablePanDownToClose={true} snapPoints={snapPoints}>
        <BottomSheetView className="gap-4 p-4">
          <Text className="text-3xl font-bold">{placeName}</Text>
          <Image source={{ uri: placeImage }} className="h-96 w-full" />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default Index;
