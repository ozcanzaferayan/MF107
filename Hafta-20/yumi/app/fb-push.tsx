// import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
// import React, { useEffect, useState } from 'react';
// import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';

// const PushNotificationScreen = () => {
//   const [permission, setPermission] = useState<string>('Unknown');
//   const [token, setToken] = useState<string | null>(null);
//   const [lastMessage, setLastMessage] = useState<FirebaseMessagingTypes.RemoteMessage | null>(null);

//   // 🔐 Permission request
//   const requestPermission = async () => {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     setPermission(enabled ? 'Granted' : 'Denied');

//     if (!enabled) {
//       Alert.alert('Permission denied', 'Push notifications are disabled');
//     }
//   };

//   // 🔑 Get FCM token
//   const getToken = async () => {
//     const fcmToken = await messaging().getToken();
//     setToken(fcmToken);
//     console.log('FCM TOKEN:', fcmToken);
//   };

//   useEffect(() => {
//     // App foreground
//     const unsubscribeOnMessage = messaging().onMessage(async (remoteMessage) => {
//       setLastMessage(remoteMessage);
//       console.log('Foreground push:', remoteMessage);
//     });

//     // App background → opened
//     const unsubscribeOnOpen = messaging().onNotificationOpenedApp((remoteMessage) => {
//       console.log('Opened from background:', remoteMessage);
//     });

//     // App quit → opened
//     messaging()
//       .getInitialNotification()
//       .then((remoteMessage) => {
//         if (remoteMessage) {
//           console.log('Opened from quit state:', remoteMessage);
//         }
//       });

//     return () => {
//       unsubscribeOnMessage();
//       unsubscribeOnOpen();
//     };
//   }, []);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>📲 Push Notification Test (iOS)</Text>

//       <View style={styles.card}>
//         <Text style={styles.label}>Permission:</Text>
//         <Text>{permission}</Text>
//         <Button title="Request Permission" onPress={requestPermission} />
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.label}>FCM Token:</Text>
//         <Text selectable style={styles.token}>
//           {token || 'Not fetched'}
//         </Text>
//         <Button title="Get FCM Token" onPress={getToken} />
//       </View>

//       <View style={styles.card}>
//         <Text style={styles.label}>Last Push Message:</Text>
//         <Text style={styles.message}>
//           {lastMessage ? JSON.stringify(lastMessage.notification, null, 2) : 'No message yet'}
//         </Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default PushNotificationScreen;

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginBottom: 16,
//   },
//   card: {
//     padding: 12,
//     marginBottom: 16,
//     borderRadius: 8,
//     backgroundColor: '#f2f2f2',
//   },
//   label: {
//     fontWeight: '600',
//     marginBottom: 4,
//   },
//   token: {
//     fontSize: 12,
//     marginBottom: 8,
//   },
//   message: {
//     fontSize: 12,
//     color: '#333',
//   },
// });
