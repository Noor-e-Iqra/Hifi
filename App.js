import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { PrimaryNavigatory } from "./src/navigation/primaryNavigatory";
import { useFonts } from "expo-font";
import { PaperProvider } from "react-native-paper";
import { theme } from "./src/theme";

export default function App() {
  // loading custom fonts
  const [fontsLoaded, fontError] = useFonts({
    "Exo-Regular": require("./assets/fonts/Exo-Regular.ttf"),
    "Exo-Medium": require("./assets/fonts/Exo-Medium.ttf"),
    "Exo-SemiBold": require("./assets/fonts/Exo-SemiBold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <PrimaryNavigatory />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
