import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { CustomButton } from "../../components/customButton";
import { PasswordInput } from "../../components/passwordInput";
import { useFormik } from "formik";
import * as yup from "yup";
import routes from "../../navigation/routes";
import { EMAIL_REGX } from "../../utils/regx";
import Container from "../../components/Container";
import { EmailInput } from "../../components/emailInput";
import images from "../../../assets/images";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { Input } from "../../components/input";

export const SignUp = ({ navigation }) => {
  const { colors, fonts, sizes } = useTheme();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  // fields validation
  const validationSchema = yup.object({
    name: yup.string().label("Name").required(),
    password: yup.string().label("Password").required(),
    email: yup
      .string()
      .label("Email")
      .required()
      .matches(EMAIL_REGX, "Email is not valid"),
  });

  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  // Function to handle form submission
  function onSubmit(values) {
    console.log(values);
    navigation.navigate(routes.grade_selection);
  }

  return (
    <Container paddingStyle={{ alignItems: "center" }}>
      {/* image */}
      <Image
        source={images.webinar}
        style={{ height: sizes.height * 0.35, width: "100%" }}
        resizeMode="contain"
      />
      {/* name input */}
      <Input form={form} id={"name"} placeholder="Your name" label={"Name"} />
      {/* email input */}
      <EmailInput form={form} id="email" />
      {/* password input */}
      <PasswordInput form={form} id="password" />

      {/* sign in btn */}
      <CustomButton
        text={"Sign up"}
        btnStyle={{ marginTop: "18%", width: "80%" }}
        onPress={form.handleSubmit}
      />
      {/*  have account */}
      <View style={styles.row}>
        <Text style={styles.regular(fonts, colors)}>You have account?</Text>
        {/* signup */}
        <CustomButton
          text={"Sign in"}
          mode={"text"}
          contentStyle={{ height: 40 }}
          btnStyle={{ width: "28%" }}
          labelStyle={{ ...fonts.semibold, fontSize: 18 }}
          onPress={() => navigation.navigate(routes.sign_in)}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "50%",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    marginTop: "8%",
    alignItems: "center",
  },
  regular: (fonts, colors) => ({
    ...fonts.exo_regular,
    fontSize: 18,
    color: colors.gray,
  }),
});
