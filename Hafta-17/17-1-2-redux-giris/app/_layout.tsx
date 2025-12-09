import { store } from '@/store/store';
import '../global.css';

import { Stack } from 'expo-router';
import { Provider } from 'react-redux';

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
}
