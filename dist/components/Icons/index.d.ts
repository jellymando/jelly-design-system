/// <reference types="react" />
import * as Icons from "./Icons";
declare type IconType = keyof typeof Icons;
export declare const IconTypes: ("Bell" | "User")[];
export default function Icon({ name, width, height, color }: {
    name: IconType;
    width?: number;
    height?: number;
    color?: string;
}): JSX.Element;
export {};
