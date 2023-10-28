import React from "react";
import { styles } from "./styles";
import { Card, useTheme } from "react-native-paper";

export const Teacher = ({ item, isFirst, isLast }) => {
  const { colors, fonts } = useTheme();

  return (
    <Card
      style={styles.container(colors, isFirst, isLast)}
      mode="elevated"
      elevation={3.5}
    >
      {/* teacher image */}
      <Card.Cover
        style={styles.image(item.bg)}
        resizeMode="contain"
        source={item.image}
      />
      {/* teacher name and subject */}
      <Card.Title
        title={item.name}
        subtitle={item.subject}
        style={styles.textcon}
        titleStyle={styles.name(fonts, colors)}
        subtitleStyle={styles.subject(fonts, colors)}
      />
    </Card>
  );
};
