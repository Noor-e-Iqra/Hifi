import React from 'react';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import { COLORS } from '../../theme';

const StarRating = ({rating}) => {
  const renderStars = () => {
    const stars = [];
    const filledStarColor = COLORS.yellow;
    const emptyStarColor = COLORS.yellow;

    const filledStars = Math.floor(rating); // Number of filled stars (integer part)
    const hasHalfStar = rating % 1 !== 0; // Check if there's a half star

    // Render filled stars
    for (let i = 1; i <= filledStars; i++) {
      const star = (
        <Ionicons key={i} name="star" size={12} color={filledStarColor} />
      );
      stars.push(star);
    }

    // Render half star if applicable
    if (hasHalfStar) {
      const halfStar = (
        <Ionicons
          key={'half'}
          name="star-half"
          size={12}
          color={filledStarColor}
        />
      );
      stars.push(halfStar);
    }

    // Render remaining empty stars
    const remainingStars = 5 - Math.ceil(rating); // Number of empty stars (ceiling of the rating value)
    for (let i = 1; i <= remainingStars; i++) {
      const star = (
        <Ionicons
          key={`empty-${i}`}
          name="star-outline"
          size={12}
          color={emptyStarColor}
        />
      );
      stars.push(star);
    }

    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

export default StarRating;
