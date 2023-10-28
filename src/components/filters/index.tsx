import React from "react";
import { styles } from "./styles";
import { Chip, useTheme } from "react-native-paper";
import { View, Text } from "react-native";

interface FiltersProps {
  data: Array<{ category: string; options: string[] }>;
  selectedFilter: string[];
  isFunction?: boolean;
  onPress: (
    category: string,
    option: string,
    index: number
  ) => void | ((option: string) => void);
}

const Filters: React.FC<FiltersProps> = ({
  data,
  selectedFilter,
  onPress,
  isFunction,
}) => {
  const { colors, fonts } = useTheme();

  function onPressOption(category: string, option: string, index: number) {
    if (isFunction) {
      // If it's a function taking (category, option, index)
      (onPress as (category: string, option: string, index: number) => void)(
        category,
        option,
        index
      );
    } else {
      // If it's a function taking (option)
      (onPress as (option: string) => void)(option);
    }
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
          const isSelected = selectedFilter[index] === option;
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
export default Filters