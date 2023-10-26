import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: (colors, isFirst, isLast) => ({
    backgroundColor: colors.white,
    padding: 8,
    marginLeft: isFirst ? 24 : 10,
    marginRight: isLast ? 24 : 10,
    borderRadius: 12,
    elevation: 10,
    width: 130,
    shadowOffset: { width: 5, height: 8 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    shadowColor: "gray",
  }),
  name: (fonts, colors) => ({
    ...fonts.exo_semibold,
    fontSize: 16,
    lineHeight: 0,
    paddingRight: 0,
    minHeight: 0,
    marginTop: 8,
    color: colors.gray,
  }),
  subject: (fonts, colors) => ({
    ...fonts.roboto_regular,
    fontSize: 12,
    lineHeight: 0,
    minHeight: 0,
    marginTop: 1,
    paddingRight: 0,
    color: colors.gray,
  }),
  image: (color) => ({
    height: 115,
    borderRadius: 12,
    backgroundColor: color,
  }),
  textcon: {
    paddingLeft: 0,
    alignItems: "flex-start",
    minHeight: 0,
    padding: 0,
  },
});
