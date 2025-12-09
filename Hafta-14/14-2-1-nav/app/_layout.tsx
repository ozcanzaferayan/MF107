import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Anasayfa' }} />
      <Stack.Screen name="products/index" options={{ title: 'Ürünler' }} />
      <Stack.Screen name="products/add/index" options={{ title: 'Ürün Ekle' }} />
      <Stack.Screen name="products/[id]/index" options={{ title: 'Detay' }} />
      <Stack.Screen name="products/[id]/edit" options={{ title: 'Düzenle' }} />
      <Stack.Screen name="products/[id]/delete" options={{ title: 'Sil' }} />
    </Stack>
  );
}
