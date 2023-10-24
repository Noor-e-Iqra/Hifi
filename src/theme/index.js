import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
import { configureFonts, DefaultTheme } from "react-native-paper";
import { fontConfig } from "./fontConfig";

export const SIZES = {
  // global sizes
  padding: 24,

  // app dimensions
  width,
  height,
};

export const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  roundness: 1,
  isV3: true,
  fonts: configureFonts({ config: fontConfig }),
  sizes: {
    padding: 24,
    width,
    height,
  },
  colors: {
    ...DefaultTheme.colors,
    primary: "#5667FD",
    secondary: "#F4F5F9",
    black: "#000000",
    white: "#FFFFFF",
    gray: "#364356",
    gray2: "#636D77",
    light_gray: "#EDEDED",
    light_gray2: "#8F8F8F",
    light_gray3: "#d1d8e2ff",
    light_gray4: "#f3f4f4ff",
    elevation: {
      ...DefaultTheme.colors.elevation,
    },
  },
};
