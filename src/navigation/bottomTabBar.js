import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Platform, StyleSheet, Text } from "react-native";
// route names for navigation
import routes from "./routes";
// screens
import { Explore } from "../screens";
// icons
import icons from "../../assets/icons";
// theme
import { useTheme } from "react-native-paper";

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  const { colors, fonts } = useTheme();

  const screenOptions = () => ({
    backBehavior: "history",
    tabBarHideOnKeyboard: true,
    headerShown: false,
    justifyContent: "center",
    alignItems: "center",
    tabBarStyle: {
      height: Platform.OS == "android" ? 90 : "12%",
      backgroundColor: colors.white,
      justifyContent: "center",
      alignItems: "center",
      borderTopWidth: 0,
      paddingHorizontal: 5,
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      position: "absolute",
    },
  });

  // Component for rendering tab bar icons
  const TabBarIcon = ({ focused, icon }) => {
    return (
      <Image
        source={icon}
        resizeMode="contain"
        style={styles.icon(focused, colors)}
      />
    );
  };

  // Component for rendering tab bar labels
  const Label = ({ focused, children }) => {
    return <Text style={styles.label(focused, fonts, colors)}>{children}</Text>;
  };

  return (
    <Tab.Navigator screenOptions={screenOptions} backBehavior="history">
      {/* explore tab */}
      <Tab.Screen
        name={routes.explore}
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.explore} />
          ),
          tabBarLabel: ({ children, focused }) => (
            <Label focused={focused} children={children} />
          ),
          title: "Explore",
        }}
      />

      {/* stream tab */}
      <Tab.Screen
        name={routes.stream}
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.stream} />
          ),
          tabBarLabel: ({ children, focused }) => (
            <Label focused={focused} children={children} />
          ),
          title: "Stream",
        }}
      />

      {/* classwork tab */}
      <Tab.Screen
        name={routes.classwork}
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.classwork} />
          ),
          tabBarLabel: ({ children, focused }) => (
            <Label focused={focused} children={children} />
          ),
          title: "ClassWork",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  icon: (focused, colors) => ({
    height: 26,
    width: 26,
    marginTop: "10%",
    tintColor: focused ? colors.primary : colors.gray,
  }),
  label: (focused, fonts, colors) => ({
    ...fonts.exo_medium,
    fontSize: 14,
    marginBottom: "10%",
    color: focused ? colors.primary : colors.gray,
  }),
});
