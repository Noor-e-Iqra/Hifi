import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { TextInput } from "react-native";
import { useTheme } from "react-native-paper";

export const Input = ({ label, icon, form, id, ...rest }) => {
  const haserror = form.touched[id] && form.errors[id];
  const { colors, fonts } = useTheme();

  const handleChange = (text) => {
    form.setFieldTouched(id, true);
    form.setFieldValue(id, text);
  };

  return (
    <View style={styles.container}>
      {/* label */}
      <Text style={styles.label(fonts, colors)}>{label}</Text>
      {/* input */}
      <View style={styles.input_con(colors)}>
        <TextInput
          id={id}
          value={form.values[id]}
          onChangeText={handleChange}
          placeholderTextColor={colors.gray}
          style={styles.input(fonts, colors)}
          {...rest}
        />
        {icon}
      </View>
      {/* error */}
      {haserror && <Text style={styles.error(fonts)}>{form.errors[id]}</Text>}
    </View>
  );
};
