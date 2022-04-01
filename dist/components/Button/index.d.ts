/// <reference types="react" />
import { ColorTheme } from "../../types";
declare const Button: ({ type, color, filled, children }: {
    type?: "submit" | "reset" | "button";
    color?: ColorTheme;
    filled?: boolean;
    children?: string | JSX.Element;
}) => JSX.Element;
export default Button;
