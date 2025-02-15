import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface Props {
  children: ReactNode;
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  onPress?: () => void;
  styles?:StyleProp<ViewStyle>
}
