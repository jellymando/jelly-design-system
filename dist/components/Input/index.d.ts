import React from "react";
import { ColorTheme, Size } from "../../types";
import { COLOR } from "../../constants/style";
declare const Input: ({ type, label, color, size }: {
    type?: React.HTMLInputTypeAttribute;
    label?: string;
    color?: keyof typeof COLOR | ColorTheme;
    size?: Size;
}) => JSX.Element;
export default Input;
