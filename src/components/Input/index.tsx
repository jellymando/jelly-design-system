import React from "react";
import { ColorTheme, Size } from "@/types";
import { COLOR } from "@/constants/style";
import { Label, InputStyle } from "./styled";

const Input = ({
  type = "text",
  label,
  color = ColorTheme.Gray,
  size = Size.Medium
}: {
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  color?: keyof typeof COLOR | ColorTheme;
  size?: Size;
}) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <InputStyle type={type} color={color} sizing={size} />
    </>
  );
};

export default Input;
