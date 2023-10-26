import React from "react";
import { styles } from "./styles";
import { Chip, useTheme } from "react-native-paper";
import { View, Text } from "react-native";

export const Filters = ({ data, selectedFilter, onPress, isFunction }) => {
  const { colors, fonts } = useTheme();

  function onPressOption(category, option, index) {
    if (isFunction) onPress(category, option, index);
    else onPress(option);
  }
  // Mapping over the filter data to render filter categories and options
  return data.map((item, index) => (
    <View key={index} style={{ marginHorizontal: 24, marginBottom: 15 }}>
      {/* filter category */}
      <Text style={styles.filterCat(fonts, colors)}>{item.category}</Text>

      {/* Render filter options using Chips */}
      <View style={styles.row}>
        {item.options.map((option, optionIndex) => {
          // Determine if the option is selected
          const isSelected = selectedFilter[index] == option;
          // Render each option as a Chip
          return (
            <Chip
              key={optionIndex}
              onPress={() => onPressOption(item.category, option, index)}
              style={styles.chip(isSelected, colors)}
              textStyle={styles.text(fonts, colors, isSelected)}
            >
              {option}
            </Chip>
          );
        })}
      </View>
    </View>
  ));
};
