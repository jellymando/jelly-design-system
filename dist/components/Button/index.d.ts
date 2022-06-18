/// <reference types="react" />
import { ColorTheme } from "../../types";
import { COLOR } from "../../constants/style";
declare const Button: ({ type, color, filled, transition, children }: {
    type?: "submit" | "reset" | "button";
    color?: keyof typeof COLOR | ColorTheme;
    filled?: boolean;
    transition?: boolean;
    children?: string | JSX.Element;
}) => JSX.Element;
export default Button;
