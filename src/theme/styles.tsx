import { StyleSheet, ViewStyle, TextStyle } from "react-native";

interface GlobalStyles {
  container: (colors: any) => ViewStyle;
  row: ViewStyle;
  padding: (sizes: any) => ViewStyle;
  heading: (fonts: any, colors: any) => TextStyle;
  regular: (fonts: any, colors: any) => TextStyle;
  desc: (fonts: any, colors: any) => TextStyle;
}

export const globalStyles: GlobalStyles = StyleSheet.create<GlobalStyles>({
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
  regular: (fonts, colors) => ({
    ...fonts.exo_regular,
    fontSize: 18,
    color: colors.gray,
  }),
  desc: (fonts, colors) => ({
    ...fonts.exo_medium,
    fontSize: 18,
    color: colors.gray2,
  }),
});
