import { Platform, StyleSheet } from "react-native";

export const createGlobalStyles = (colors, fonts, sizes) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.secondary,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
    medium: {
      ...fonts.medium,
      fontSize: 14,
      color: colors.text,
    },
    regular: {
      ...fonts.regular,
      color: colors.text,
    },
    error: {
      ...fonts.firesans_regular,
      fontSize: 12,
      color: "red",
      marginVertical: sizes.vertical,
    },
    padding: {
      flex: 1,
      padding: sizes.padding,
      // height:
        // Platform.OS === "android" ? sizes.height - 50 : sizes.height - 100,
    },
  });
};
