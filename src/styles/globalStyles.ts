import { Platform, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONT_FAMILIES } from '../constants/fontFamilies';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG,
    padding: 20,
    paddingTop: Platform.select({ ios: 42, android: 32 }), // Dễ đọc hơn
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center', // Đã căn giữa theo chiều dọc
    justifyContent: 'center', // Nếu muốn căn giữa theo chiều ngang
  },
  text: {
    fontSize: 14,
    color: COLORS.TEXT,
    fontFamily: FONT_FAMILIES.SEMI_BOLD,
  },
  section: {
    marginBottom: 16,
  },
  inputContainer:{
    backgroundColor:COLORS.GRAY,
    borderRadius:12,
    paddingHorizontal:Platform.select({ ios: 12, android: 10 }),
    paddingVertical:Platform.select({ ios: 12, android: 10 }),
    alignItems: 'center',
    
  },
});
