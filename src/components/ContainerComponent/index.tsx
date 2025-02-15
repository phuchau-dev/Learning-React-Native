import React from 'react';
import { View, Text, ScrollView } from 'react-native'; 
import { ContainerProps } from './types';
import { globalStyles } from '../../styles/globalStyles';

const ContainerComponent: React.FC<ContainerProps> = ({
  title,
  black,
  right,
  children,
}) => {
  return <ScrollView style={[globalStyles.container]}>{children}</ScrollView>;
};

export default ContainerComponent;
