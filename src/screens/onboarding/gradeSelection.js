import React from "react";
import { StyleSheet, Text, View } from "react-native";
import images from "../../../assets/images";
import routes from "../../navigation/routes";
import { useTheme } from "react-native-paper";
import { CustomButton } from "../../components/customButton";
import Container from "../../components/Container";
import { Image } from "react-native";
import { Skip } from "../../components/skip";
import { grades } from "../../data";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const GradeSelection = ({ navigation }) => {
  const { colors, fonts } = useTheme();

  return (
    <Container paddingStyle={{ alignItems: "center" }}>
      <Text style={styles.title(fonts, colors)}>What's your grade? </Text>
      {grades.map((item, i) => (
        <TouchableOpacity
          activeOpacity={0.5}
          key={i}
          style={{
            padding: 15,
            borderRadius: 8,
            marginTop: 15,
            backgroundColor: colors.light_gray,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.desc(fonts, colors)}>{item.category} </Text>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={30}
            color={colors.gray2}
          />
        </TouchableOpacity>
      ))}

      {/* Next btn */}
      <CustomButton
        text={"Next"}
        btnStyle={{ marginTop: "30%", width: "80%" }}
        onPress={() => navigation.navigate(routes.sign_in)}
      />
      {/* skip */}
      <Skip navigation={navigation} />
    </Container>
  );
};

const styles = StyleSheet.create({
  title: (fonts, colors) => ({
    ...fonts.exo_semibold,
    fontSize: 25,
    alignSelf: "flex-start",
    color: colors.gray,
    marginBottom: 10,
  }),
  desc: (fonts, colors) => ({
    ...fonts.exo_semibold,
    fontSize: 18,
    color: colors.gray2,
    flex: 1,
  }),
});
