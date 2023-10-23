import {StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  bg: {
    marginTop: 27,
    borderRadius: 12,
    height: 50,
    width: '100%',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    flexDirection:'row'
  },
  text: {
    ...FONTS.raleway_bold,
  },
});
