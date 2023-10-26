import React from "react";
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  SafeAreaView,
} from "react-native";
import { useTheme } from "react-native-paper";
import { globalStyles } from "../../utils/styles";

const Container = ({ children, paddingStyle }) => {
  const { colors, sizes } = useTheme();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      enabled={Platform.OS === "ios"}
    >
      <SafeAreaView style={globalStyles.container(colors)}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[globalStyles.padding(sizes), paddingStyle]}>
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Container;
