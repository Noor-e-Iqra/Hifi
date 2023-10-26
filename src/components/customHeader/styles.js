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
    elevation: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 8,
    shadowOpacity: 0.4,
    shadowColor: "gray",
    borderRadius: 15,
    backgroundColor: "white",
  },
});
