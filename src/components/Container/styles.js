import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../theme';

export const styles = StyleSheet.create({
  padding: {
    marginTop: 50,
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding,
    alignItems: 'center',
  },
  container: {
   // height: SIZES.height,
    width: SIZES.width,
    flex:1,
    backgroundColor: COLORS.white,
  },
  color:{
    backgroundColor: COLORS.white
  }
});
