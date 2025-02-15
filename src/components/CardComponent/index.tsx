import { View, Text } from 'react-native';
import React from 'react';
import { Props } from './types';
import { globalStyles } from '../../styles/globalStyles';
const CardComponent = ({
  children,
  bgColor,
  styles,
}: Props) => {
  return (
    <View
      style={[
        globalStyles.inputContainer,
        { padding: 12 },
        styles,
      ]}
    >
      {children}
    </View>
  );
};

export default CardComponent;
