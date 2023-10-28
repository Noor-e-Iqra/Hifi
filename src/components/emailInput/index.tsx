import React from "react";
import Input from "../input";

const EmailInput: React.FC<any> = ({ ...rest }) => {
  return (
    <Input
      keyboardType="email-address"
      label={"Email address"}
      placeholder="name@example.com"
      {...rest}
    />
  );
};

export default EmailInput;
