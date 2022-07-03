import React from "react";
import { ColorTheme, Size } from "@/types";
import { COLOR } from "@/constants/style";
import { Label, InputStyle } from "./styled";

const Input = ({
  type = "text",
  label,
  color = ColorTheme.Gray,
  size = Size.Medium,
  onChange = () => {}
}: {
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  color?: keyof typeof COLOR | ColorTheme;
  size?: Size;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <InputStyle type={type} color={color} sizing={size} onChange={onChange} />
    </>
  );
};

export default Input;
