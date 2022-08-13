import React from "react";
import { ColorTheme, Size } from "../../types";
import { COLOR } from "../../constants/style";
declare const Input: React.ForwardRefExoticComponent<{
    id?: string;
    className?: string;
    type?: React.HTMLInputTypeAttribute;
    value?: string;
    label?: string;
    color?: keyof typeof COLOR | ColorTheme;
    size?: Size;
    inline?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.RefAttributes<HTMLInputElement>>;
export default Input;
