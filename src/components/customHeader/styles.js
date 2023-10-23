import {Platform, StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginHorizontal: 5,
    alignItems: 'center',
    marginTop: Platform.OS == 'android' ? 40 : 50,
  },
  text: {
    ...FONTS.raleway_bold,
    fontSize: 14,
  },
});
