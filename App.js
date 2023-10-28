import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { PrimaryNavigatory } from "./src/navigation/primaryNavigatory";
import { useFonts } from "expo-font";
import { PaperProvider } from "react-native-paper";
import { theme } from "./src/theme";

export default function App() {
  LogBox.ignoreAllLogs();
  
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
      <StatusBar backgroundColor={theme.colors.secondary} translucent={false} />
      <PrimaryNavigatory />
    </PaperProvider>
  );
}
