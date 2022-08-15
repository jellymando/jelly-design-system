import React, { RefObject } from "react";
import { ColorTheme, Size } from "@/types";
import { COLOR } from "@/constants/style";
import { ButtonStyle } from "./styled";

const Button = React.forwardRef(
  (
    {
      id,
      className,
      type = "button",
      color = ColorTheme.Primary,
      size = Size.Medium,
      filled = false,
      transition = false,
      onClick = () => {},
      children
    }: {
      id?: "string";
      className?: "string";
      type?: "submit" | "reset" | "button";
      color?: keyof typeof COLOR | ColorTheme;
      size?: Size;
      filled?: boolean;
      transition?: boolean;
      onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
      children?: string | JSX.Element;
    },
    ref: RefObject<HTMLButtonElement> | null
  ) => {
    return (
      <ButtonStyle
        id={id}
        className={className}
        type={type}
        color={color}
        sizing={size}
        filled={filled}
        transition={transition}
        ref={ref}
        onClick={onClick}
      >
        {children}
      </ButtonStyle>
    );
  }
);

export default Button;
