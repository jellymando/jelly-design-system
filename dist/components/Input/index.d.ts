import React from "react";
import { ColorTheme, Size } from "../../types";
declare const Input: ({ type, label, color, size }: {
    type?: React.HTMLInputTypeAttribute;
    label?: string;
    color?: keyof typeof ColorTheme | ColorTheme;
    size?: Size;
}) => JSX.Element;
export default Input;
