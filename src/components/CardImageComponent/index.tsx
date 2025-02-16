import { View, ImageBackground } from 'react-native';
import React from 'react';

import { CardImageProps } from './types';
import { globalStyles } from '../../styles/globalStyles';

const CardImageConponent: React.FC<CardImageProps> = ({ children, color }) => {
  return (
    <ImageBackground
    source={require('../../../assets/images/card-bg.png')}
      imageStyle={{ borderRadius: 12 }}
      style={globalStyles.card}
    >
      <View
        style={{
          backgroundColor: color ?? 'rgba(113, 77, 217, 0.9)',
          borderRadius: 12,
          flex: 1,
          padding: 12,
        }}
      >
        {children}
      </View>
    </ImageBackground>
  );
};

export default CardImageConponent;
