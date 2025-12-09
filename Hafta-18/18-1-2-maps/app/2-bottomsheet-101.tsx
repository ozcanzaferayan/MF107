// rnfe
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React from 'react';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Index = () => {
  return (
    <GestureHandlerRootView>
      <BottomSheet>
        <BottomSheetView className="h-96">
          <Text>Merhaba Dünya</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default Index;
