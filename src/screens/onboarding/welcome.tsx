import React, { FC } from "react";
import { StyleSheet, Text, Image} from "react-native";
import { useTheme } from "react-native-paper";
// custom components
import CustomButton from "../../components/customButton";
import Container from "../../components/container";
import Skip from "../../components/skip";
// images
import images from "../../../assets/images";
// route names
import routes from "../../navigation/routes";
// styles
import { globalStyles } from "../../theme/styles";

interface WelcomeProps {
  navigation: any;
}

export const Welcome: FC<WelcomeProps> = ({ navigation }) => {
  const { colors, fonts, sizes } = useTheme();

  return (
    <Container paddingStyle={{ alignItems: "center" }}>
      {/* image */}
      <Image
        source={images.a_plus}
        style={{ height: sizes.height * 0.4, width: "100%" }}
        resizeMode="contain"
      />
      <Text style={[globalStyles.heading(fonts, colors), styles.title]}>
        Let's find the "A" with us
      </Text>
      <Text style={[globalStyles.desc(fonts, colors), styles.desc]}>
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
  title: {
    textAlign: "center",
    marginTop: "5%",
  },
  desc: {
    textAlign: "center",
    marginTop: "3%",
  },
});
