import React from "react";
import { StyleSheet, Text } from "react-native";
import images from "../../../assets/images";
import routes from "../../navigation/routes";
import { useTheme } from "react-native-paper";
import { CustomButton } from "../../components/customButton";
import Container from "../../components/Container";
import { Image } from "react-native";
import { Skip } from "../../components/skip";

export const Welcome = ({ navigation }) => {
  const { colors, fonts, sizes } = useTheme();

  return (
    <Container paddingStyle={{ alignItems: "center" }}>
      {/* image */}
      <Image
        source={images.a_plus}
        style={{ height: sizes.height * 0.4, width: "100%" }}
        resizeMode="contain"
      />
      <Text style={styles.title(fonts, colors)}>
        Let's find the "A" with us
      </Text>
      <Text style={styles.desc(fonts, colors)}>
        Please Sign in to view personalized recommendations
      </Text>

      {/* sign in button */}
      <CustomButton
        text={"Sign in"}
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
    color: colors.gray,
    textAlign: "center",
    marginTop: "5%",
  }),
  desc: (fonts, colors) => ({
    ...fonts.exo_medium,
    color: colors.gray2,
    textAlign: "center",
    marginTop: "3%",
  }),
});
