import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="yes-no-modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}
