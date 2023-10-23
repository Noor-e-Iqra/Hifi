import {StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  bg: {
    marginTop: 27,
    borderRadius: 15,
    height: 50,
    backgroundColor: COLORS.primary,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...FONTS.exo_semibold,
    fontSize: 15,
    color: COLORS.white,
  },
});
