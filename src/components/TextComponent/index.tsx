import { Text } from 'react-native';
import React from 'react';
import { Props } from './types';
import { globalStyles } from '../../styles/globalStyles';
import { FONT_FAMILIES } from '../../constants/fontFamilies';
import { COLORS } from '../../constants/colors';

const TextComponent = ({ text, size, font, color, flex, style }: Props) => {
  return (
    <Text
      style={[
        globalStyles.text,
        style, // Cho phép ghi đè từ bên ngoài
        {
          flex: flex ?? 1,
          fontFamily: font ?? FONT_FAMILIES.REGULAR,
          fontSize: size ?? 14,
          color: color ?? COLORS.DESC,
        },
      ]}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
