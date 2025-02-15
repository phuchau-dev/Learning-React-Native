import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  children: ReactNode;
  styles?:StyleProp<ViewStyle>;
  bgColor?:string;
  
}
