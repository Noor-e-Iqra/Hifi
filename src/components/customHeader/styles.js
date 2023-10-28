import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  desc: (fonts, colors) => ({
    ...fonts.exo_semibold,
    color: colors.gray2,
  }),
  image: (colors) => ({
    height: 68,
    width: 68,
    borderRadius: 15,
    backgroundColor: colors.light_pink,
    borderWidth: 1,
    borderColor: colors.white,
  }),
  shadow: {
    shadowColor: "#000000",
    shadowOpacity: 0.21,
    shadowRadius: 8.19,
    elevation: 11,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderRadius: 15,
    backgroundColor: "white",
  },
});
