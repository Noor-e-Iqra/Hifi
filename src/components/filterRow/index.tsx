import React from "react";
import { View, Text, Image } from "react-native";
import { IconButton, useTheme } from "react-native-paper";
// icons
import icons from "../../../assets/icons";
// styles
import { globalStyles } from "../../theme/styles";
import { styles } from "./styles";

interface FilterRowProps {
  heading: string;
  style?: object;
  onPressFilter: () => void;
  isSelected: boolean;
}

const FilterRow: React.FC<FilterRowProps> = ({
  heading,
  style,
  onPressFilter,
  isSelected,
}) => {
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

export default FilterRow;
