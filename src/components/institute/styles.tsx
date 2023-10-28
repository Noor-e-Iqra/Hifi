import { Platform, StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";

interface Styles {
  container: (colors: any) => ViewStyle;
  subject: (fonts: any, colors: any) => TextStyle;
  desc: (fonts: any) => TextStyle;
  image: (color: any) => ImageStyle;
  rating: (fonts: any, colors: any) => TextStyle;
  content: ViewStyle;
  row: ViewStyle;
  name: TextStyle;
}

export const styles: Styles = StyleSheet.create<Styles>({
  container: (colors) => ({
    backgroundColor: colors.white,
    padding: 8,
    flexDirection: "row",
    marginVertical: 10,
    borderRadius: 12,
    height: 176,
    shadowOpacity: 0.46,
    shadowRadius: 4.65,
    elevation: 17,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor:
      Platform.OS === "android" ? "rgba(0, 0, 0, 0.80)" : "#00000024",
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
    width: "53%",
    paddingHorizontal: 0,
    marginLeft: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  name: {
    marginTop: 5,
    flex: undefined,
  },
});
