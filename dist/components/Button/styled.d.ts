/// <reference types="react" />
import { ColorTheme } from "../../types";
interface Props {
    color: keyof typeof ColorTheme | ColorTheme;
    filled: boolean;
}
export declare const ButtonStyle: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & Props, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export {};
