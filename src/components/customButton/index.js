import React from 'react';
import {
  TouchableOpacity,
  Text,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../theme';

export const CustomButton = ({
  text,
  onPress,
  disabled,
  btnStyle,
  loading,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      disabled={disabled}
      style={[styles.bg, btnStyle]}>
      {loading ? (
        <ActivityIndicator color={COLORS.white} />
      ) : (
        <Text style={[styles.text, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
