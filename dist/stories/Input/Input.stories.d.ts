import React from "react";
import { ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<({ type, label, color, size, onChange }: {
    type?: React.HTMLInputTypeAttribute;
    label?: string;
    color?: "black" | "gray" | "white" | import("../../types").ColorTheme | "primary" | "mellowBlue";
    size?: import("../../types").Size;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => JSX.Element>;
export default _default;
export declare const Primary: any;
