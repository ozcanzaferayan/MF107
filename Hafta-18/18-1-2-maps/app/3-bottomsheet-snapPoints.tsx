// rnfe
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React from 'react';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Index = () => {
  const snapPoints = ['25%', '75%'];
  return (
    <GestureHandlerRootView>
      <BottomSheet snapPoints={snapPoints}>
        <BottomSheetView>
          <Text>Merhaba Dünya</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default Index;
