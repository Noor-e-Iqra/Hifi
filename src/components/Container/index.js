import React from "react";
import {
  Image,
  ImageBackground,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { styles } from "./styles";
import images from "../../../assets/images";

const Container = ({ children, heading, subheading, style }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      enabled={Platform.OS === "ios" ? true : false}
    >
      <ImageBackground source={images.bg} style={[styles.container, style]}>
        <Image
          source={images.appname_big}
          resizeMode="contain"
          style={{
            height: 75,
            width: "100%",
            marginTop: 120,
            marginBottom: 10,
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.padding}>{children}</View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Container;
