import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { Chip, useTheme } from "react-native-paper";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const Grade = ({ item, selected, setSelected }) => {
  const { colors, fonts } = useTheme();
  // Checking if the current category is selected
  const categorySelected = selected.category == item.category;

  // Function to toggle the visibility of options for a grade category
  function toggleOpen(categoryName) {
    // If this grade category is already open, close it on the second press
    if (categorySelected) {
      setSelected({ ...selected, category: "" });
    } else {
      setSelected({ ...selected, category: categoryName });
    }
  }

  return (
    <View style={styles.container(colors)}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.row}
        onPress={() => toggleOpen(item.category)}
      >
        {/* Displaying grade name */}
        <Text style={styles.desc(fonts, colors)}>{item.category}</Text>

        {/* Displaying arrow icon based on categorySelected state */}
        <MaterialIcons
          name={!categorySelected ? "keyboard-arrow-down" : "keyboard-arrow-up"}
          size={30}
          color={colors.gray2}
        />
      </TouchableOpacity>

      {/* Displaying options if they exist and the category is selected */}
      {item.options && categorySelected && (
        <View style={styles.optionsCon}>
          {/* Mapping through options and displaying each as a Chip */}
          {item.options.map((option, i) => (
            <Chip
              key={i}
              style={styles.chip(colors, i, selected.option == option)}
              textStyle={styles.label(fonts, colors, selected.option == option)}
              onPress={() => setSelected({ ...selected, option: option })}
              icon={() => (
                <Image
                  source={option.icon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              )}
            >
              {option.name}
            </Chip>
          ))}
        </View>
      )}
    </View>
  );
};
