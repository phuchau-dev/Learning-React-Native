import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Props } from './types';
import TextComponent from '../TextComponent';
import { globalStyles } from '../../styles/globalStyles';
import { COLORS } from '../../constants/colors';

const TagComponent = ({
  text,
  tagStyles,
  textStyles,
  onPress,
  color, 
}: Props) => {
  return (
    <TouchableOpacity
    disabled={!onPress}
      onPress={onPress}
      style={[
        globalStyles.tag, 
        tagStyles, 
        { backgroundColor: color ?? COLORS.BLUE } 
      ]}
    >
      <TextComponent text={text} styles={textStyles} />
    </TouchableOpacity>
  );
};

export default TagComponent;
