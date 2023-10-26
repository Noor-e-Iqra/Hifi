import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import { useTheme } from "react-native-paper";
import images from "../../../assets/images";
import { globalStyles } from "../../utils/styles";

export const CustomHeader = () => {
  const { colors, fonts } = useTheme();

  return (
    <View style={[globalStyles.row, { marginHorizontal: 24 }]}>
      <View style={{ flex: 1 }}>
        {/* greeting */}
        <Text style={[globalStyles.heading(fonts, colors), { fontSize: 32 }]}>
          Good evening!
        </Text>
        {/* person name */}
        <Text style={styles.desc(fonts, colors)}>Hardline Scott</Text>
      </View>
      {/* person image */}
      <View style={styles.shadow}>
        <Image source={images.pro_pic} style={styles.image(colors)} />
      </View>
    </View>
  );
};
