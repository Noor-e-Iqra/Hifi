import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import images from '../../../assets/images';
import {CustomButton} from '../../components/customButton';
import routes from '../../navigation/routes';
import {COLORS, FONTS, SIZES} from '../../theme';

export const Welcome = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <ImageBackground source={images.bg} style={styles.container}>
      <View style={styles.row}>
        {/* login btn */}
        <CustomButton
          text={'Login'}
          btnStyle={{width: '48%'}}
          onPress={() => navigation.navigate(routes.sign_in)}
        />
        {/* sign up btn */}
        <CustomButton
          text={'Sign Up'}
          onPress={() => navigation.navigate(routes.sign_up)}
          btnStyle={{
            width: '48%',
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: COLORS.primary,
          }}
        />
      </View>
      {/* skip */}
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.dasboard)}
        activeOpacity={0.5}
        style={styles.skip_con}>
        <Text style={styles.skip}>Skip</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  carousel: {
    alignItems: 'center',
  },
  slide: {
    width: SIZES.width,
    height: SIZES.height * 0.7,
    justifyContent: 'flex-end',
    paddingBottom: 80,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
  },
  title: {
    ...FONTS.bold,
    color: COLORS.white,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: -10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
    backgroundColor: COLORS.white,
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2,
    borderWidth: 1,
    backgroundColor: undefined,
    borderColor: COLORS.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  skip: {
    ...FONTS.medium,
    fontSize: 16,
  },
  skip_con: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    padding: 5,
  },
});
