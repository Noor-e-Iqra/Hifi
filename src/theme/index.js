import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");
import { configureFonts, DefaultTheme } from "react-native-paper";
import { fontConfig } from "./fontConfig";

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
    light_gray2: "#E6E6E6",
    light_pink: "#E8DBDB",
    yellow:'#FED430',
    elevation: {
      ...DefaultTheme.colors.elevation,
    },
  },
};
