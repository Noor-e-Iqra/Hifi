import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import routes from "./routes";
import { GradeSelection, SignUp, Signin, Welcome } from "../screens";

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
        <Stack.Screen
          name={routes.sign_in}
          component={Signin}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
         <Stack.Screen
          name={routes.sign_up}
          component={SignUp}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureDirection:'horizontal-inverted'
          }}
        />
         <Stack.Screen
          name={routes.grade_selection}
          component={GradeSelection}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
