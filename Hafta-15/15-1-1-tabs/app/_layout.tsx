import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../global.css';

import { Stack } from 'expo-router';
import { useState } from 'react';

export default function Layout() {
  const [queryClient] = useState(new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            title: 'Anasayfa',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="products/[id]/index"
          options={{
            title: 'Ürün detayı',
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
