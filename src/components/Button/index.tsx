import React from "react";
import { ColorTheme } from "@/types";
import { ButtonStyle } from "./styled";

const Button = ({
  type,
  color = "primary",
  filled = false,
  children
}: {
  type?: "submit" | "reset" | "button";
  color?: ColorTheme;
  filled?: boolean;
  children?: string | JSX.Element;
}) => {
  return (
    <ButtonStyle type={type || "button"} color={color} filled={filled}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
