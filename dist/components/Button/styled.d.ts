/// <reference types="react" />
import { ColorTheme } from "../../types";
import { COLOR } from "../../constants/style";
interface Props {
    color: keyof typeof COLOR | ColorTheme;
    filled: boolean;
    transition: boolean;
}
export declare const ButtonStyle: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & Props, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export {};
