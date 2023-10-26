import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: (colors) => ({
    width: "100%",
    backgroundColor: colors.light_gray,
    borderRadius: 8,
    marginTop: 15,
  }),
  row: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  desc: (fonts, colors) => ({
    ...fonts.exo_semibold,
    fontSize: 18,
    color: colors.gray2,
    flex: 1,
  }),
  optionsCon: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 8,
  },
  chip: (colors, i, selected) => ({
    margin: 8,
    marginTop: i < 2 ? 0 : 8,
    borderRadius: 10,
    width: "43.8%",
    backgroundColor: selected ? colors.primary : colors.light_gray2,
  }),

  label: (fonts, colors, selected) => ({
    ...fonts.exo_medium,
    fontSize: 16,
    textAlign: "center",
    flex: 1,
    paddingVertical: 10,
    color: selected ? colors.white : colors.gray2,
  }),
  icon: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
});
