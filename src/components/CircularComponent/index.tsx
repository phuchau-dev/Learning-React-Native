import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Props } from './types';
import { COLORS } from '../../constants/colors';
import { FONT_FAMILIES } from '../../constants/fontFamilies';

const CircularComponent: React.FC<Props> = (props) => {
  const { color, value, maxValue,radius } = props;

  return (
    <CircularProgress
      value={value}
      title={`${value}%`}
      showProgressValue={false}
      maxValue={maxValue}
      activeStrokeColor={color ?? COLORS.BLUE}
      inActiveStrokeColor={'#3C444A'}
      titleColor={COLORS.TEXT}
      titleFontSize={32}
      titleStyle={{fontFamily:FONT_FAMILIES.MEDIUM}}
    />
  );
};

export default CircularComponent;
