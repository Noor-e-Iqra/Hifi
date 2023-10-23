import {StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignSelf: 'flex-start',
    width: '100%',
  },
  input_con: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    marginTop: 8,
    borderColor: COLORS.light_gray,
  },
  label: {
    ...FONTS.medium,
    fontSize: 14,
    color: COLORS.gray2,
  },
  hint: {
    ...FONTS.regular,
    fontSize: 8,
    color: COLORS.gray2,
    marginTop: 2,
  },
  error: {
    ...FONTS.regular,
    fontSize: 12,
    color: 'red',
    marginVertical: 5,
  },
  input: {
    flex: 1,
    ...FONTS.regular,
    fontSize: 17,
  },
});
