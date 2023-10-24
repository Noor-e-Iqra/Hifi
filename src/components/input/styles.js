import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
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
    shadowOffset: {width:5, height: 5},
    shadowRadius: 8,
    shadowOpacity: 0.2,
    shadowColor: 'gray',
    marginTop:10,
  }),
  error: (fonts) => ({
    ...fonts.roboto_regular,
    fontSize: 12,
    color: "red",
    marginVertical: 5,
  }),
  label: (fonts, colors) => ({
    ...fonts.exo_medium,
    fontSize: 18,
    color: colors.gray2,
  }),

  input: (fonts, colors) => ({
    flex: 1,
    ...fonts.roboto_light,
    color: colors.gray,
  }),
});
