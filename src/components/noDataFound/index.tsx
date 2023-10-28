import React, { FC } from "react";
import { Text } from "react-native";
import { styles } from "./styles";
import { useTheme } from "react-native-paper";

interface NoDataFoundProps {
  text?: string;
}

const NoDataFound: FC<NoDataFoundProps> = ({ text }) => {
  const { fonts } = useTheme();

  return (
    <Text style={[styles.title(fonts)]}>{text ? text : "No Data Found!"}</Text>
  );
};

export default NoDataFound;