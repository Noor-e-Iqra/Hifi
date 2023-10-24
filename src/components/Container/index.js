import React from "react";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  SafeAreaView,
} from "react-native";
import { useTheme } from "react-native-paper";
import { createGlobalStyles } from "../../utils/styles";

const Container = ({ children, paddingStyle }) => {
  const { colors, fonts, sizes } = useTheme();
  const globalStyles = createGlobalStyles(colors, fonts, sizes);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      enabled={Platform.OS === "ios"}
    >
      <SafeAreaView style={globalStyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[globalStyles.padding, paddingStyle]}>{children}</View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Container;
