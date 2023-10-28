import { StyleSheet, TextStyle} from "react-native";

interface Styles {
  title: (fonts: any) => TextStyle;
}

export const styles: Styles = StyleSheet.create<Styles>({
  title: (fonts: any): TextStyle => ({
    ...fonts.roboto_medium,
    alignSelf: "center",
    marginTop: 20,
  }),
});
