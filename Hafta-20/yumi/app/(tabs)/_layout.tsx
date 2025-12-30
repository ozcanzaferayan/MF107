import { LinearGradient } from 'expo-linear-gradient';
import { Tabs } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Image, View } from 'react-native';

export default function TabLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#c8dff1',
          borderColor: '#adc3f2',
          borderWidth: 5,
          borderTopWidth: 5,
          borderRadius: 25,
          height: 112,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.1,
          shadowRadius: 10,

          paddingBottom: 0, // Reset default padding
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarShowLabel: true,

        tabBarLabelStyle: {
          bottom: -30,
          fontSize: 18,
          color: '#6e80a8',
          fontFamily: 'Jua_400Regular',
        },
      }}>
      <Tabs.Screen
        name="community"
        options={{
          title: t('tabs.community'),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 8,
              }}>
              <Image
                source={require('../../assets/icons/tab/icon_about.png')}
                style={{
                  width: 64,
                  height: 64,
                  opacity: focused ? 1 : 0.5,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: t('tabs.home'),
          tabBarLabelStyle: {
            bottom: 0,
            fontSize: 18,
            color: '#9a5971',
            fontFamily: 'Jua_400Regular',
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: -20, // Pop up effect
                opacity: focused ? 1 : 1,
              }}>
              <LinearGradient
                // Button Linear Gradient
                colors={['#fbf3dc', '#ffded2', '#fba7b7']}
                style={{
                  width: 112,
                  height: 120,
                  borderRadius: 30,
                  borderColor: '#fba7b7',
                  borderWidth: 3,
                  backgroundColor: focused ? '#FFF0F5' : '#FFF0F5', // Light pink background if focused
                  alignItems: 'center',
                  shadowColor: focused ? '#FF8FAB' : '#FF8FAB',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 8,
                  elevation: focused ? 5 : 0,
                }}>
                <Image
                  source={require('../../assets/icons/tab/icon_home.png')}
                  style={{
                    marginTop: 0,
                    width: 84,
                    height: 84,
                    opacity: 1,
                  }}
                  resizeMode="contain"
                />
              </LinearGradient>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('tabs.settings'),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 8,
              }}>
              <Image
                source={require('../../assets/icons/tab/icon_settings.png')}
                style={{
                  width: 64,
                  height: 64,
                  opacity: focused ? 1 : 0.5,
                }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
