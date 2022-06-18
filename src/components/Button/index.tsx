import React from "react";
import { ColorTheme } from "@/types";
import { COLOR } from "@/constants/style";
import { ButtonStyle } from "./styled";

const Button = ({
  type = "button",
  color = ColorTheme.Primary,
  filled = false,
  transition = false,
  children
}: {
  type?: "submit" | "reset" | "button";
  color?: keyof typeof COLOR | ColorTheme;
  filled?: boolean;
  transition?: boolean;
  children?: string | JSX.Element;
}) => {
  return (
    <ButtonStyle type={type} color={color} filled={filled} transition={transition}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
