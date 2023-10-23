import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {TextInput} from 'react-native';
import {COLORS, FONTS} from '../../theme';

export const Input = ({label, labelIcon, icon, form, id, ...rest}) => {
  const haserror = form.touched[id] && form.errors[id];

  const handleChange = text => {
    form.setFieldTouched(id, true);
    form.setFieldValue(id, text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.input_con}>
        <TextInput
          id={id}
          value={form.values[id]}
          onChangeText={handleChange}
          placeholderTextColor={COLORS.gray}
          style={styles.input}
          {...rest}
        />
        {icon}
      </View>
      {haserror && <Text style={styles.error}>{form.errors[id]}</Text>}
    </View>
  );
};
