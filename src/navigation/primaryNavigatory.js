import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import routes from "./routes";
import { Welcome } from "../screens";

const Stack = createStackNavigator();

export const PrimaryNavigatory = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
      >
        <Stack.Screen name={routes.welcome} component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
