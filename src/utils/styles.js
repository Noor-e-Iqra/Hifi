import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: (colors) => ({
    flex: 1,
    backgroundColor: colors.secondary,
  }),
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  padding: (sizes) => ({
    flex: 1,
    padding: sizes.padding,
  }),
  heading: (fonts, colors) => ({
    ...fonts.exo_semibold,
    fontSize: 20,
    color: colors.gray,
    flex: 1,
  }),
});
