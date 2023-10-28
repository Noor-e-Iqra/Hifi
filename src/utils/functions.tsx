import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// for bottom tab bar icon
export function calculateMarginTop() {
  const isAndroid = Platform.OS === "android";
  const isWeb = Platform.OS === "web";
  // notch ios
  const hasSafeArea = useSafeAreaInsets().bottom;

  return isAndroid ? "10%" : isWeb ? 0 : hasSafeArea ? "5%" : "2%";
}

// for bottom tab bar label
export function calculateMarginBottom() {
  const isAndroid = Platform.OS === "android";
  const isWeb = Platform.OS === "web";
  // notch ios
  const hasSafeArea = useSafeAreaInsets().bottom;

  return isAndroid ? "10%" : isWeb ? 0 : hasSafeArea ? "15%" : "5%";
}
