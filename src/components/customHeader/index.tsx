import React from "react";
import { View, Image, Text } from "react-native";
import { useTheme } from "react-native-paper";
// images
import images from "../../../assets/images";
// styles
import { globalStyles } from "../../theme/styles";
import { styles } from "./styles";

const CustomHeader: React.FC = () => {
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

export default CustomHeader;
