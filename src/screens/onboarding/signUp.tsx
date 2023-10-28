import React, { FC } from "react";
import { Image, Text, View } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTheme } from "react-native-paper";
// custom components
import CustomButton from "../../components/customButton";
import PasswordInput from "../../components/passwordInput";
import Container from "../../components/container";
import EmailInput from "../../components/emailInput";
import Input from "../../components/input";
// route names
import routes from "../../navigation/routes";
// regex
import { EMAIL_REGX } from "../../utils/regx";
// images
import images from "../../../assets/images";
// styles
import { globalStyles } from "../../theme/styles";

interface SignUpProps {
  navigation: any;
}

export const SignUp: FC<SignUpProps> = ({ navigation }) => {
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
  function onSubmit(values: any) {
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

      {/* sign up btn */}
      <CustomButton
        text={"Sign up"}
        btnStyle={{ marginTop: "18%", width: "80%" }}
        onPress={form.handleSubmit}
      />
      {/* have account */}
      <View style={[globalStyles.row, { marginTop: "8%" }]}>
        <Text style={globalStyles.regular(fonts, colors)}>
          You have account?
        </Text>
        {/* sign in */}
        <CustomButton
          text={"Sign in"}
          mode={"text"}
          contentStyle={{ height: 40 }}
          btnStyle={{ width: "auto", marginLeft: 5 }}
          labelStyle={{ ...fonts.semibold, fontSize: 18 }}
          onPress={() => navigation.navigate(routes.sign_in)}
        />
      </View>
    </Container>
  );
};
