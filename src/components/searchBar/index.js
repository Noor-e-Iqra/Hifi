import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import { styles } from "./styles";
import { IconButton, useTheme } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CustomLayoutLinear } from "../../utils/animations";
import AntDesign from "@expo/vector-icons/AntDesign";

export const SearchBar = ({ focused, setFocused, onPressCross, ...rest }) => {
  const { colors, fonts } = useTheme();

  function toggleFocused(isFocused) {
    LayoutAnimation.configureNext(CustomLayoutLinear);
    setFocused(isFocused);
  }
  return (
    <View style={styles.container(colors, focused)}>
      {/* search input */}
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.gray2}
        style={styles.input(fonts, colors)}
        returnKeyType="search"
        cursorColor={colors.primary}
        onFocus={() => toggleFocused(true)}
        onBlur={() => toggleFocused(false)}
        {...rest}
      />
      {/* cross icon */}
      {rest.value != "" && (
        <IconButton
          onPress={onPressCross}
          size={18}
          icon={() => (
            <AntDesign name="closecircle" size={18} color={colors.gray2} />
          )}
        />
      )}
      {/* search icon */}
      <TouchableOpacity style={styles.iconCon(colors)} activeOpacity={0.8}>
        <Ionicons name="search" size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};
