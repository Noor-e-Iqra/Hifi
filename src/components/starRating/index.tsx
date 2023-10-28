import React, { FC } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styles } from "./styles";
import { globalStyles } from "../../theme/styles";

interface StarRatingProps {
  rating: number;
}

const StarRating: FC<StarRatingProps> = ({ rating }) => {
  const { colors } = useTheme();

  const renderStars = (): JSX.Element[] => {
    const stars: JSX.Element[] = [];

    const filledStars: number = Math.floor(rating);
    const hasHalfStar: boolean = rating % 1 >= 0.5;

    for (let i: number = 1; i <= filledStars; i++) {
      const star: JSX.Element = (
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

    if (hasHalfStar) {
      const halfStar: JSX.Element = (
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

    const remainingStars: number = 5 - filledStars - (hasHalfStar ? 1 : 0);
    for (let i: number = 1; i <= remainingStars; i++) {
      const star: JSX.Element = (
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

  return <View style={globalStyles.row}>{renderStars()}</View>;
};

export default StarRating;
