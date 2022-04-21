import React from "react";
import * as Icons from "./Icons";

type IconType = keyof typeof Icons;
export const IconTypes = Object.keys(Icons) as IconType[];

export default function Icon({
  name,
  width,
  height,
  color
}: {
  name: IconType;
  width?: number;
  height?: number;
  color?: string;
}) {
  const Icon = Icons[name];
  return <Icon width={width} height={height} color={color} />;
}
