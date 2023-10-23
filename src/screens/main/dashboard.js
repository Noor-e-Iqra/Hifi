import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONTS } from "../../theme";
import { categories, news } from "../../data";
import images from "../../../assets/images";
import routes from "../../navigation/routes";

export const Dashboard = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* live chat */}
      <TouchableOpacity
        style={styles.live_chat_con}
        activeOpacity={0.5}
        onPress={() => navigation.navigate(routes.live_chat)}
      >
        <Text style={styles.live_chat_txt}>Live Chat</Text>
        <Image
          source={images.live_chat}
          style={{ height: 55, width: 55 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {/* news */}
      <Text style={styles.news_heading}>News</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "95%",
    alignSelf: "center",
  },
  live_chat_con: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 20,
    marginRight: 25,
  },
  live_chat_txt: {
    ...FONTS.bold,
    fontSize: 24,
    color: COLORS.primary,
    marginRight: 10,
  },
  news_heading: {
    ...FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
  },
});
