import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { IconButton, useTheme } from "react-native-paper";
import { globalStyles } from "../../utils/styles";
import icons from "../../../assets/icons";

export const FilterRow = ({ heading, style, onPressFilter, isSelected }) => {
  const { colors, fonts } = useTheme();

  return (
    <View style={[styles.container, style]}>
      {/* heading */}
      <Text style={globalStyles.heading(fonts, colors)}>{heading}</Text>
      {/* filter icon */}
      <IconButton
        onPress={onPressFilter}
        size={30}
        icon={() => (
          <Image
            source={icons.filter}
            resizeMode="contain"
            style={{
              height: 28,
              width: 28,
              tintColor: isSelected ? colors.primary : undefined,
            }}
          />
        )}
      />
    </View>
  );
};
