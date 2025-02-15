import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Props } from './types';
import { globalStyles } from '../../styles/globalStyles';

const RowComponent = ({ children, justify, onPress, style }: Props) => {
  const localStyle = [
    globalStyles.row,
    { justifyContent: justify ?? 'center' },
    style
  ];

  return onPress ? (
    <TouchableOpacity style={localStyle} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={localStyle}>{children}</View>
  );
};

export default RowComponent;
