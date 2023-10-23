import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {TextInput} from 'react-native';

export const BorderInput = ({
  label,
  icon,
  form,
  hint,
  id,
  isDate,
  style,
  ...rest
}) => {
  const haserror = form.touched[id] && form.errors[id];

  const handleChange = text => {
    form.setFieldTouched(id, true);
    form.setFieldValue(id, text);
  };

  return (
    <View style={[styles.container, style]}>
      {Boolean(label) && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.input_con]}>
        <TextInput
          id={id}
          onChangeText={handleChange}
          style={styles.input}
          value={
            isDate && form.values[id]
              ? new Date(form.values[id]).toISOString()?.split('T')[0]
              : form.values[id]
          }
          {...rest}
        />
        {icon}
      </View>
      {Boolean(hint) && <Text style={styles.hint}>{hint}</Text>}
      {haserror && <Text style={styles.error}>{form.errors[id]}</Text>}
    </View>
  );
};
