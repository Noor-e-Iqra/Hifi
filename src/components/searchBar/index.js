import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useTheme } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

export const SearchBar = ({}) => {
  const { colors, fonts } = useTheme();

  return (
    <View style={styles.container(colors)}>
      {/* search input */}
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.gray2}
        style={styles.input(fonts, colors)}
        returnKeyType="search"
      />
      {/* search icon */}
      <TouchableOpacity style={styles.iconCon(colors)} activeOpacity={0.8}>
        <Ionicons name="search" size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};
