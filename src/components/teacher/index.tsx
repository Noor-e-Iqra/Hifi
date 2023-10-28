import React, { FC } from "react";
import { styles } from "./styles";
import { Card, useTheme } from "react-native-paper";
import { ImageSourcePropType } from "react-native";

interface TeacherProps {
  item: {
    bg: string;
    image: ImageSourcePropType;
    name: string;
    subject: string;
  };
  isFirst: boolean;
  isLast: boolean;
}

const Teacher: FC<TeacherProps> = ({ item, isFirst, isLast }) => {
  const { colors, fonts } = useTheme();

  return (
    <Card
      style={styles.container(colors, isFirst, isLast)}
      mode="elevated"
      elevation={4}
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

export default Teacher;
