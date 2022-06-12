/// <reference types="react" />
import { ColorTheme, Size } from "../../types";
interface Props {
    color: keyof typeof ColorTheme | ColorTheme;
    sizing: Size;
}
export declare const Label: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
}, import("react").DetailedHTMLProps<import("react").LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
export declare const InputStyle: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any>;
} & Props, import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
export {};
