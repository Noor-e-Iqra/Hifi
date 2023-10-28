import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: (colors, isFocused) => ({
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    flex: 1,
    marginRight: isFocused ? 0 : 15,
    elevation: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    shadowColor: "gray",
    borderRadius: 12,
    padding: 8,
  }),
  input: (fonts, colors) => ({
    flex: 1,
    ...fonts.exo_semibold,
    fontSize: 16,
    marginHorizontal: 10,
    color: colors.gray2,
    ...(Platform.OS === 'web' && { outline: 'none' }),
  }),
  iconCon: (colors) => ({
    padding: 12,
    backgroundColor: colors.primary,
    elevation: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
    shadowColor: "gray",
    borderRadius: 12,
  }),
});
