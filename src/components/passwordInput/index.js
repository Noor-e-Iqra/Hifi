import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import { Input } from "../input";

export const PasswordInput = ({ ...rest }) => {
  const [secure, setSecure] = useState(true);
  return (
    <Input
      secureTextEntry={secure}
      label={"Password"}
      placeholder="********"
      icon={
        <IconButton
          icon={!secure ? "eye-off" : "eye"}
          iconColor={"#636D77DE"}
          size={20}
          onPress={() => setSecure(!secure)}
        />
      }
      {...rest}
    />
  );
};
