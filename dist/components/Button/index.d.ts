import React from "react";
import { ColorTheme, Size } from "../../types";
import { COLOR } from "../../constants/style";
declare const Button: React.ForwardRefExoticComponent<{
    id?: "string";
    className?: "string";
    type?: "submit" | "reset" | "button";
    color?: keyof typeof COLOR | ColorTheme;
    size?: Size;
    filled?: boolean;
    transition?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: string | JSX.Element;
} & React.RefAttributes<HTMLButtonElement>>;
export default Button;
