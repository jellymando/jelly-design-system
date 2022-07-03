import React from "react";
import { ColorTheme, Size } from "../../types";
import { COLOR } from "../../constants/style";
declare const Input: ({ type, label, color, size, onChange }: {
    type?: React.HTMLInputTypeAttribute;
    label?: string;
    color?: keyof typeof COLOR | ColorTheme;
    size?: Size;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => JSX.Element;
export default Input;
