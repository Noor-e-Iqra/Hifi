import React, {useState} from 'react';
import { StyleSheet, Text} from 'react-native';
import {CustomButton} from '../../components/customButton';
import {FONTS} from '../../theme';
import {PasswordInput} from '../../components/passwordInput';
import {useFormik} from 'formik';
import * as yup from 'yup';
import routes from '../../navigation/routes';
import {EMAIL_REGX} from '../../utils/regx';
import Container from '../../components/Container';
import {EmailInput} from '../../components/emailInput';

export const Signin = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object({
    password: yup.string().label('Password').required().min(6),
    email: yup
      .string()
      .label('Email')
      .required()
      .matches(EMAIL_REGX, 'Email is not valid'),
  });

  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  function onSubmit(values) {
    // console.log(values);
    // setLoading(true);
    navigation.navigate(routes.dasboard)
  }

  return (
    <Container heading={'Login'}>
      {/* email input */}
      <EmailInput form={form} id="email" placeholder="Email" />
      {/* password input */}
      <PasswordInput form={form} id="password" placeholder="Password" />
      <Text
        style={styles.forgot_pass}
        onPress={() => navigation.navigate(routes.auth.forgetPassword)}>
        Forgot Password?
      </Text>
      <CustomButton
        text={'Login'}
        btnStyle={{marginTop: 35}}
        loading={loading}
        disabled={loading}
        onPress={form.handleSubmit}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  forgot_pass: {
    ...FONTS.regular,
    marginTop: 20,
    alignSelf: 'flex-end',
  },
});
