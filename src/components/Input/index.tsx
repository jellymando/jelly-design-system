import React, { forwardRef, RefObject } from "react";
import { ColorTheme, Size } from "@/types";
import { COLOR } from "@/constants/style";
import { InputWrap, Label, InputStyle } from "./styled";

const Input = forwardRef(
  (
    {
      id,
      className,
      type = "text",
      label,
      color = ColorTheme.Gray,
      size = Size.Medium,
      inline = false,
      onChange = () => {}
    }: {
      id?: string;
      className?: string;
      type?: React.HTMLInputTypeAttribute;
      label?: string;
      color?: keyof typeof COLOR | ColorTheme;
      size?: Size;
      inline?: boolean;
      onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    },
    ref: React.RefObject<HTMLInputElement> | null
  ) => {
    return (
      <InputWrap inline={inline}>
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
      </InputWrap>
    );
  }
);

export default Input;
