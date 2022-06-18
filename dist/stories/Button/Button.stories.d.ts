/// <reference types="react" />
import { ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<({ type, color, filled, transition, children }: {
    type?: "button" | "reset" | "submit";
    color?: "black" | "gray" | "white" | import("../../types").ColorTheme | "primary" | "mellowBlue";
    filled?: boolean;
    transition?: boolean;
    children?: string | JSX.Element;
}) => JSX.Element>;
export default _default;
export declare const Primary: any;
