import React from "react";
import { Input } from "../input";

export const EmailInput = ({ ...rest }) => {
  return (
    <Input
      keyboardType="email-address"
      label={"Email address"}
      placeholder="name@example.com"
      {...rest}
    />
  );
};
