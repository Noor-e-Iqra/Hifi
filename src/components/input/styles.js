import {StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  input_con: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%',
    backgroundColor: COLORS.white,
    height: 50,
    borderRadius: 12,
    paddingLeft: 15,
  },
  error:{
    ...FONTS.regular,
    fontSize: 12,
    color: 'red',
    marginVertical: 5,
  },
  input:{
    flex: 1,
    ...FONTS.regular,
    fontSize: 17,
  }
  
});
