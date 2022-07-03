import React from "react";
import { ColorTheme } from "@/types";
import { COLOR } from "@/constants/style";
import { ButtonStyle } from "./styled";

const Button = React.forwardRef(
  ({
    type = "button",
    color = ColorTheme.Primary,
    filled = false,
    transition = false,
    onClick = () => {},
    children
  }: {
    type?: "submit" | "reset" | "button";
    color?: keyof typeof COLOR | ColorTheme;
    filled?: boolean;
    transition?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: string | JSX.Element;
  }) => {
    return (
      <ButtonStyle
        type={type}
        color={color}
        filled={filled}
        transition={transition}
        onClick={onClick}
      >
        {children}
      </ButtonStyle>
    );
  }
);

export default Button;
