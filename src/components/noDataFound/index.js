import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";
import { useTheme } from "react-native-paper";

const NoDataFound = ({ text }) => {
  const { fonts } = useTheme();

  return (
    <Text style={[styles.title(fonts)]}>{text ? text : "No Data Found!"}</Text>
  );
};

export default NoDataFound;
