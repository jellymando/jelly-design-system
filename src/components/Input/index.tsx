import React, { forwardRef, RefObject } from "react";
import { ColorTheme, Size } from "@/types";
import { COLOR } from "@/constants/style";
import { Label, InputStyle } from "./styled";

const Input = forwardRef(
  (
    {
      id,
      className,
      type = "text",
      label,
      color = ColorTheme.Gray,
      size = Size.Medium,
      onChange = () => {}
    }: {
      id?: string;
      className?: string;
      type?: React.HTMLInputTypeAttribute;
      label?: string;
      color?: keyof typeof COLOR | ColorTheme;
      size?: Size;
      onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    },
    ref: React.RefObject<HTMLInputElement> | null
  ) => {
    return (
      <>
        {label && <Label>{label}</Label>}
        <InputStyle
          id={id}
          className={className}
          type={type}
          color={color}
          sizing={size}
          ref={ref}
          onChange={onChange}
        />
      </>
    );
  }
);

export default Input;
