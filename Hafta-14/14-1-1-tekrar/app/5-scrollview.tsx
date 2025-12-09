// rnfe

import React from 'react';
import { Image, ScrollView, Text } from 'react-native';

const Index = () => {
  return (
    <ScrollView>
      <Image source={require('@/assets/cat.jpg')} style={{ width: '100%', height: 200 }} />
      <Text className="text-3xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum blanditiis sequi provident!
        Perspiciatis inventore aperiam placeat, est molestiae tempore, maiores eos cum minima
        libero, ea sit necessitatibus amet corporis! Ut quos accusamus odio autem repellat veritatis
        corrupti, error vel aut consequatur culpa nulla molestias vitae! Reiciendis id animi hic
        nihil distinctio assumenda, beatae exercitationem dolores totam nam nulla expedita
        accusantium quas, consequatur tempora repudiandae nobis nemo ab quibusdam! Ea iste neque
        molestiae vero! Labore numquam dolore, delectus nulla animi necessitatibus et architecto
        enim recusandae tempora fugiat maxime aliquam dolor ab. Voluptatum cum repellat impedit
        magnam nesciunt. Possimus eligendi ab atque.
      </Text>
    </ScrollView>
  );
};

export default Index;
