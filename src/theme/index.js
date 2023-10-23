import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // primary purple orange
  primary: "#5667FD",

  //other colors
  black: "#000000",
  white: "#FFFFFF",
  gray: "#978D8D",
  gray2: "#58595bff",
  green: "#30B224",
  cyan: "#49cdbaff",
  yellow: "#FFC700",
  light_gray: "#BFBFBF",
  light_gray2: "#8F8F8F",
  light_gray3: "#d1d8e2ff",
  light_gray4: "#f3f4f4ff",
  blue: "#2e3092ff",
  red: "#ec3e3eff",
  light_blue: "#35b3ffff",
  light_green: "#99c939ff",
  light_green2: "#8dd9b0ff",
  bg: "#63bbdaff",
};

export const SIZES = {
  // global sizes
  padding: 24,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  exo_regular: {
    fontFamily: "Exo-Regular",
    fontSize: 14,
    color: COLORS.black,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  exo_medium: {
    fontFamily: "Exo-Medium",
    fontSize: 16,
    color: COLORS.black,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  exo_semibold: {
    fontFamily: "Exo-SemiBold",
    fontSize: 18,
    color: COLORS.black,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  roboto_light: {
    fontFamily: "Roboto-Light",
    fontSize: 12,
    color: COLORS.black,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  roboto_regular: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    color: COLORS.black,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  roboto_medium: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: COLORS.black,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
};

export { width, height };

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
