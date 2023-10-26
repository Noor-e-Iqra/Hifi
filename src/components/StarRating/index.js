import React from "react";
import { View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./styles";
import { useTheme } from "react-native-paper";

const StarRating = ({ rating }) => {
  const { colors } = useTheme();

  const renderStars = () => {
    const stars = [];

    const filledStars = Math.floor(rating); // Number of filled stars
    const hasHalfStar = rating % 1 >= 0.5; // Check if there's a half star

    // Render filled stars
    for (let i = 1; i <= filledStars; i++) {
      const star = (
        <FontAwesome
          key={i}
          name="star"
          size={10}
          color={colors.yellow}
          style={styles.star}
        />
      );
      stars.push(star);
    }

    // Render half star if applicable
    if (hasHalfStar) {
      const halfStar = (
        <FontAwesome
          key={"half"}
          name="star-half-empty"
          size={10}
          color={colors.yellow}
          style={styles.star}
        />
      );
      stars.push(halfStar);
    }

    // Render remaining empty stars
    const remainingStars = 5 - filledStars - (hasHalfStar ? 1 : 0);
    for (let i = 1; i <= remainingStars; i++) {
      const star = (
        <FontAwesome
          key={`empty-${i}`}
          name="star-o"
          size={10}
          color={colors.yellow}
          style={styles.star}
        />
      );
      stars.push(star);
    }

    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

export default StarRating;
