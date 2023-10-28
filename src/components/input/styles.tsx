import { Platform, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface Styles {
  container: ViewStyle;
  input_con: (colors: any) => ViewStyle;
  error: (fonts: any) => TextStyle;
  input: (fonts: any, colors: any) => any;
}

export const styles: Styles = StyleSheet.create<Styles>({
  container: {
    marginTop: 30,
    width: "100%",
  },
  input_con: (colors) => ({
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.white,
    height: 50,
    borderRadius: 8,
    paddingLeft: 15,
    elevation: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    shadowColor: "gray",
    marginTop: 10,
  }),
  error: (fonts) => ({
    ...fonts.roboto_regular,
    fontSize: 12,
    color: "red",
    marginVertical: 5,
  }),
  input: (fonts, colors) => ({
    flex: 1,
    ...fonts.roboto_light,
    color: colors.gray,
    ...(Platform.OS === "web" && { outline: "none" }),
  }),
});
