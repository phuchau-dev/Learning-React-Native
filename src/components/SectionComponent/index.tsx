import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { Props } from './types';
import { globalStyles } from '../../styles/globalStyles';

const SectionComponent = (props: Props) => {
  const { children } = props;

  return <View style={[globalStyles.section]}>{children}</View>;
};

export default SectionComponent;
