// rnfe
import { Button } from '@/components/Button';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Index = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = [100, '25%', '75%', '100%'];

  const handlePress = () => {
    sheetRef.current?.snapToIndex(1);
  };
  return (
    <GestureHandlerRootView>
      <Button title="Aç" onPress={handlePress} />
      <BottomSheet index={-1} ref={sheetRef} enablePanDownToClose={true} snapPoints={snapPoints}>
        <BottomSheetView>
          <Text>Merhaba Dünya</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default Index;
