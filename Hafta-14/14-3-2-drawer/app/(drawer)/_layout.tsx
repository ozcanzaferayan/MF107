import { Drawer } from 'expo-router/drawer';
import { Text } from 'react-native';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
          title: 'Anasayfa',
          drawerIcon: ({ color }) => <Text>🏠</Text>,
        }}
      />
      <Drawer.Screen
        name="likes"
        options={{
          drawerLabel: 'Likes',
          title: 'Beğeniler',
          drawerIcon: ({ color }) => <Text>❤️</Text>,
        }}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: 'Settings',
          title: 'Ayarlar',
          drawerIcon: ({ color }) => <Text>⚙️</Text>,
          drawerItemStyle: { display: 'none' },
        }}
      />
    </Drawer>
  );
}
