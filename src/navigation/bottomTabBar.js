import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
// route names for navigation
import routes from "./routes";
// screens
import { ClassWork, Explore, Stream } from "../screens";
// icons
import icons from "../../assets/icons";
// theme
import { useTheme } from "react-native-paper";
import { calculateMarginBottom, calculateMarginTop } from "../utils/functions";

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  const { colors, fonts } = useTheme();

  const screenOptions = () => ({
    backBehavior: "history",
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.gray,
    justifyContent: "center",
    alignItems: "center",
    tabBarStyle: {
      paddingBottom: 0,
      height: "9.5%",
      backgroundColor: colors.white,
      // justifyContent: "center",
      // alignItems: "center",
      borderTopWidth: 0,
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      position: "absolute",
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions} backBehavior="history">
      {/* explore tab */}
      <Tab.Screen
        name={routes.explore}
        component={Explore}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.explore}
              resizeMode="contain"
              style={styles.icon(color)}
            />
          ),
          tabBarLabel: "Explore",
          tabBarLabelStyle: styles.label(fonts),
          title: "Explore",
        }}
      />

      {/* stream tab */}
      <Tab.Screen
        name={routes.stream}
        component={Stream}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.stream}
              resizeMode="contain"
              style={styles.icon(color)}
            />
          ),
          tabBarLabel: "Stream",
          tabBarLabelStyle: styles.label(fonts),
          title: "Stream",
        }}
      />

      {/* classwork tab */}
      <Tab.Screen
        name={routes.classwork}
        component={ClassWork}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.classwork}
              resizeMode="contain"
              style={styles.icon(color)}
            />
          ),
          tabBarLabel: "ClassWork",
          tabBarLabelStyle: styles.label(fonts),
          title: "ClassWork",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  icon: (color) => ({
    height: 26,
    width: 26,
    tintColor: color,
    marginTop: calculateMarginTop(),
  }),
  label: (fonts) => ({
    ...fonts.exo_medium,
    fontSize: 14,
    marginBottom: calculateMarginBottom(),
  }),
});
