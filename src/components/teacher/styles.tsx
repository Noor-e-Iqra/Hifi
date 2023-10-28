import { Platform, StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";

interface Styles {
  container: (colors: any, isFirst: boolean, isLast: boolean) => ViewStyle;
  name: (fonts: any, colors: any) => TextStyle;
  subject: (fonts: any, colors: any) => TextStyle;
  image: (color: string) => ImageStyle;
  textcon: ViewStyle;
}

export const styles: Styles = StyleSheet.create<Styles>({
  container: (colors, isFirst, isLast) => ({
    backgroundColor: colors.white,
    padding: 8,
    marginLeft: isFirst ? 24 : 10,
    marginRight: isLast ? 24 : 10,
    borderRadius: 12,
    width: 130,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 4.65,
    elevation: 17,
    shadowColor:
      Platform.OS === "android" ? "rgba(0, 0, 0, 0.80)" : "#00000024",
  }),
  name: (fonts, colors) => ({
    ...fonts.exo_semibold,
    fontSize: 16,
    lineHeight: 18,
    paddingRight: 0,
    minHeight: 0,
    marginTop: 8,
    color: colors.gray,
  }),
  subject: (fonts, colors) => ({
    ...fonts.roboto_regular,
    fontSize: 12,
    lineHeight: 15,
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