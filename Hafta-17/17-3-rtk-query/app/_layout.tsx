import { Provider } from 'react-redux';
import '../global.css';

import { store } from '@/store/store';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack />;
    </Provider>
  );
}
