import React, { FC } from "react";
import { ImageSourcePropType, Text, View } from "react-native";
import { Card, useTheme } from "react-native-paper";
// custom component
import StarRating from "../starRating";
// styles
import { styles } from "./styles";
import { globalStyles } from "../../theme/styles";

interface InstituteProps {
  item: {
    bg: string;
    image: ImageSourcePropType;
    name: string;
    rating: number;
    rating_num: number;
    subject: string;
    desc: string;
  };
}

const Institute: FC<InstituteProps> = ({ item }) => {
  const { colors, fonts } = useTheme();

  return (
    <Card
      style={styles.container(colors)}
      contentStyle={styles.row}
      mode="elevated"
      elevation={4}
    >
      {/* institute image */}
      <Card.Cover
        style={styles.image(item.bg)}
        resizeMode="contain"
        source={item.image}
      />
      <Card.Content style={styles.content}>
        {/* institute name */}
        <Text style={[globalStyles.heading(fonts, colors), styles.name]} numberOfLines={1}>
          {item.name}
        </Text>
        <View style={[globalStyles.row, { marginTop: 10 }]}>
          {/* ratings */}
          <StarRating rating={item.rating} />
          <Text style={styles.rating(fonts, colors)}>
            {item.rating} ({item.rating_num})
          </Text>
        </View>
        {/* subject */}
        <Text style={styles.subject(fonts, colors)}>{item.subject}</Text>
        {/* institute description */}
        <Text style={styles.desc(fonts)} numberOfLines={4}>
          {item.desc}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default Institute;