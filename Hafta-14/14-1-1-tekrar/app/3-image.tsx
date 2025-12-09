// rnfe

import React from 'react';
import { Image, View } from 'react-native';

const Index = () => {
  const catLocal = '@/assets/cat.jpg';
  const catUrl =
    'https://png.pngtree.com/png-clipart/20230512/original/pngtree-isolated-cat-on-white-background-png-image_9158356.png';
  const catBase64 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';
  return (
    <View>
      <Image source={require(catLocal)} style={{ width: 100, height: 100 }} />
      <Image source={{ uri: catUrl }} style={{ width: 100, height: 100 }} />
      <Image source={{ uri: catBase64 }} style={{ width: 100, height: 100 }} />
    </View>
  );
};

export default Index;
