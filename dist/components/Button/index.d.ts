import React from "react";
import { ColorTheme } from "../../types";
import { COLOR } from "../../constants/style";
declare const Button: React.ForwardRefExoticComponent<{
    type?: "submit" | "reset" | "button";
    color?: keyof typeof COLOR | ColorTheme;
    filled?: boolean;
    transition?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: string | JSX.Element;
} & React.RefAttributes<unknown>>;
export default Button;
