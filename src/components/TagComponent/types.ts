import { StyleProp, ViewStyle,TextStyle } from 'react-native';

export interface Props {
  text:string;
  font?: string;
  color?: string;
  flex?: number;
  tagStyles?: StyleProp<ViewStyle>; 
  textStyles?:StyleProp<TextStyle>;
  onPress?: () => void;
  
}
