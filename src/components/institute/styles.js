import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: (colors) => ({
    backgroundColor: colors.white,
    padding: 8,
    flexDirection: "row",
    marginVertical: 10,
    borderRadius: 12,
    elevation: 10,
    height: 176,
    shadowOffset: { width: 5, height: 8 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    shadowColor: "gray",
  }),
  name: (fonts, colors) => ({
    ...fonts.exo_semibold,
    fontSize: 20,
    marginTop: 5,
    color: colors.gray,
  }),
  subject: (fonts, colors) => ({
    ...fonts.roboto_medium,
    fontSize: 12,
    color: colors.gray,
    marginTop: 15,
  }),
  desc: (fonts) => ({
    ...fonts.roboto_light,
    fontSize: 12,
    color: "#121212",
    lineHeight: 18,
  }),
  image: (color) => ({
    width: 145,
    height: "100%",
    borderRadius: 12,
    backgroundColor: color,
  }),
  rating: (fonts, colors) => ({
    ...fonts.roboto_regular,
    fontSize: 10,
    color: colors.gray2,
    marginLeft: 8,
    letterSpacing: 1.5,
  }),
  content: {
    width: "52%",
    paddingHorizontal: 0,
    marginLeft: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
