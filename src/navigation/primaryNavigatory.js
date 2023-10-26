import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
// route names
import routes from "./routes";
// screens
import {
  GradeSelection,
  ProvinceSelection,
  SignUp,
  Signin,
  Welcome,
} from "../screens";
// bottom tab bar
import BottomTabBar from "./bottomTabBar";

const Stack = createStackNavigator();

export const PrimaryNavigatory = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        {/* welcome screen */}
        <Stack.Screen
          name={routes.welcome}
          component={Welcome}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
        />
        {/* sign in screen */}
        <Stack.Screen name={routes.sign_in} component={Signin} />
        {/* sign up screen */}
        <Stack.Screen
          name={routes.sign_up}
          component={SignUp}
          options={{
            gestureDirection: "horizontal-inverted",
          }}
        />
        {/* grade selection screen */}
        <Stack.Screen
          name={routes.grade_selection}
          component={GradeSelection}
        />
        {/* province selection screen */}
        <Stack.Screen
          name={routes.province_selection}
          component={ProvinceSelection}
        />
        {/* bottom tab bar */}
        <Stack.Screen
          name={routes.bottom_tab_bar}
          component={BottomTabBar}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
