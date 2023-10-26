import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  chip: (isSelected, colors) => ({
    marginRight: 8,
    borderRadius: 9,
    marginTop: 10,
    backgroundColor: isSelected ? colors.primary : colors.white,
  }),
  text: (fonts, colors, isSelected) => ({
    ...fonts.roboto_regular,
    minHeight: 0,
    textAlignVertical: "center",
    marginVertical: 4,
    color: isSelected ? colors.white : colors.gray,
  }),

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },
  filterCat: (fonts, colors) => ({
    ...fonts.exo_semibold,
    fontSize: 12,
    color: colors.gray2,
    marginTop: 8,
  }),
});
