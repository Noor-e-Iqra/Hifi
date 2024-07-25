import React, { FC } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { useTheme } from "react-native-paper";
// styles
import { styles } from "./styles";
import { globalStyles } from "../../theme/styles";

interface InputProps extends TextInputProps {
  label: string;
  icon?: JSX.Element;
  form: any;
  id: string;
}

const Input: FC<InputProps> = ({ label, icon, form, id, ...rest }) => {
  const haserror = form.touched[id] && form.errors[id];
  const { colors, fonts } = useTheme();

  const handleChange = (text: string) => {
    form.setFieldTouched(id, true);
    form.setFieldValue(id, text);
  };

  return (
    <View style={styles.container}>
      {/* label */}
      <Text style={globalStyles.desc(fonts, colors)}>{label}</Text>
      {/* input */}
      <View style={styles.input_con(colors)}>
        <TextInput
          id={id}
          value={form.values[id]}
          onChangeText={handleChange}
          placeholderTextColor={colors.gray}
          cursorColor={colors.primary}
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
export default Input;
