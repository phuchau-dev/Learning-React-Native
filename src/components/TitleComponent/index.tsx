
import { View } from 'react-native';
import React from 'react';
import { Props } from './types';
import { FONT_FAMILIES } from '../../constants/fontFamilies';
import TextComponent from '../TextComponent'; 

const TitleComponent = (props: Props) => {
  const { text, size, font, color } = props;

  return (
    <View>
      <TextComponent
        text={text}
        font={font ?? FONT_FAMILIES.SEMI_BOLD}
        size={size ?? 20}
        color={color}
      />
    </View>
  );
};

export default TitleComponent;
