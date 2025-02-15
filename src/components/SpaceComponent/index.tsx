import { View, Text } from 'react-native';
import React from 'react';
import { Props } from './types';
const SpaceComponent = (props: Props) => {
  const { height, width } = props;
  return <View style={{ width, height }}></View>;
};

export default SpaceComponent;
