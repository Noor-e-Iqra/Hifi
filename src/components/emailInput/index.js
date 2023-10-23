import React from 'react';
import {Input} from '../input';
import icons from '../../../assets/icons';
import {Image} from 'react-native';

export const EmailInput = ({...rest}) => {
  return (
    <Input
      keyboardType="email-address"
      icon={
        <Image
          source={icons.verified}
          style={{height: 20, width: 20, marginHorizontal: 13}}
        />
      }
      {...rest}
    />
  );
};
