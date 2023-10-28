import React, { useState } from "react";
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

export const Signin = ({ navigation }) => {
  const { colors, fonts, sizes } = useTheme();

  const initialValues = {
    email: "",
    password: "",
  };

  // fields validation
  const validationSchema = yup.object({
    // password: yup.string().label("Password").required(),
    // email: yup
    //   .string()
    //   .label("Email")
    //   .required()
    //   .matches(EMAIL_REGX, "Email is not valid"),
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
        source={images.knowledge}
        style={{ height: sizes.height * 0.35, width: "100%" }}
        resizeMode="contain"
      />
      {/* email input */}
      <EmailInput form={form} id="email" />
      {/* password input */}
      <PasswordInput form={form} id="password" />

      {/* sign in btn */}
      <CustomButton
        text={"Sign in"}
        btnStyle={{ marginTop: "18%", width: "80%" }}
        onPress={form.handleSubmit}
      />
      {/* don't have account */}
      <View style={styles.row}>
        <Text style={styles.regular(fonts, colors)}>Don’t have account?</Text>
        {/* signup */}
        <CustomButton
          text={"Sign up"}
          mode={"text"}
          contentStyle={{ height: 40 }}
          btnStyle={{ width: "auto", marginLeft: 5 }}
          labelStyle={{ ...fonts.semibold, fontSize: 18 }}
          onPress={() => navigation.navigate(routes.sign_up)}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "40%",
    width: "100%",
    marginBottom: "5%",
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
