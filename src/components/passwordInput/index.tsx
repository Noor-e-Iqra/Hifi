import React, { useState, FC } from "react";
import { IconButton } from "react-native-paper";
import Input from "../input";

const PasswordInput: FC<any> = ({ ...rest }) => {
  const [secure, setSecure] = useState<boolean>(true);
  return (
    <Input
      secureTextEntry={secure}
      label={"Password"}
      placeholder="********"
      icon={
        // eye icon
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

export default PasswordInput;
