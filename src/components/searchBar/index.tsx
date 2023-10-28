import React, { FC } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";
import { IconButton, useTheme } from "react-native-paper";
// vector icon
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
// animation
import { CustomLayoutLinear } from "../../utils/animations";
// styles
import { styles } from "./styles";

interface SearchBarProps {
  focused: boolean;
  setFocused: (isFocused: boolean) => void;
  onPressCross: () => void;
  value: string;
  onChangeText: (e: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  focused,
  setFocused,
  onPressCross,
  value,
  ...rest
}) => {
  const { colors, fonts } = useTheme();

  function toggleFocused(isFocused: boolean) {
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
        value={value}
        {...rest}
      />
      {/* cross icon */}
      {value !== "" && (
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
export default SearchBar;
