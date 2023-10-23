import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { CustomButton } from "../../components/customButton";
import { COLORS, FONTS, SIZES } from "../../theme";
import { PasswordInput } from "../../components/passwordInput";
import { useFormik } from "formik";
import * as yup from "yup";
import routes from "../../navigation/routes";
import { EmailInput } from "../../components/emailInput";
import { EMAIL_REGX } from "../../utils/regx";

export const SignUp = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    countryCode: "1",
    phone: "",
    password: "",
  };

  const validationSchema = yup.object({
    phone: yup.string().label("Phone Number").required(),
    password: yup.string().label("Password").required().min(6),
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

  function onSubmit(values) {
    // console.log(values);
    // setLoading(true);
    navigation.navigate(routes.dasboard);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      enabled={Platform.OS === "ios" ? true : false}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.color}>
        {/* email input */}
        <EmailInput form={form} id="email" placeholder="Email" />

        {/* password input */}
        <PasswordInput form={form} id="password" placeholder="Password" />
        <CustomButton
          text={"Sign Up"}
          btnStyle={{ marginTop: 35 }}
          loading={loading}
          disabled={loading}
          onPress={form.handleSubmit}
        />
        <Text style={styles.white_text}>
          By clicking sign up you agreeing to the{" "}
          <Text style={styles.blue}>Terms and Services</Text> and{" "}
          <Text style={styles.blue}>Privacy policy</Text>.
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  white_text: {
    ...FONTS.semi_bold,
    fontSize: 14,
    textAlign: "center",
    marginTop: 30,
    marginHorizontal: 20,
    color: COLORS.white,
    lineHeight: 20,
  },
  blue: {
    color: COLORS.blue,
  },
});
