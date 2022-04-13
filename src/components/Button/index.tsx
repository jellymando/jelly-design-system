import React from "react";
import { ColorTheme } from "@/types";
import { ButtonStyle } from "./styled";

const Button = ({
  type = "button",
  color = ColorTheme.Primary,
  filled = false,
  children
}: {
  type?: "submit" | "reset" | "button";
  color?: ColorTheme;
  filled?: boolean;
  children?: string | JSX.Element;
}) => {
  return (
    <ButtonStyle type={type} color={color} filled={filled}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
