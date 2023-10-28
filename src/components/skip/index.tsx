import React, { FC } from "react";
import { useTheme } from "react-native-paper";
import CustomButton from "../customButton";
import routes from "../../navigation/routes";
import { NavigationProp } from "@react-navigation/native";

interface SkipProps {
  navigation: NavigationProp<any>;
}

const Skip: FC<SkipProps> = ({ navigation }) => {
  const { fonts } = useTheme();

  return (
    <CustomButton
      text={"Skip"}
      mode={"text"}
      contentStyle={{ height: 45 }}
      btnStyle={{ marginTop: "8%", width: "20%" }}
      labelStyle={{ ...fonts.exo_regular, fontSize: 18 }}
      onPress={() => navigation.navigate(routes.bottom_tab_bar)}
    />
  );
};

export default Skip;
