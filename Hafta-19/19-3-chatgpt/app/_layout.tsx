import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  // Parmak hareketlerinin tespit edilebilmesi için GestureHandlerRootView ile sarmala
  // Bir de header gözükmesin diye headerShown:false ekledik
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
