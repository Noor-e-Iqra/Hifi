import React from "react";
import { styles } from "./styles";
import { Card, useTheme } from "react-native-paper";
import { Text, View } from "react-native";
import StarRating from "../starRating";
import { globalStyles } from "../../utils/styles";

export const Institute = ({ item }) => {
  const { colors, fonts } = useTheme();

  return (
    <Card style={styles.container(colors)} contentStyle={styles.row}>
      {/* institute image */}
      <Card.Cover
        style={styles.image(item.bg)}
        resizeMode="contain"
        source={item.image}
      />
      <Card.Content style={styles.content}>
        {/* institute name */}
        <Text style={styles.name(fonts, colors)} numberOfLines={1}>
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
        <Text style={styles.desc(fonts)}>{item.desc}</Text>
      </Card.Content>
    </Card>
  );
};
