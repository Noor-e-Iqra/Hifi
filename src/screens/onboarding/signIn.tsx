import React, { FC } from "react";
import { Image, Text, View } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTheme } from "react-native-paper";
// custom components
import  CustomButton  from "../../components/customButton";
import  PasswordInput  from "../../components/passwordInput";
import Container from "../../components/container";
import  EmailInput  from "../../components/emailInput";
// route names
import routes from "../../navigation/routes";
// regex
import { EMAIL_REGX } from "../../utils/regx";
// images
import images from "../../../assets/images";
// styles
import { globalStyles } from "../../theme/styles";

interface SigninProps {
  navigation: any;
}

export const Signin: FC<SigninProps> = ({ navigation }) => {
  const { colors, fonts, sizes } = useTheme();
  const initialValues = {
    email: "",
    password: "",
  };

  // fields validation
  const validationSchema = yup.object({
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
  function onSubmit(values: any) {
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
      <View style={[globalStyles.row, { marginTop: "8%" }]}>
        <Text style={globalStyles.regular(fonts, colors)}>
          Don’t have account?
        </Text>
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