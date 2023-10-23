import React, {useState} from 'react';
import {COLORS, FONTS} from '../../theme';
import {IconButton} from 'react-native-paper';
import {Input} from '../input';
import icons from '../../../assets/icons';

export const PasswordInput = ({label,...rest}) => {
  const [secure, setSecure] = useState(true);
  return (
    <Input
      secureTextEntry={secure}
      icon={
        <IconButton
          icon={secure ? 'eye-off' : 'eye'}
          iconColor={COLORS.gray}
          size={20}
          onPress={() => setSecure(!secure)}
        />
      }
      {...rest}
    />
  );
};
