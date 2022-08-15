import styled from "@emotion/styled";
import { ColorTheme, Size } from "@/types";
import { FONTSIZE, COLOR, SIZE } from "@/constants/style";

interface Props {
  color: keyof typeof COLOR | ColorTheme;
  sizing: Size;
  filled: boolean;
  transition: boolean;
}

export const ButtonStyle = styled.button<Props>`
  width: 100%;
  height: ${({ sizing }) => SIZE.height[sizing]}px;
  font-size: ${FONTSIZE.M};
  font-weight: 700;
  color: ${({ color, filled }) =>
    filled
      ? color === ColorTheme.White
        ? "inherit"
        : COLOR.white.default
      : COLOR[color].default};
  background-color: ${({ color, filled }) =>
    filled
      ? COLOR[color].default
      : color === ColorTheme.White
      ? "transparent"
      : COLOR.white.default};
  ${({ color, filled }) =>
    !filled && `border: 2px solid ${COLOR[color].default};`}
  border-radius: 5px;
  cursor: pointer;

  ${({ transition, color, filled }) =>
    transition &&
    `
    transition: 0.5s;
    &:hover:not(:disabled) {
      color: ${color === ColorTheme.White ? "inherit" : COLOR.white.default};
      background-color: ${COLOR[color].default};
    };

    &:active:not(:disabled) {
      background-color: ${COLOR[color].active};
      ${!filled && `border: 2px solid ${COLOR[color].active};`}
    };
  `}

  &:disabled {
    opacity: 0.9;
    cursor: default;
  }
`;
